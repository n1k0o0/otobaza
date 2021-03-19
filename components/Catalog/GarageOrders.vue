<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      GarageOrdersPlaceholder
    template(v-else-if="$fetchState.error")
      .error-message.mt-4
        i.fa.fa-info-circle
        span {{$fetchState.error}}
    template(v-else)
      .row.car-details-items
        .col-12.col-sm-12.buy_result_cover
          p.buy-result {{ $t('total_buyed', {total:pagination.total}) }}
        .col-12.col-sm-12.details-overflow.mbuy-items-cover
          OrderItem(v-for="order in orders" :key="order.id" :order="order" @refetch="$fetch")
        Pagination(:maxVisibleButtons="maxVisibleButtons" :pagination="pagination" url-type="order")
</template>
<script>
import OrderItem from '@/components/Catalog/OrderItem'
import Pagination from '@/components/Catalog/Pagination'
import GarageOrdersPlaceholder from '@/components/Placeholders/GarageOrdersPlaceholder'
export default {
  name: 'GarageOrders',
  components: { Pagination, GarageOrdersPlaceholder, OrderItem },
  fetchOnServer: false,
  async fetch () {
    await this.$nuxt.context.store.dispatch('Catalog/GET_ORDERS', {
      page: this.$route.query.page || 1
    })
  },
  computed: {
    orders () {
      return this.$nuxt.context.store.getters['Catalog/orders']?.data
    },
    pagination () {
      return this.$nuxt.context.store.getters['Catalog/orders']?.meta
    },
    maxVisibleButtons () {
      return this.pagination.total <= 3 ? 2 : 3
    }
  }
}
</script>
