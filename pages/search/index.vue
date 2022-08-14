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
              h4.rmtt {{ $t('not_found') }}`
              p.rmtxt {{ $t('not_found_info') }}
              h1 {{$fetchState}}
    template(v-else)
      div
        .container.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text {{$t('home_search.spare-parts')}}
          .filter.row
            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.sparePart', :loading="loading", label='assemblyGroupName', :options='spareParts', :reduce='part => part.assemblyGroupNodeId', @input='GET_BRANDS(search.sparePart)', :placeholder="$t('home_search.spare-parts')")
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
              button.btn.btn-primary.w-100(@click="searchMethod") {{$t('search')}}
          .vin_search.d-flex.justify-content-center
            div.w-50.position-relative
              input.form-control(:placeholder="$t('search_placeholder')")
              .fa.fa-search.fa-lg.fa-fw
          .sort_wrap.text-right(v-show="search.sparePart")
            span(@click.prevent="GET_SEARCH_PARTS({...search,priceSort:1})")
              | {{$t('price')}}
              img(src="img/search/sort_arrow.svg")
            span(@click.prevent="GET_SEARCH_PARTS({...search,isNewSort:1})")
              | {{$t('new')}}
              img(src="img/search/sort_arrow.svg")
          SearchResults(:search="search", :loading="loadingResults")

</template>
<script>
import Parts from '@/components/Catalog/Parts'
import SearchPlaceholder from '@/components/Search/SearchPlaceholder'
import SearchResults from '@/components/Search/ResultParts'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Search',
  watchQuery: true,
  components: { SearchPlaceholder, Parts, SearchResults },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const isNotCurrentLang = this.$i18n.locale !== this.search_lang
    if (!this.spareParts?.length || isNotCurrentLang) {
      await this.GET_SPARE_PARTS()
    }
    if (this.$route.query.brand && (!this.brands?.length || isNotCurrentLang)) {
      await this.GET_BRANDS(this.$route.query.sparePart)
    }
    if (this.$route.query.model && (!this.models?.length || isNotCurrentLang)) {
      await this.GET_MODELS(this.$route.query)
    }
    if (this.$route.query.type && (!this.types?.length || isNotCurrentLang)) {
      await this.GET_TYPES(this.$route.query)
    }

    if (this.$route.query.sparePart) {
      const sparePartSlugPart = this.spareParts.find(sparePart => sparePart.assemblyGroupNodeId === +this.$route.query.sparePart)
      if (sparePartSlugPart) {
        this.search.sparePart = +sparePartSlugPart.assemblyGroupNodeId
      }
    }

    if (this.$route.query.brand) {
      const brandSlug = this.brands.find(el => el.manuId === +this.$route.query.brand)
      if (brandSlug) {
        this.search.brand = +brandSlug.manuId
      }
    }

    if (this.$route.query.model) {
      const modelSlug = this.models.find(el => el.modId === +this.$route.query.model)
      if (modelSlug) {
        this.search.model = +modelSlug.modId
      }
    }
    if (this.$route.query.type) {
      const typeSlug = this.types.find(el => el.carId === +this.$route.query.type)
      if (typeSlug) {
        this.search.type = +typeSlug.carId
      }
    }

    if (this.search.sparePart) {
      this.loadingResults = true
      await this.GET_SEARCH_PARTS(this.search)
      this.loadingResults = false
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
      search_new_sort: 'Catalog/search_new_sort',
      search_price_sort: 'Catalog/search_price_sort'
    })
  },
  methods: {
    ...mapActions({
      GET_SPARE_PARTS: 'Catalog/GET_SPARE_PARTS',
      GET_BRANDS: 'Catalog/GET_BRANDS',
      GET_MODELS: 'Catalog/GET_MODELS',
      GET_TYPES: 'Catalog/GET_TYPES',
      GET_SEARCH_PARTS: 'Catalog/GET_SEARCH_PARTS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    async searchMethod () {
      this.loadingResults = true
      await this.GET_SEARCH_PARTS(this.search)
      this.loadingResults = false
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
