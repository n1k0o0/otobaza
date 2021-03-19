<template lang="pug">
  .col-12.col-sm-12.details-overflow
    table.car_details_item.cart_fix_table
      tbody
        tr
          td {{ item.description }}
          td
            .car_details_row
              p {{ $t('store') }}
              span {{ item.store_name }}
          td
            .car_details_row
              p {{ $t('price') }}
              span {{ item.price.price }} {{ item.price.currency }}
          td
            .car_details_row
              p {{ $t('code') }}
              span {{ item.part_number }}
          td
            QuantityInput(v-model="item.quantity" :min="1" :max="99")
          td
            a.cart-buy(:href='`cart/order/${item.cart_id}`' @click.prevent="order") {{ $t('confirm_order') }}
          td
            RemoveFromCartButton(:id="item.cart_id").car-add-btn
</template>
<script>
import RemoveFromCartButton from '@/components/Catalog/RemoveFromCartButton'
import QuantityInput from '@/components/Common/QuantityInput'
export default {
  name: 'CartItem',
  components: { QuantityInput, RemoveFromCartButton },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    order () {
      this.$auth.$storage.setState('order', this.item)
      this.$router.push(this.localePath({
        name: 'cart-order-id',
        params: {
          id: this.item.cart_id,
          item: this.item
        }
      }))
    }
  }
}
</script>
