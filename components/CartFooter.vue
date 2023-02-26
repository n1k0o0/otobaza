<template lang="pug">
  .row.wishlist-footer
    .col-12
      p
        | {{ $t('total_sum') }}:
        |
      h4(class="wishlist-footer-price float-right") {{cartTotal}} {{currency}}
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
