<template lang="pug">
  span(@click="cartLink").wishlist-btn.position-relative
    i(v-if="header")
      img(src="/css/icons/cart.svg")
    svg(v-else, fill='none', height='24', viewbox='0 0 24 24', width='24', xmlns='http://www.w3.org/2000/svg')
      path(d='M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001', stroke='#98A2B3', stroke-linecap='round', stroke-linejoin='round', stroke-miterlimit='10', stroke-width='1.5')
      path(d='M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z', stroke='#98A2B3', stroke-linecap='round', stroke-linejoin='round', stroke-miterlimit='10', stroke-width='1.5')
      path(d='M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z', stroke='#98A2B3', stroke-linecap='round', stroke-linejoin='round', stroke-miterlimit='10', stroke-width='1.5')
      path(d='M9 8H21', stroke='#98A2B3', stroke-linecap='round', stroke-linejoin='round', stroke-miterlimit='10', stroke-width='1.5')

    sup(v-show="cart.length") {{cart.length}}
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CartLink',
  props: {
    header: {
      type: Boolean,
      default: true
    }
  },
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
