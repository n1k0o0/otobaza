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
    template(v-else)
      div.container
        ol.breadcrumb-custom
          li.breadcrumb-item
            a(href='/') Home
          li.breadcrumb-item.active(aria-current='page')
            | {{$t('home_search.spare-parts')}}
        .search_wrap.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text {{$t('search')}}
          PartsFilter(:search="search")
          SearchResults(:search="search", :loading="loadingResults")

</template>

<script>
import Parts from '@/components/Catalog/Parts'
import SearchPlaceholder from '@/components/Search/SearchPlaceholder'
import SearchResults from '@/components/Search/ResultParts'
import PartsFilter from '@/components/Search/PartsFilter'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Search',
  watchQuery: true,
  components: {
    SearchPlaceholder,
    Parts,
    SearchResults,
    PartsFilter
  },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    console.time('all')
    console.time('00')
    const isNotCurrentLang = this.$i18n.locale !== this.search_lang
    if (!this.spareParts?.length || isNotCurrentLang) {
      await this.GET_SPARE_PARTS()
    }
    console.timeEnd('00')

    console.time('find sparePart')
    if (this.$route.query.sparePart) {
      var sparePartSlugPart = this.spareParts.find(sparePart => sparePart.assemblyGroupNodeId === +this.$route.query.sparePart)
      if (sparePartSlugPart) {
        this.search.sparePart = +sparePartSlugPart.assemblyGroupNodeId
      }
    }
    console.timeEnd('find sparePart')

    console.time('11')
    if (this.$route.query.brand && sparePartSlugPart && (!this.brands?.length || isNotCurrentLang)) {
      await this.GET_BRANDS(this.$route.query.sparePart)
    }

    if (this.$route.query.brand) {
      var brandSlug = this.brands.find(el => el.manuId === +this.$route.query.brand)
      if (brandSlug) {
        this.search.brand = +brandSlug.manuId
      }
    }
    console.timeEnd('11')

    console.time('22')
    if (this.$route.query.model && brandSlug && (!this.models?.length || isNotCurrentLang)) {
      await this.GET_MODELS(this.$route.query)
    }

    if (this.$route.query.model) {
      var modelSlug = this.models.find(el => el.modId === +this.$route.query.model)
      if (modelSlug) {
        this.search.model = +modelSlug.modId
      }
    }
    console.timeEnd('22')

    console.time('33')
    if (this.$route.query.type && modelSlug && (!this.types?.length || isNotCurrentLang)) {
      await this.GET_TYPES(this.$route.query)
    }

    if (this.$route.query.type) {
      const typeSlug = this.types.find(el => el.carId === +this.$route.query.type)
      if (typeSlug) {
        this.search.type = +typeSlug.carId
      }
    }
    console.timeEnd('33')

    console.timeEnd('all')

    console.time('44')
    if (this.search.sparePart) {
      this.loadingResults = true
      await this.GET_SEARCH_PARTS(this.search)
      this.loadingResults = false
    }
    console.timeEnd('44')
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
      search_parts: 'Catalog/search_parts',
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
.search_wrap {
  gap: 24px;
  //margin: 20px auto;
  padding: 0 0 40px 0;
  //min-height: calc(100vh - 20px - 62px - 95px - 241px);
  min-height: calc(100vh - 123px - 41px - 36px - 360px);
  border-radius: 16px;

  .fa-search {
    position: absolute;
    top: 10px;
    right: 5px;
    color: #bababa;
    cursor: pointer;
  }

}

//
//@media screen and (min-width: 768px) {
//  .search_wrap {
//    padding: 50px 20px;
//  }
//}
//
//@media screen and (min-width: 992px) {
//  .search_wrap {
//    padding: 50px 30px;
//  }
//}
</style>
