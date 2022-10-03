<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      PartsPlaceholder
    template(v-else-if="$fetchState.error")
      .container
        .mcontainer.mh60vh
          .response-message
            .mkub.mkubfail
            .rminfo
              h4.rmtt {{ $t('not_found') }}`
              p.rmtxt {{ $t('not_found_info') }}
    template(v-else)
      div
        .container.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text {{$t('home_search.spare-parts')}}
          .filter.row
            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.sparePart', :loading="loading", label='assemblyGroupName', :options='spareParts', :reduce='part => part.assemblyGroupNodeId', @input='GET_BRANDS(search.sparePart)',:placeholder="$t('home_search.spare-parts')")
            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.brand', :loading="loading", :disabled='!search.sparePart', label='manuName', :options='brands', :reduce='brand => brand.manuId', @input='GET_MODELS(search)', :placeholder="$t('brand')", :reset-on-options-change="true")
            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.model', :loading="loading", :disabled='!search.brand', label='modelName', :options='models', :reduce='part => part.modId', @input='GET_TYPES(search)', :placeholder="$t('model')", :reset-on-options-change="true")
            .filter_item.col-md-4.col-lg-3.col-xl-2
              v-select(v-model='search.type', :disabled='!search.model', :loading="loading", :options='types', :reduce='part => part.carId', :placeholder="$t('type')", :reset-on-options-change="true")
                template(slot='selected-option' slot-scope='option')
                  | {{ option.carName +'('+ option.yearOfConstrFrom + '-'+option.yearOfConstrTo +')' }}
                template(slot='option' slot-scope='option')
                  | {{ option.carName +' ('+ option.yearOfConstrFrom + '-'+option.yearOfConstrTo +')' }}
            .filter_item.col-md-4.col-lg-3.col-xl-1.w-100
              button.btn.btn-primary.w-100(@click="GET_SEARCH_PARTS(search)") {{$t('search')}}
          .vin_search.d-flex.justify-content-center
            div.w-50.position-relative
              input.form-control(:placeholder="$t('search_placeholder')")
              .fa.fa-search.fa-lg.fa-fw
          .sort_wrap.text-right(v-show="search.sparePart")
            span(@click.prevent="FILTER_PARTS('price')", :class="{'active':search_sort_by==='price'}")
              | {{$t('price')}}
              img(src="/img/search/sort_arrow.svg")
            span(@click.prevent="FILTER_PARTS('state')", :class="{'active':search_sort_by==='state'}")
              | {{$t('new')}}
              img(src="/img/search/sort_arrow.svg")
          SearchResults(:search="search")
</template>
<script>
import Parts from '~/components/Catalog/Parts'
import PartsPlaceholder from '~/components/Placeholders/PartsPlaceholder'
import SearchResults from '~/components/Search/ResultParts'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CatalogBrand',
  watchQuery: true,
  components: { PartsPlaceholder, Parts, SearchResults },
  layout: 'pages',
  scrollToTop: true,
  async validate ({ params, error, app }) {
    console.log(params)
    const brand = params.brand
    const catalog = params.catalog
    if (isNaN(brand) || isNaN(catalog)) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  async fetch () {
    const brand = +this.$route.params.brand
    const catalog = +this.$route.params.catalog

    if (!this.spareParts?.length) {
      await this.GET_SPARE_PARTS()
    }
    const sparePartSlugPart = this.spareParts.find(sparePart => sparePart.assemblyGroupNodeId === catalog)
    if (sparePartSlugPart) {
      this.search.sparePart = +sparePartSlugPart.assemblyGroupNodeId
    }

    if (this.search.sparePart && !this.brands?.length) {
      await this.GET_BRANDS(this.search.sparePart)
    }
    const brandSlug = this.brands.find(el => el.manuId === brand)
    if (brandSlug) {
      this.search.brand = +brandSlug.manuId
    }
  },
  data () {
    return {
      search: {
        sparePart: '',
        model: '',
        brand: '',
        type: ''
      },
      title: {
        az: '{name} Avtomobil ehtiyat hissələrinin satışı',
        ru: '{name} Продажа автозапчастей',
        en: '{name} Sale of auto spare parts',
        tr: '{name} Oto yedek parça satışı'
      },
      description: {
        az: '{name} birinci və ikinci əl ehtiyat hissəsini əldə etmək ucun Otobaza saytina daxil ola bilərsiniz',
        ru: '{name} Вы можете посетить веб-сайт Autobaza, чтобы купить оригинальные и подержанные запчасти',
        en: 'You can visit Autobaza website to buy {name} first and second hand spare parts',
        tr: '{name} birinci ve ikinci el yedek parça satın almak için Autobaza web sitesini ziyaret edebilirsiniz.'
      }
    }
  },
  computed: {
    ...mapGetters({
      spareParts: 'Catalog/spare_parts',
      brands: 'Catalog/brands',
      models: 'Catalog/models',
      types: 'Catalog/types',
      loading: 'Catalog/loading',
      search_lang: 'Catalog/search_lang',
      search_sort_by: 'Catalog/search_sort_by'
    })
  },
  methods: {
    ...mapActions({
      GET_SPARE_PARTS: 'Catalog/GET_SPARE_PARTS',
      GET_BRANDS: 'Catalog/GET_BRANDS',
      GET_MODELS: 'Catalog/GET_MODELS',
      GET_TYPES: 'Catalog/GET_TYPES',
      GET_SEARCH_PARTS: 'Catalog/GET_SEARCH_PARTS',
      FILTER_PARTS: 'Catalog/FILTER_PARTS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  head () {
    const catalog = this.$route.params.title.toUpperCase().replace('-', ' ')
    const brand = this.$route.params.slug.toUpperCase().replace('-', ' ')

    const title = this.title[this.$i18n.locale].replace('{name}', brand)
    const description = this.description[this.$i18n.locale].replace('{name}', catalog)

    return {
      title: `${title} `,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${description}`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-color: #fff;
  gap: 15px;
  margin: 10px auto;
  padding: 50px 30px;
  min-height: calc(100vh - 20px - 62px - 95px - 241px);

  .filter {
    row-gap: 10px;
  }

  .vin_search {
    > div {
      @media screen and (max-width: 767px) {
        width: 100% !important;
      }
    }
  }

  .sort_wrap {
    color: #4a8ee9;

    span {
      cursor: pointer;

      img {
        margin-left: 5px;
      }

      margin-right: 10px;
    }
  }

  .fa-search {
    position: absolute;
    top: 10px;
    right: 5px;
    color: #bababa;
    cursor: pointer;
  }

  .btn {
    border-radius: 5px;
    background-color: #4a8ee9;
    color: #fff;
  }
}
</style>
