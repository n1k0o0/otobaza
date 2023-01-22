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
              p.rmtxt {{ $fetchState.error }}
    template(v-else)
      .container.position-relative
        ol.breadcrumb-custom
          li.breadcrumb-item
            a(href='/') Home
          li.breadcrumb-item.active(aria-current='page')
            | {{$t('home_search.spare-parts')}}
        .search_wrap.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text {{$t('search')}}
          UsedFilter(:search="search")
          UsedParts(:search="search", :loading="loadingResults")

</template>

<script>
import Parts from '@/components/Catalog/Parts'
import SearchPlaceholder from '@/components/Search/SearchPlaceholder'
import UsedParts from '~/components/Used/UsedParts.vue'
import UsedFilter from '~/components/Used/UsedFilter.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Search',
  watchQuery: true,
  components: {
    SearchPlaceholder,
    Parts,
    UsedParts,
    UsedFilter
  },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const isNotCurrentLang = this.$i18n.locale !== this.search_lang
    if (!this.manufacturers.length || isNotCurrentLang) {
      await this.GET_CATALOG_MANUFACTURERS({ type: 'default' })
    }

    if (this.$route.query.brand) {
      await this.GET_MANUFACTURER_MODELS({ manufacturer: this.$route.query.brand })

      const brand = this.manufacturers.find(manu => manu.manuId === +this.$route.query.brand)

      if (brand) {
        this.search.brand = +brand.manuId
      }
    }

    if (this.$route.query.model) {
      const model = this.manufacturer_models.find(manu => manu.modId === +this.$route.query.model)
      if (model) {
        this.search.model = +model.modId
      }
    }

    this.loadingResults = true
    await this.GET_PARTS(this.search)
    this.loadingResults = false
  },
  data () {
    return {
      loadingResults: false,
      search: {
        title: '',
        model: '',
        brand: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'Used/loading',
      search_lang: 'Used/search_lang',
      parts: 'Used/parts',
      search_sort_by: 'Used/sort_by',
      manufacturers: 'Catalog/manufacturers',
      manufacturer_models: 'Catalog/manufacturer_models'
    })
  },
  methods: {
    ...mapActions({
      GET_SEARCH_PARTS: 'Catalog/GET_SEARCH_PARTS',
      FILTER_PARTS: 'Used/FILTER_PARTS',
      GET_PARTS: 'Used/GET_PARTS',
      GET_CATALOG_MANUFACTURERS: 'Catalog/GET_CATALOG_MANUFACTURERS',
      GET_MANUFACTURER_MODELS: 'Catalog/GET_MANUFACTURER_MODELS'
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
