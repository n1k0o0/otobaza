<template lang="pug">
  button(type='button' :disabled="loading" @click.prevent="removeFromCart")
    i(:class="loading ? 'fa fa-spin fa-spinner' : 'fa fa-trash-o'")
</template>
<script>

import { mapActions } from 'vuex'
export default {
  name: 'RemoveFromCartButton',
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
      REMOVE_FROM_CART: 'Catalog/REMOVE_FROM_CART'
    }),
    async removeFromCart () {
      if (!this.id) {
        return
      }
      const success = this.$t('removed_from_cart')
      const fail = this.$t('failed_removed_from_cart')
      try {
        this.loading = true
        await this.REMOVE_FROM_CART({
          id: this.id
        })
        this.$swal.fire({
          title: success,
          position: 'top',
          toast: true,
          timer: 2000,
          timerProgressBar: true,
          icon: 'success'
        })
      } catch (e) {
        console.log('e', e)
        this.$swal.fire({
          title: fail,
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
</script>
