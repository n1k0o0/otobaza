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
      Dismantles
</template>
<script>
import Dismantles from '@/components/Catalog/Dismantles'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import { getUrlSlug } from '@/utils'
import { mapActions } from 'vuex'
export default {
  name: 'DismantlesPage',
  layout: 'pages',
  components: { Dismantles, PartsPlaceholder },
  async fetch () {
    const { p, page } = getUrlSlug(this.$route.params.slug, 'dismantles')
    if (p && page) {
      await this.GET_DISMANTLES({
        page
      })
    }
  },
  async validate ({ params, error, app }) {
    const { regex } = getUrlSlug(params.slug, 'dismantles')
    if (!(regex.test(params.slug))) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  methods: {
    ...mapActions({
      GET_DISMANTLES: 'Catalog/GET_DISMANTLES'
    })
  }
}
</script>
