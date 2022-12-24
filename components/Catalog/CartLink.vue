<template lang="pug">
  span(@click="cartLink").wishlist-btn
    i
      img(src="/css/icons/cart.svg")
    sup(v-show="cart.length") {{cart.length}}
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CartLink',
  computed: {
    ...mapGetters({
      cart: 'Catalog/cart'
    })
  },
  watch: {
    '$auth.loggedIn' (val) {
      if (val) {
        this.GET_CART()
      } else {
        this.CLEAR_CART()
      }
    }
  },
  async beforeMount () {
    if (!this.cart.length && this.$auth.loggedIn) {
      await this.GET_CART()
    }
  },
  methods: {
    ...mapMutations({
      CLEAR_CART: 'Catalog/CLEAR_CART'
    }),
    ...mapActions({
      GET_CART: 'Catalog/GET_CART'
    }),
    cartLink () {
      if (!this.$auth.loggedIn) {
        this.$swal.fire({
          title: '',
          icon: 'info',
          html: this.$t('for_add_to_cart_register_or_login'),
          showCloseButton: false,
          showCancelButton: false
        })
      } else {
        this.$router.push({
          path: this.localePath('cart')
        })
      }
    }
  }
}
</script>
