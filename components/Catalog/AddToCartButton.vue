<template lang="pug">
  button(type='button' :disabled="loading" @click.prevent="addToCart" :class="{'btn-new': theme==='dark','btn-new-light':theme==='light'}" ).px-2.py-1.position-relative.w-100
    span.pl-2
      slot
    i(v-if="!hideIcon")
      svg(width='21', height='20', viewBox='0 0 21 20', fill='none', xmlns='http://www.w3.org/2000/svg')
        path(d='M2.16666 1.66666H3.61666C4.51666 1.66666 5.22499 2.44166 5.14999 3.33332L4.45832 11.6333C4.34166 12.9916 5.41665 14.1583 6.78332 14.1583H15.6583C16.8583 14.1583 17.9083 13.175 18 11.9833L18.45 5.73333C18.55 4.34999 17.5 3.22499 16.1083 3.22499H5.35', stroke='#026AA2', stroke-width='1.5', stroke-miterlimit='10', stroke-linecap='round', stroke-linejoin='round')
        path(d='M14.0417 18.3333C14.617 18.3333 15.0833 17.867 15.0833 17.2917C15.0833 16.7164 14.617 16.25 14.0417 16.25C13.4664 16.25 13 16.7164 13 17.2917C13 17.867 13.4664 18.3333 14.0417 18.3333Z', stroke='#026AA2', stroke-width='1.5', stroke-miterlimit='10', stroke-linecap='round', stroke-linejoin='round')
        path(d='M7.37501 18.3333C7.95031 18.3333 8.41668 17.867 8.41668 17.2917C8.41668 16.7164 7.95031 16.25 7.37501 16.25C6.79971 16.25 6.33334 16.7164 6.33334 17.2917C6.33334 17.867 6.79971 18.3333 7.37501 18.3333Z', stroke='#026AA2', stroke-width='1.5', stroke-miterlimit='10', stroke-linecap='round', stroke-linejoin='round')
        path(d='M8 6.66666H18', stroke='#026AA2', stroke-width='1.5', stroke-miterlimit='10', stroke-linecap='round', stroke-linejoin='round')
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

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
    },
    hideIcon: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'light'
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
    ...mapMutations({
      TOGGLE_MOBILE_MENU: 'User/TOGGLE_LOGIN'
    }),
    async addToCart () {
      if (!this.id) {
        return
      }
      if (!this.$auth.loggedIn) {
        const _this = this
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => _this.TOGGLE_MOBILE_MENU(true), 300)

        this.$swal.fire({
          title: '',
          icon: 'info',
          html: this.$t('for_add_to_cart_register_or_login'),
          position: 'top',
          toast: true,
          timer: 5000,
          customClass: {
            container: 'swal-80'
          },
          timerProgressBar: true
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
<style lang="scss" scoped>
span, i {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* Blue light/700 */

}
</style>
