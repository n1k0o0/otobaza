<template lang="pug">
  .container
    .mcontainer.mh60vh
      .row.cclass-top
        .col-12.col-sm-12.col-md-4
          .cclass-name.cclass-flex
            img(:alt="manufacturer_models.model.name" :src="manufacturer_models.model.url")
            h4.cclass-tt {{ manufacturer_models.model.name }}
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
      .row.cclass-items
        .col-12.col-sm-12
          n-link.cclass-back(:to="localePath('kataloq-mashin-kataloqu')") {{ $t('go_back') }}
      .row.class_items.mobile-cclass-items
        ModelItem(v-for="model in manufacturer_models.items" :key="model.modId" :model="model" :is-search="isSearch")
</template>

<script>
import ModelItem from '@/components/Catalog/ModelItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Models',
  components: { ModelItem },
  props: {
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      manufacturer_models: 'Catalog/manufacturer_models',
      statistics: 'UI/statistics'
    })
  }
}
</script>
