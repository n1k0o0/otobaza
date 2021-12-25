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
      Parts
</template>
<script>
import Parts from '@/components/Catalog/Parts'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import { getUrlSlug } from '@/utils'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Assembly',
  watchQuery: true,
  components: { PartsPlaceholder, Parts },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const { p, page, model, car, assembly, name } = getUrlSlug(this.$route.params.slug, 'assembly')
    if (p && page && model && car && assembly) {
      await this.GET_PARTS({
        model,
        car,
        assembly,
        name,
        filter: this.$route.query?.filter || 'nearest',
        page
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
      GET_PARTS: 'Catalog/GET_PARTS'
    })
  },
  head () {
    return {
      meta: Array.from(this.meta)
    }
  },
  async validate ({ params, error, app }) {
    const { regex } = getUrlSlug(params.slug, 'assembly')
    if (!(regex.test(params.slug))) {
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
</style>
