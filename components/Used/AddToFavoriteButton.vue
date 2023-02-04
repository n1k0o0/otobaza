<template lang="pug">
  button(type='button' :disabled="loading" @click.prevent="addToCart" :class="{'btn-new': theme==='dark','btn-new-light':theme==='light'}" ).px-2.py-1.position-relative.w-100
    span.pl-2(v-if="$slots.default")
      slot
    i(v-if="!hideIcon")
      svg(width='20', height='20', viewBox='0 0 20 20', fill='none', xmlns='http://www.w3.org/2000/svg' :class="{'fillRed':isFavorite}")
        path(d='M10.5165 17.3416C10.2332 17.4416 9.7665 17.4416 9.48317 17.3416C7.0665 16.5166 1.6665 13.075 1.6665 7.24165C1.6665 4.66665 3.7415 2.58331 6.29984 2.58331C7.8165 2.58331 9.15817 3.31665 9.99984 4.44998C10.8415 3.31665 12.1915 2.58331 13.6998 2.58331C16.2582 2.58331 18.3332 4.66665 18.3332 7.24165C18.3332 13.075 12.9332 16.5166 10.5165 17.3416Z', stroke='#0086C9', stroke-width='1.5', stroke-linecap='round', stroke-linejoin='round')

</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AddToFavoriteButton',
  props: {
    id: {
      type: Number,
      default: 0
    },
    favorite: {
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
      loading: false,
      isFavorite: this.favorite
    }
  },
  computed: {
    ...mapGetters({
      cart: 'Catalog/cart'
    })
  },
  methods: {
    ...mapActions({
      ADD_TO_FAVORITE: 'Used/ADD_TO_FAVORITE'
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

          await this.ADD_TO_FAVORITE(this.id)

          this.isFavorite = !this.isFavorite

          this.$swal.fire({
            title: this.isFavorite ? this.$t('added_to_favorite') : this.$t('removed_from_favorite'),
            position: 'top',
            toast: true,
            timer: 2000,
            timerProgressBar: true,
            icon: 'success'
          })

          this.$emit('added')
        } catch (e) {
          this.$swal.fire({
            title: this.$t('failed_to_add_favorite'),
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

.fillRed {
  fill: red;
}
</style>
