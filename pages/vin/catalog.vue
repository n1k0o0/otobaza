<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      AssembliesPlaceholder
    template(v-else-if="$fetchState.error")
      .container
        .mcontainer.mh60vh
          .response-message
            .mkub.mkubfail
            .rminfo
              h4.rmtt {{ $t('not_found') }}
              p.rmtxt {{ $t('not_found_info') }}
    template(v-else)
      .container
        .mcontainer.mh60vh
          .row.cclass-top
            .col-12.col-sm-12.col-md-4
              .cclass-name.cclass-flex
                //img(:alt="car_assemblies_brand && car_assemblies_brand.ManuName" :src="car_assemblies_brand && car_assemblies_brand.url")
                h4.cclass-tt {{ car_assemblies_brand && car_assemblies_brand.ManuName }}
            .col-12.col-sm-12.col-md-8
              .cclass-right
                .cclass-ginfo
                  h4.ccginfott {{ $t('general_information') }}
                  p.ccginfotxt
                    |  {{ $t('total_products') }}:
                    strong {{statistics.total_products}}
                  p.ccginfotxt
                    | {{ $t('total_products_last_month') }}:
                    strong {{statistics.total_products_last_month}}
                .cclass-ginfo.mt16
                  p.ccginfotxt
                    | {{ $t('total_dismantles') }}:
                    strong {{statistics.total_dismantles}}
                  p.ccginfotxt
                    | {{ $t('total_stores') }}:
                    strong {{statistics.total_stores}}
                n-link.ccinfoall(:to="localePath('kataloq-mashin-kataloqu')") {{ $t('see_all') }}
          .row.cclass-innertop
            .cclass_inner_cover
              //img(alt='car' src='/img/car.png')
              h5.cc_details_top
                span {{ car_assemblies_brand && car_assemblies_brand.CarName }}
                p.ccdetails_bottom
                  | {{ $t('total_auto') }}:
                  strong {{ vin_assemblies_tree.length }}
              a.innertop-back(href='#' @click.prevent="$router.back()") {{ $t('go_back') }}
          // category description
          .row.cclass-description.mcclass-description
            .col-12.col-sm-12
              keep-alive
                AssemblyTree

</template>
<script>
import AssembliesPlaceholder from '@/components/Placeholders/AssembliesPlaceholder'
import AssemblyList from '@/components/Catalog/AssemblyList'
import AssemblyTree from '@/components/Vin/AssemblyTree'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'VinCatalog',
  components: { AssemblyList, AssemblyTree, AssembliesPlaceholder },
  watchQuery: true,
  layout: 'pages',
  scrollToTop: true,
  props: {
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  async fetch () {
    const catalog = this.$route.query.catalog
    const vehicleId = this.$route.query.vehicleId
    const ssd = this.$route.query.ssd

    await this.GET_VIN_ASSEMBLIES({ catalog, vehicleId, ssd })
  },
  data () {
    return {
      component: 'AssemblyTree'
    }
  },
  async validate ({ query, error, app }) {
    const catalog = query.catalog ?? false
    const vehicleId = query.vehicleId ?? false
    const ssd = query.ssd ?? false
    if (!catalog || !vehicleId || !ssd) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  computed: {
    ...mapGetters({
      car_assemblies_brand: 'Catalog/car_assemblies_brand',
      vin_assemblies_tree: 'Catalog/vin_assemblies_tree',
      statistics: 'UI/statistics'
    })
  },
  methods: {
    ...mapActions({
      GET_VIN_ASSEMBLIES: 'Catalog/GET_VIN_ASSEMBLIES'
    })
  }
}
</script>
