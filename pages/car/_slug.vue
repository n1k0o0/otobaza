<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      AssembliesPlaceholder
    template(v-else-if="$fetchState.error")
      .error-message.mt-4
        i.fa.fa-info-circle
        span {{$fetchState.error}}
    template(v-else)
      Assemblies(
        :is-search="isSearch"
        :slug="slug"
      )
</template>
<script>
import Assemblies from '@/components/Catalog/Assemblies'
import AssembliesPlaceholder from '@/components/Placeholders/AssembliesPlaceholder'
import { getUrlSlug } from '@/utils'
import { mapActions } from 'vuex'
export default {
  name: 'Car',
  components: { AssembliesPlaceholder, Assemblies },
  layout: 'pages',
  scrollToTop: true,
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
      slug = getUrlSlug(this.slug, 'car')
    } else {
      slug = getUrlSlug(this.$route.params.slug, 'car')
    }
    console.log(slug,555,this.slug)
    if (!slug.car) this.$nuxt.error({ statusCode: 500, message: 'ID NOT PROVIDED' })
    await this.GET_CAR_ASSEMBLIES({
      car: slug.car
    })
  },
  async validate ({ params, error, app }) {
    const { regex } = getUrlSlug(params.slug, 'car')
    if (!(regex.test(params.slug))) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  methods: {
    ...mapActions({
      GET_CAR_ASSEMBLIES: 'Catalog/GET_CAR_ASSEMBLIES'
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
