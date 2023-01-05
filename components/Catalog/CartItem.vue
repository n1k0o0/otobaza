<template lang="pug">
  .col-12.col-sm-12.details-overflow
    table.car_details_item.cart_fix_table
      tbody
        tr
          td
            .car_details_row
              p {{ $t('product') }}
              span {{ item.description }}
          td
            .car_details_row
              p {{ $t('store') }}
              span {{ item.store_name }}
          td
            .car_details_row
              p {{ $t('code') }}
              span {{ item.part_number }}
          td(class="align-items-center")
            QuantityInput(v-model="item.quantity" :min="1" :max="99")
          td(class="align-items-center")
            .car_details_price
              | {{ item.price.price }} {{ item.price.currency_symbol }}
          td(class="align-items-center")
            RemoveFromCartButton(:id="item.cart_id")
          td(class="align-items-center")
            a.cart-buy.btn-new(:href='`cart/order/${item.cart_id}`' @click.prevent="order")
              | {{ $t('confirm_order') }}
              | <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.6665 10.0001H16.3332M16.3332 10.0001L10.4998 4.16675M16.3332 10.0001L10.4998 15.8334" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

</template>
<script>
import RemoveFromCartButton from '@/components/Catalog/RemoveFromCartButton'
import QuantityInput from '@/components/Common/QuantityInput'

export default {
  name: 'CartItem',
  components: {
    QuantityInput,
    RemoveFromCartButton
  },
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
