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
      .container.position-relative
        ol.breadcrumb-custom
          li.breadcrumb-item
            a(href='/') Home
          li.breadcrumb-item.active(aria-current='page')
            a {{$t('home_search.spare-parts')}}
        .search_wrap.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text {{$t('home_search.spare-parts')}}
          PartsFilter(:search="search")
          SearchResults(:search="{}" :loading="false")
</template>
<script>
import Parts from '@/components/Catalog/Parts'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import SearchPlaceholder from '@/components/Search/SearchPlaceholder'
import SearchResults from '@/components/Search/ResultParts'
import SearchVin from '@/components/Common/Index/HeaderSearch'
import PartsFilter from '@/components/Search/PartsFilter'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LpBrand',
  watchQuery: true,
  components: { PartsPlaceholder, Parts, SearchResults, SearchPlaceholder, SearchVin, PartsFilter },
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
        az: '{name} birinci və ikinci əl ehtiyat hissesini əldə etmək ucun Otobaza saytina daxil ola bilərsiniz',
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
  grid-gap: 24px;
  gap: 24px;

  //margin: 20px auto;
  padding: 0 0 40px 0;
  //min-height: calc(100vh - 20px - 62px - 95px - 241px);
  min-height: calc(100vh - 123px - 41px - 36px - 360px);
  border-radius: 16px;

  .filter {
    row-gap: 10px;
  }

}

.v-select {
  height: 100% !important;
}
</style>
