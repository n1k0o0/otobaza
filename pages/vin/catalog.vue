<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      AssembliesPlaceholder
    template(v-else-if="$fetchState.error")
      .error-message.mt-4
        i.fa.fa-info-circle
        span {{$fetchState.error}}
    template(v-else)
      .container
        .mcontainer.mh60vh
          .row.cclass-top
            .col-12.col-sm-12.col-md-4
              .cclass-name.cclass-flex
                img(:alt="car_assemblies_brand && car_assemblies_brand.ManuName" :src="car_assemblies_brand && car_assemblies_brand.url")
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
                component(:is="component" :is-search="isSearch" :slug="slug")
            .col-12.col-sm-12
              .step2-ctg-link
                a(href="#" @click.prevent="component = 'AssemblyList'")
                  i.fa.fa-list
                  |  {{ $t('list') }}
                a.show-ctg(href='#' @click.prevent="component = 'AssemblyTree'")
                  i.fa.fa-book
                  |  {{ $t('catalog') }}

</template>
<script>
import AssembliesPlaceholder from '@/components/Placeholders/AssembliesPlaceholder'
import AssemblyList from '@/components/Catalog/AssemblyList'
import AssemblyTree from '@/components/Vin/AssemblyTree'
import { mapActions, mapGetters } from 'vuex'
import { getUrlSlug } from '~/utils'

export default {
  name: 'Assemblies',
  components: { AssemblyList, AssemblyTree, AssembliesPlaceholder },
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    slug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      component: 'AssemblyTree',
    }
  },
  async fetch () {
    let slug = this.slug
    const data = slug.split('____')
    const catalog = data[0]
    const vehicleId = data[1]
    const ssd = data[2]

    await this.GET_VIN_ASSEMBLIES({ catalog, vehicleId, ssd })
  },
  async validate ({ params, error, app }) {
    const { regex } = getUrlSlug(params.slug, 'car')
    if (!(regex.test(params.slug))) {
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
    }),
  }
}
</script>
