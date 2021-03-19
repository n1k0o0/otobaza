<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      CatalogLogoPlaceholder
    template(v-else-if="$fetchState.error")
      .error-message.mt-4
        i.fa.fa-info-circle
        span {{$fetchState.error}}
    template(v-else)
      CatalogLogo(
        :manufacturers="manufacturersByLogo"
        :is-search="isSearch"
        @selected="manufacturer => $emit('selected',manufacturer)"
      )
</template>
<script>
import CatalogLogo from '@/components/Catalog/CatalogLogo'
import CatalogLogoPlaceholder from '@/components/Placeholders/CatalogLogoPlaceholder'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PageCatalogLogo',
  components: { CatalogLogoPlaceholder, CatalogLogo },
  props: {
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  scrollToTop: true,
  async fetch () {
    if (!this.manufacturersByLogo) {
      await this.GET_CATALOG_MANUFACTURERS({
        type: 'logo'
      })
    }
  },
  computed: {
    ...mapGetters({
      manufacturersByLogo: 'Catalog/manufacturersByLogo'
    })
  },
  methods: {
    ...mapActions({
      GET_CATALOG_MANUFACTURERS: 'Catalog/GET_CATALOG_MANUFACTURERS'
    })
  },
  nuxtI18n: {
    paths: {
      en: 'cars-catalog-brand',
      ru: 'katalog-avtomobiley-brend'
    }
  }
}
</script>
