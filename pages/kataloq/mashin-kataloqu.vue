<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      CatalogAlphabetPlaceholder
    template(v-else-if="$fetchState.error")
      .error-message.mt-4
        i.fa.fa-info-circle
        span {{$fetchState.error}}
    template(v-else)
      CatalogAlphabet(:manufacturers="manufacturersByAlphabet")
</template>
<script>
import CatalogAlphabet from '@/components/Catalog/CatalogAlphabet'
import CatalogAlphabetPlaceholder from '@/components/Placeholders/CatalogAlphabetPlaceholder'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PageCatalogAlphabet',
  scrollToTop: true,
  components: { CatalogAlphabetPlaceholder, CatalogAlphabet },
  async fetch () {
    if (!this.manufacturersByAlphabet) {
      await this.GET_CATALOG_MANUFACTURERS({
        type: 'alphabet'
      })
    }
  },
  computed: {
    ...mapGetters({
      manufacturersByAlphabet: 'Catalog/manufacturersByAlphabet'
    })
  },
  methods: {
    ...mapActions({
      GET_CATALOG_MANUFACTURERS: 'Catalog/GET_CATALOG_MANUFACTURERS'
    })
  },
  nuxtI18n: {
    paths: {
      en: 'cars-catalog',
      ru: 'katalog-avtomobiley'
    }
  }
}
</script>
