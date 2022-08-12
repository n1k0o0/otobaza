<template lang="pug">
  button(type='button' :disabled="loading" @click.prevent="addToCart").btn.px-3.py-1.position-relative.w-100
    i(:class="loading ? 'fa fa-spin fa-spinner' : 'fa fa-shopping-cart'")
    span.pl-2
      slot
</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddToCartButton',
  props: {
    id: {
      type: Number,
      default: 0
    },
    order: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      cart: 'Catalog/cart'
    })
  },
  methods: {
    ...mapActions({
      ADD_TO_CART: 'Catalog/ADD_TO_CART'
    }),
    async addToCart () {
      if (!this.id) {
        return
      }
      if (!this.$auth.loggedIn) {
        this.$swal.fire({
          title: '',
          icon: 'info',
          html: this.$t('for_add_to_cart_register_or_login'),
          showCloseButton: false,
          showCancelButton: false
        })
      } else {
        try {
          this.loading = true
          const orderId = await this.ADD_TO_CART({
            id: this.id
          })

          if (this.order) {
            const newCart = this.cart.find(cart => cart.cart_id === orderId)

            this.$auth.$storage.setState('order', newCart)
            await this.$router.push(this.localePath({
              name: 'cart-order-id',
              params: {
                id: newCart.cart_id,
                item: newCart
              }
            }))
          }

          this.$swal.fire({
            title: this.$t('added_to_cart'),
            position: 'top',
            toast: true,
            timer: 2000,
            timerProgressBar: true,
            icon: 'success'
          })

          this.$emit('added')
        } catch (e) {
          this.$swal.fire({
            title: this.$t('failed_to_add_cart'),
            position: 'top',
            toast: true,
            timer: 2000,
            timerProgressBar: true,
            icon: 'error'
          })
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>
