<template lang="pug">
  .container
    .mcontainer.mh60vh
      .row.cclass-top
        .col-12.col-sm-12.col-md-4
          .cclass-name.cclass-flex
            img(:alt="model_cars.car.name" :src="model_cars.car.url")
            h4.cclass-tt
              | {{ model_cars.car.name }}
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
      .row.all-cars
        CarItem(v-for="car in model_cars.items" :key="car.carid" :car="car" :is-search="isSearch")
</template>
<script>
import CarItem from '@/components/Catalog/CarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Cars',
  components: { CarItem },
  props: {
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      model_cars: 'Catalog/model_cars',
      statistics: 'UI/statistics'
    })
  }
}
</script>
