<template lang="pug">
  .container
    .mcontainer.mh60vh
      .row.cclass-top
        .col-12.col-sm-12.col-md-4
          .cclass-name.cclass-flex
            img(:alt="car_assemblies_brand.ManuName" :src="car_assemblies_brand.url")
            h4.cclass-tt {{ car_assemblies_brand.ManuName }}
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
          img(alt='car' src='/img/car.png')
          h5.cc_details_top
            span {{ car_assemblies_brand.CarName }}
            p.ccdetails_bottom
              | {{ $t('total_auto') }}:
              strong {{ car_assemblies_tree.length }}
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
import AssemblyList from '@/components/Catalog/AssemblyList'
import AssemblyTree from '@/components/Catalog/AssemblyTree'
import { mapGetters } from 'vuex'
export default {
  name: 'Assemblies',
  components: { AssemblyList, AssemblyTree },
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
  data () {
    return {
      component: 'AssemblyTree'
    }
  },
  computed: {
    ...mapGetters({
      car_assemblies_brand: 'Catalog/car_assemblies_brand',
      car_assemblies_tree: 'Catalog/car_assemblies_tree',
      statistics: 'UI/statistics'
    })
  }
}
</script>
