<template lang="pug">
  button(type='button' :disabled="loading" @click.prevent="addToCart")
    i(:class="loading ? 'fa fa-spin fa-spinner' : 'fa fa-shopping-cart'")
    slot
</template>
<script>

import { mapActions } from 'vuex'
export default {
  name: 'AddToCartButton',
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      loading: false
    }
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
          await this.ADD_TO_CART({
            id: this.id
          })
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
