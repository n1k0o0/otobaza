<template lang="pug">
  .row.car-details-items.wishlist-cover.wsh_cover
    CartItem(v-for="item in cart" :key="item.cart_id" :item="item")
</template>
<script>
import CartItem from '@/components/Catalog/CartItem'
import { mapGetters } from 'vuex'
export default {
  name: 'CartItems',
  components: { CartItem },
  computed: {
    ...mapGetters({
      cart: 'Catalog/cart'
    })
  }
}
</script>
