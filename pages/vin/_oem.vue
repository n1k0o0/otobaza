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
          .mcontainer.mh40vh
            .row(v-for="category in parts" class="category mb-4")
              h4(class="text-center mb-4") {{category['@attributes']['name']}}
              .row(v-for="unit in category['Unit']")
                .col-12.col-md-6.justify-content-center.flex-column.text-center
                  img(@click="goToImageVin(unit['@attributes'])" :src="unit['@attributes']['imageurl'].replace('%size%','250')" style="width:300px;border: 1px solid gray;" class="pointer")
                  p(@click="goToImageVin(unit['@attributes'])" class="link") {{unit['@attributes']['name']}}

                .col-12.col-md-6.d-flex.justify-content-center
                  table.table-striped.table.w-auto.table-hover.table-bordered.oem_table
                    thead
                      tr
                        th OEM
                        th Name
                    tbody
                      tr(v-for="part in unit['Detail'].filter(el => el['@attributes'].oem)" @click="goToParts(part['@attributes']['oem'])" class="pointer")
                        td(class="link") {{part['@attributes']['oem']}}
                        td {{part['@attributes']['name']}}
</template>
<script>
import Parts from '@/components/Catalog/Parts'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'VinOem',
  watchQuery: true,
  components: { PartsPlaceholder, Parts },
  middleware: 'authorized',
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const param = this.$route.params.oem.split('____')
    const data = {
      QuickGroupId: param[0],
      catalog: param[1],
      vehicleid: param[2],
      ssd: param[3]
    }
    await this.GET_OEM(data)
  },
  computed: {
    ...mapGetters({
      geo: 'UI/geo',
      parts: 'Catalog/vin_parts',
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
  async validate ({ params, error, app }) {
    const param = params.oem.split('____')
    if (param.length !== 4) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
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
      GET_OEM: 'Catalog/GET_OEM'
    }),
    goToImageVin (attributes) {
      const data = []
      data.unitid = attributes.unitid
      data.ssd = attributes.ssd
      data.catalog = this.car_assemblies_brand.catalog

      window.location.href = this.localePath({
        name: 'vin-image-slug',
        params: {
          slug: `${this.car_assemblies_brand.catalog}____${attributes.unitid}____${attributes.ssd}`
        }
      })
    },
    goToParts (oem) {
      window.location.href = this.localePath({
        name: 'vin-part-slug',
        params: {
          slug: `${oem}-1`
        }
      })
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

.category {
  display: grid;
  max-width: 100%;
}
</style>
