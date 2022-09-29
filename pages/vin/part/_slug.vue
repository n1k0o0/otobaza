<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      SearchPlaceholder(:filter="false")
    template(v-else-if="$fetchState.error")
      .container
        .mcontainer.mh60vh
          .response-message
            .mkub.mkubfail
            .rminfo
              h4.rmtt {{ $t('not_found') }}
              p.rmtxt {{ $fetchState.error }}
    template(v-else)
      .container
        .search_wrap.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text {{$t('home_search.spare-parts')}}
          .sort_wrap.text-right(v-show="search_parts.length")
            span(@click.prevent="GET_SEARCH_PARTS({...search,priceSort:1})", :class="{'active':search_price_sort}")
              | {{$t('price')}}
              img(src="img/search/sort_arrow.svg")
            span(@click.prevent="GET_SEARCH_PARTS({...search,isNewSort:1})", :class="{'active':search_new_sort}")
              | {{$t('new')}}
              img(src="img/search/sort_arrow.svg")
          SearchResults(:search={}, :loading="false")
</template>
<script>
import Parts from '@/components/Catalog/Parts'
import SearchPlaceholder from '@/components/Search/SearchPlaceholder'
import SearchResults from '@/components/Search/ResultParts'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Assembly',
  watchQuery: true,
  components: { PartsPlaceholder, Parts, SearchPlaceholder, SearchResults },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const param = this.$route.params.slug.split('-')
    const page = param[1]
    const oem = param[0]
    if (oem && page) {
      await this.GET_PARTS_BY_VIN({
        oem,
        page
      })
    }
  },
  data () {
    return {
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
      geo: 'UI/geo',
      parts: 'Catalog/search_parts',
      search_new_sort: 'Catalog/search_new_sort',
      search_price_sort: 'Catalog/search_price_sort',
      search_parts: 'Catalog/search_parts'
    }),
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$store.getters['Catalog/parts']?.brand?.meta_desc || ''
        },
        { hid: 'og:title', name: 'og:title', content: this.$store.getters['Catalog/parts']?.brand?.meta_title || '' }
      ]
    }
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
      GET_PARTS_BY_VIN: 'Catalog/GET_PARTS_BY_VIN',
      GET_SEARCH_PARTS: 'Catalog/GET_SEARCH_PARTS'
    })
  },
  head () {
    return {
      meta: Array.from(this.meta)
    }
  },
  async validate ({ params, error, app }) {
    const param = params.slug.split('-')
    const page = param[1]
    const oem = param[0]

    if (!(page && oem)) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
.Loading {
  margin-top: 90px;
  margin-bottom: 60px;
  border-radius: 3px;
  background-color: #fff;
}

.search_wrap {
  background-color: #fff;
  gap: 15px;
  margin: 20px auto;
  padding: 20px 0;
  //min-height: calc(100vh - 20px - 62px - 95px - 241px);
  min-height: calc(100vh - 123px - 41px - 36px - 360px);
  border-radius: 16px;
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
</style>
