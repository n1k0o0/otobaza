<template lang="pug">
  .catalog-alphabet
    .ca-item(v-for="(manufacture,m_id) in manufacturers" :key="m_id")
      code.ca-letter {{ manufacture.char  }}
      .ca-list
        .ca_list(v-for="(model,i) in manufacture['items']" :key="i")
          n-link(:to="link(model)") {{ model.manuName }}
</template>
<script>
import { setNuxtLink } from '@/utils'
export default {
  name: 'CatalogAlphabet',
  props: {
    manufacturers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    link (model) {
      return setNuxtLink(this, 'brand', model)
    }
  }
}
</script>
