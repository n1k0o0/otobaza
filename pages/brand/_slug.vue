<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      ModelsPlaceholder
    template(v-else-if="$fetchState.error")
      .error-message.mt-4
        i.fa.fa-info-circle
        span {{$fetchState.error}}
    template(v-else)
      Models(
        :is-search="isSearch"
      )
</template>
<script>
import Models from '@/components/Catalog/Models'
import ModelsPlaceholder from '@/components/Placeholders/ModelsPlaceholder'
import { getUrlSlug } from '@/utils'
import { mapActions } from 'vuex'
export default {
  name: 'Manufacturer',
  components: { ModelsPlaceholder, Models },
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    slug: {
      type: String,
      default: ''
    }
  },
  scrollToTop: true,
  layout: 'pages',
  async fetch () {
    let slug
    if (this.isSearch) {
      slug = getUrlSlug(this.slug, 'brand')
    } else {
      slug = getUrlSlug(this.$route.params.slug, 'brand')
    }
    if (!slug.manufacturer) this.$nuxt.error({ statusCode: 500, message: 'ID NOT PROVIDED' })
    await this.GET_MANUFACTURER_MODELS({
      manufacturer: slug.manufacturer
    })
  },
  async validate ({ params, error,app }) {
    const { regex } = getUrlSlug(params.slug, 'brand')
    if (!(regex.test(params.slug))) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  methods: {
    ...mapActions({
      GET_MANUFACTURER_MODELS: 'Catalog/GET_MANUFACTURER_MODELS'
    })
  }
}
</script>
<style lang="scss" scoped>
  .Loading {
    margin:15px 30px;
    text-align: center;
    background: #fff;
    border-radius: 2px;
  }
</style>
