<template lang="pug">
  div
    .container
      .mcontainer.mh60vh
        .rm_container.rm_container_mobile
          .response-message.about-title.dismantles_tt
            .mkub.mkubsuccess.kubflex
              img(alt='car' src='/img/car.svg')
            .rminfo
              h2.rmtt
                span {{ $t('dismantles') }}
        .row.car-details-items
          .col-12.col-sm-12.details-overflow
            Dismantle(
              v-for="dismantle in dismantles"
              :key="dismantle.id"
              :item="dismantle"
            )
          Pagination(:maxVisibleButtons="maxVisibleButtons" :pagination="pagination" url-type="dismantles")
</template>
<script>
import Dismantle from '@/components/Catalog/Dismantle'
import Pagination from '@/components/Catalog/Pagination'

export default {
  name: 'Dismantles',
  components: { Pagination, Dismantle },
  computed: {
    dismantles () {
      return this.$store.getters['Catalog/dismantles']?.data || []
    },
    pagination () {
      return this.$store.getters['Catalog/dismantles']?.meta
    },
    maxVisibleButtons () {
      return this.pagination.total <= 3 ? 2 : 3
    }
  }
}
</script>
