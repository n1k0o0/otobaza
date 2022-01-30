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
              h1 {{$fetchState}}
    template(v-else)
      div
        .container
          .mcontainer.mh60vh
            h1 Azərbaycan
</template>
<script>
import Parts from '@/components/Catalog/Parts'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'VinOem',
  watchQuery: true,
  components: { PartsPlaceholder, Parts },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const param = this.$route.params.oem.split('____')
    let data = {
      'QuickGroupId': param[0],
      'catalog': param[1],
      'vehicleid': param[2],
      'ssd': param[3],
      'language': param[4],
    }
    await this.GET_OEM(data)
  },
  computed: {
    ...mapGetters({
      geo: 'UI/geo',
      car_assemblies_brand: 'Catalog/car_assemblies_brand'
    }),
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$store.getters['Catalog/parts']?.brand?.meta_desc || ''
        },
        { hid: 'og:title', name: 'og:title', content: this.$store.getters['Catalog/parts']?.brand?.meta_title || '' }
      ]
    }
  },
  // async validate ({ params, error, app }) {
  //   console.log('validate111', params)
  //   const regex = /^([0-9]+)/
  //   if (!(regex.test(params.oem))) {
  //     console.log('xeta')
  //     return error({ statusCode: 500, message: app.i18n.t('not_found') })
  //   } else {
  //     return true
  //   }
  // },
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
      GET_OEM: 'Catalog/GET_OEM'
    })
  },
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
