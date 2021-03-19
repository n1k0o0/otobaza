<template lang="pug">
  .row.wishlist-footer
    .col-12
      h4.rmtt
        | {{ $t('total_sum') }}:
        |
        span(style="color:#7C7C7C") {{cartTotal}} {{currency}}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartFooter',
  computed: {
    ...mapGetters({
      cart: 'Catalog/cart',
      geo: 'UI/geo'
    }),
    currency () {
      return this.geo.currency_name
    },
    cartTotal () {
      return this.cart.map(item => Number(item.price.price)).reduce((total, num) => {
        return total + num
      }, 0).toFixed(2)
    }
  }
}
</script>
