<template lang="pug">
  .catalog-logo
    .row
      .col-6.col-sm-4.col-md-2(v-for="(manufacture,m_id) in manufacturers" :key="m_id")
        .catalog_logo
          template(v-if="isSearch")
            a(:href="link(manufacture)" @click.prevent="onClick(manufacture)")
              img.cl-img(:alt="`${manufacture.manuName} avtomobil ehtiyyat hisseleri`" :src="src(manufacture.url)")
              span.cl-tt {{ manufacture.manuName }}
          template(v-else)
            n-link(:to="link(manufacture)")
              img.cl-img(:alt="`${manufacture.manuName} avtomobil ehtiyyat hisseleri`" :src="src(manufacture.url)")
              span.cl-tt {{ manufacture.manuName }}
</template>
<script>
import { setNuxtLink } from '@/utils'

export default {
  name: 'CatalogLogo',
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    manufacturers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    src (url) {
      return url
    },
    link (model) {
      return setNuxtLink(this, 'lp-brand-slug', model)
    },
    onClick (manufacture) {
      this.$emit('selected', manufacture)
    }
  }
}
</script>
