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
              h4.rmtt {{ $t('not_found') }}
              p.rmtxt {{ $t('not_found_info') }}
    template(v-else)
      Parts(
        is-part
      )
</template>
<script>
import Parts from '@/components/Catalog/Parts'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SearchPart',
  watchQuery: true,
  components: { PartsPlaceholder, Parts },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const slug = this.$route.params.slug
    const matches = slug.match(/^(p)-([0-9]+)-([0-9]+)-([0-9]+)-([a-zA-Z0-9]+)/)
    if (matches?.[0] && matches?.[1] && matches?.[2] && matches?.[3]) {
      await this.GET_PART({
        article: matches?.[3],
        page: matches?.[2] || 1,
        manufacturer: matches?.[4],
        assembly: matches?.[5],
        filter: this.$route?.query?.filter
      })
    }
  },
  computed: {
    ...mapGetters({
      geo: 'UI/geo'
    }),
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        { hid: 'description', name: 'description', content: this.$store.getters['Catalog/parts']?.brand?.meta_desc || '' },
        { hid: 'og:title', name: 'og:title', content: this.$store.getters['Catalog/parts']?.brand?.meta_title || '' }
      ]
    }
  },
  async validate ({ params, error, app }) {
    const regex = /^(p)-([0-9]+)-([0-9]+)-([0-9]+)-([a-zA-Z0-9]+)/
    if (!(regex.test(params.slug))) {
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
      GET_PART: 'Catalog/GET_PART'
    })
  },
}
</script>
<style lang="scss" scoped>
  .Loading {
    margin-top: 90px;
    margin-bottom: 60px;
    border-radius: 3px;
    background-color: #fff;
  }
</style>
