<template lang="pug">
  table.car_details_item
    tbody
      tr
        td {{order.product_name}}
        td
          .car_details_row
            p {{ $t('store') }}
            span {{order.store}}
        td
          .car_details_row
            p {{ $t('price') }}
            span {{order.price}} {{order.currency}}
        td
          .car_details_row
            p {{ $t('quantity') }}
            span {{order.quantity}} {{ $t('quantity').toLowerCase() }}
        td
          button.confirm-order.mr-2(
            type='button'
            :disabled="isConfirming"
            @click.prevent="confirmOrder(order)"
          )
            i.fa.fa-spin.fa-spinner(v-if="isConfirming")
            |
            | {{ $t('confirm_order') }}
          button.buy-see-more.buy-see-more-js(
            type='button'
            @click.prevent="isShowMore = !isShowMore"
            :class="{active: isShowMore}"
          ) {{ $t('more') }}
      tr(:class="{'hide-details': !isShowMore}")
        td
          .hdetails-left
            p {{ $t('buyed_date') }}
            span {{order.created_at}}
          .hdetails-left
            p {{ $t('code') }}
            span {{order.product_number}}
        td
          .car_details_row
            p {{ $t('contact') }}
            span {{order.store_phone}}
        td
          .car_details_row
            p {{ $t('order') }}
            span {{order.order_number}}
        td
          .car_details_row
            p {{ $t('status') }}
            span
              strong {{order.last_status.name}}
              |
              | -
              span {{order.last_status.created_at}}
        td
</template>
<script>
import { useFriendlyError } from '@/utils'

export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isConfirming: false,
      isShowMore: false
    }
  },
  methods: {
    confirmOrder (order) {
      this.isConfirming = true
      this.$nuxt.context.store.dispatch('Catalog/SET_ORDER_STATUS', {
        id: +order.id
      }).then(response => {
        const _this = this
        this.$swal.fire({
          text: response.message,
          icon: 'success',
          onClose () {
            _this.$emit('refetch')
          }
        })
      }).catch(error => {
        useFriendlyError(error)
      }).finally(() => {
        this.isConfirming = false
      })
    }
  }
}
</script>
<style lang="scss">
</style>
