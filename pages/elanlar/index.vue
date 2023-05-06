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
            a {{$t('home_search.used')}}
        .search_wrap.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text {{$t('search')}}
          UsedFilter(:search="search")
          .elan_wrapper(v-if='ad_vip.length')
            .elan_header
              h2
                | {{ $t('used.vip') }}
              //span(@click="$router.push(localePath({ name: 'elanlar'}));")
              //  | {{ $t("see_all") }}
              //  svg(fill='none' height='16' viewbox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg')
              //    path(d='M3.3335 8.00001H12.6668M12.6668 8.00001L8.00016 3.33334M12.6668 8.00001L8.00016 12.6667' stroke='#667085' stroke-linecap='round' stroke-linejoin='round')
            .search_results_items
              UsedPart(v-for='(ad,i) in ad_vip' :key='i' :card='ad')
          .elan_header(class="mb-0")
            h2
              | {{ $t("used.last") }}
          UsedParts(:search="search", :loading="loadingResults")

</template>

<script>
import SearchPlaceholder from '@/components/Search/SearchPlaceholder'
import UsedParts from '~/components/Used/UsedParts.vue'
import UsedFilter from '~/components/Used/UsedFilter.vue'

import { mapActions, mapGetters } from 'vuex'
import UsedPart from '@/components/Used/UsedPart.vue'

export default {
  name: 'Search',
  watchQuery: true,
  components: {
    UsedPart,
    SearchPlaceholder,
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
      if (!this.manufacturer_models.length || isNotCurrentLang) {
        await this.GET_MANUFACTURER_MODELS({ manufacturer: this.$route.query.brand })
      }

      const brand = this.manufacturers.find(manu => manu.manuId === +this.$route.query.brand)

      if (brand) {
        this.search.brand = +brand.manuId
      }
    }

    if (this.$route.query.model) {
      const model = this.manufacturer_models.find(manu => manu.modelId === +this.$route.query.model)
      if (model) {
        this.search.model = +model.modelId
      }
    }

    if (this.$route.query.keyword) {
      this.search.keyword = this.$route.query.keyword
    }

    this.loadingResults = true
    await this.GET_PARTS(this.search)
    await this.GET_HOME_ADS({})
    this.loadingResults = false
  },
  data () {
    return {
      loadingResults: false,
      search: {
        keyword: '',
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
      manufacturers: 'Used/brands',
      manufacturer_models: 'Used/models',
      ad_vip: 'Used/ad_vip'
    })
  },
  methods: {
    ...mapActions({
      FILTER_PARTS: 'Used/FILTER_PARTS',
      GET_PARTS: 'Used/GET_PARTS',
      GET_CATALOG_MANUFACTURERS: 'Used/GET_BRANDS',
      GET_MANUFACTURER_MODELS: 'Used/GET_MODELS',
      GET_HOME_ADS: 'Used/GET_HOME_ADS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
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
