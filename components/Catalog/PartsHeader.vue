<template lang="pug">
  .response-message.about-title
    .mkub.mkubsuccess.kubflex
      img(alt='' src='/img/car.svg')
    .rminfo
      template(v-if="isPart")
        h2.rmtt
          span {{ $t('part') }} {{partNumber}}
      template(v-else)
        h2.rmtt
          span {{ ManuName }}
          |  /
          span {{ ModelName }} {{$t('part').toLowerCase()}}
        p.rmtxt
          | {{ assemblyGroupName }}
</template>
<script>
import { getUrlSlug } from '@/utils'

export default {
  name: 'PartsHeader',
  props: {
    isPart: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    partNumber () {
      const { legacyId } = getUrlSlug(this.$route.params.slug, 'part')
      return legacyId
    },
    ManuName () {
      return this.$store.getters['Catalog/parts']?.brand?.ManuName || ''
    },
    ModelName () {
      return this.$store.getters['Catalog/parts']?.brand?.ModelName || ''
    },
    assemblyGroupName () {
      return this.$store.getters['Catalog/parts']?.brand?.assemblyGroupName || ''
    }
  }
}
</script>
