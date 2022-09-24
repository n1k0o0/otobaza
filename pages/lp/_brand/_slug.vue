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
              p.rmtxt {{ $t('not_found_info') }}
              p.rmtxt {{ $fetchState.error }}
    template(v-else)
      .container
        .search_wrap.d-flex.flex-column
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
    console.log(4444, this.$route.params)
    await this.GET_PART_BY_BRAND({ brand })
  },
  computed: {
    ...mapGetters({
      geo: 'UI/geo',
      parts: 'Catalog/search_parts'
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
  async validate ({ params, error, app }) {
    const regex = /^\d+$/
    if (!(regex.test(params.brand))) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
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
      GET_PART_BY_BRAND: 'Catalog/GET_PART_BY_BRAND'
    })
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
</style>
