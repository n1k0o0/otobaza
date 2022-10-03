<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      SearchPlaceholder
    template(v-else-if="$fetchState.error")
      .container
        .mcontainer.mh60vh
          .response-message
            .mkub.mkubfail
            .rminfo
              h4.rmtt {{ $t('not_found') }}
              p.rmtxt {{ $t('not_found_info') }}
    template(v-else)
      .container
        .search_wrap.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text {{$t('home_search.spare-parts')}}
          .filter.row
            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.sparePart', :loading="loading", label='assemblyGroupName', :options='spareParts', :reduce='part => part.assemblyGroupNodeId', @input="GET_BRANDS(search.sparePart)", :placeholder="$t('home_search.spare-parts')")
                template(v-slot:selected-option='option')
                  span(:class='option.icon')
                  | {{ option.assemblyGroupName.length < 15 ? option.assemblyGroupName : (option.assemblyGroupName.substring(0, 12) + '...') }}
                template(v-slot:option='option')
                  span(:class='option.icon')
                  | {{ option.assemblyGroupName }}

            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12

              v-select(v-model='search.brand', :loading="loading", :disabled='!search.sparePart', label='manuName', :options='brands', :reduce='brand => brand.manuId', @input='GET_MODELS(search)', :placeholder="$t('brand')", :reset-on-options-change="true")
                template(v-slot:selected-option='option')
                  span(:class='option.icon')
                  | {{ option.manuName.length < 15 ? option.manuName : (option.manuName.substring(0, 12) + '...') }}
                template(v-slot:option='option')
                  span(:class='option.icon')
                  | {{ option.manuName }}

            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.model', :loading="loading", :disabled='!search.brand', label='modelName', :options='models', :reduce='part => part.modId', @input="GET_TYPES(search)", :placeholder="$t('model')", :reset-on-options-change="true")
                template(v-slot:selected-option='option')
                  span(:class='option.icon')
                  | {{ option.modelName.length < 15 ? option.modelName : (option.modelName.substring(0, 12) + '...') }}
                template(v-slot:option='option')
                  span(:class='option.icon')
                  | {{ option.modelName }}

            .filter_item.col-md-4.col-lg-3.col-xl-2
              v-select(v-model='search.type', :disabled='!search.model', :loading="loading", :options='types', :reduce='part => part.carId', :placeholder="$t('type')", :reset-on-options-change="true")
                template(slot='selected-option' slot-scope='option')
                  | {{ (option.carName + '(' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')').substring(0, 8) }}...
                template(slot='option' slot-scope='option')
                  | {{ option.carName + ' (' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')' }}

            .filter_item.col-md-4.col-lg-3.col-xl-1.w-100.h-100
              button.btn-new(@click="searchMethod", :disabled="!search.model") {{$t('search')}}

          .sort_wrap.text-right(v-show="search_parts.length")
            span(@click.prevent="FILTER_PARTS('price')", :class="{'active':search_sort_by==='price'}")
              | {{$t('price')}}
              img(src="/img/search/sort_arrow.svg")
            span(@click.prevent="FILTER_PARTS('state')", :class="{'active':search_sort_by==='state'}")
              | {{$t('new')}}
              img(src="/img/search/sort_arrow.svg")
          SearchResults(:search="{}" :loading="false")
</template>
<script>
import Parts from '@/components/Catalog/Parts'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import SearchPlaceholder from '@/components/Search/SearchPlaceholder'
import SearchResults from '@/components/Search/ResultParts'
import SearchVin from '@/components/Common/Index/HeaderSearch'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LpBrand',
  watchQuery: true,
  components: { PartsPlaceholder, Parts, SearchResults, SearchPlaceholder, SearchVin },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const brand = this.$route.params.brand
    await this.GET_PART_BY_BRAND({ brand })

    const isNotCurrentLang = this.$i18n.locale !== this.search_lang
    if (!this.spareParts?.length || isNotCurrentLang) {
      await this.GET_SPARE_PARTS()
    }
  },
  async validate ({ params, error, app }) {
    const regex = /^\d+$/
    if (!(regex.test(params.brand))) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  data () {
    return {
      loadingResults: false,
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
      search_sort_by: 'Catalog/search_sort_by',
      search_parts: 'Catalog/search_parts'
    })
  },
  watch: {
    geo: {
      deep: true,
      handler () {
        this.$fetch()
      }
    }
  },
  methods: {
    ...mapActions({
      GET_SPARE_PARTS: 'Catalog/GET_SPARE_PARTS',
      GET_BRANDS: 'Catalog/GET_BRANDS',
      GET_MODELS: 'Catalog/GET_MODELS',
      GET_TYPES: 'Catalog/GET_TYPES',
      GET_SEARCH_PARTS: 'Catalog/GET_SEARCH_PARTS',
      GET_PART_BY_BRAND: 'Catalog/GET_PART_BY_BRAND',
      FILTER_PARTS: 'Catalog/FILTER_PARTS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    async searchMethod () {
      this.loadingResults = true
      await this.GET_SEARCH_PARTS(this.search)
      this.loadingResults = false
    }
  },
  head () {
    const brand = this.$route.params.slug.toUpperCase().replace('-', ' ')

    const title = this.title[this.$i18n.locale].replace('{name}', brand)
    const description = this.description[this.$i18n.locale].replace('{name}', brand)

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
.search_wrap {
  background-color: #fff;
  gap: 15px;
  margin: 20px auto;
  padding: 20px 0;
  //min-height: calc(100vh - 20px - 62px - 95px - 241px);
  min-height: calc(100vh - 123px - 41px - 36px - 360px);
  border-radius: 16px;

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
    color: #98A2B3;

    span {
      cursor: pointer;

      img {
        margin-left: 5px;
      }

      margin-right: 10px;

      &.active, &:hover {
        color: #344054;
      }
    }
  }

  .fa-search {
    position: absolute;
    top: 10px;
    right: 5px;
    color: #bababa;
    cursor: pointer;
  }

  .btn-new {
    height: 40px;
  }

  .search_parts_button {
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    padding: 4px 0.75rem !important;
  }
}

@media screen and (min-width: 768px) {
  .search_wrap {
    padding: 50px 20px;
  }
}

@media screen and (min-width: 992px) {
  .search_wrap {
    padding: 50px 30px;
  }
}

.v-select {
  height: 100% !important;
}
</style>
