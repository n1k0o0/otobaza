<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      CarsPlaceholder
    template(v-else-if="$fetchState.error")
      .error-message.mt-4
        i.fa.fa-info-circle
        span {{$fetchState.error}}
    template(v-else)
      Cars(
        :is-search="isSearch"
      )
</template>
<script>
import Cars from '@/components/Catalog/Cars'
import CarsPlaceholder from '@/components/Placeholders/CarsPlaceholder'
import { getUrlSlug } from '@/utils'
import { mapActions } from 'vuex'
export default {
  name: 'Models',
  components: { CarsPlaceholder, Cars },
  scrollToTop: true,
  layout: 'pages',
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
  async fetch () {
    let slug
    if (this.isSearch) {
      slug = getUrlSlug(this.slug, 'model')
    } else {
      slug = getUrlSlug(this.$route.params.slug, 'model')
    }

    if (!slug.model) this.$nuxt.error({ statusCode: 500, message: 'ID NOT PROVIDED' })
    await this.GET_MODEL_CARS({
      model: slug.model
    })
  },
  async validate ({ params, error, app }) {
    const { regex } = getUrlSlug(params.slug, 'model')
    if (!(regex.test(params.slug))) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  methods: {
    ...mapActions({
      GET_MODEL_CARS: 'Catalog/GET_MODEL_CARS'
    })
  },
}
</script>
<style lang="scss" scoped>
  .Loading {
    text-align: center;
    background: #fff;
    border-radius: 2px;
  }
</style>
