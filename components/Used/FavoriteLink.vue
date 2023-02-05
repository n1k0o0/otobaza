<template lang="pug">
  span(@click="favoritesLink").wishlist-btn.position-relative
    i
      svg(width='22', height='20', viewbox='0 0 22 20', fill='none', xmlns='http://www.w3.org/2000/svg')
        path(d='M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.68998C1 3.59998 3.49 1.09998 6.56 1.09998C8.38 1.09998 9.99 1.97998 11 3.33998C12.01 1.97998 13.63 1.09998 15.44 1.09998C18.51 1.09998 21 3.59998 21 6.68998C21 13.69 14.52 17.82 11.62 18.81Z', :stroke="header?'#344054':'#98A2B3'", stroke-width='1.5', stroke-linecap='round', stroke-linejoin='round')
    sup(v-show="favorites.length") {{favorites.length}}
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'FavoriteLink',
  props: {
    header: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters({
      favorites: 'Used/favorites'
    })
  },
  watch: {
    '$auth.loggedIn' (val) {
      if (val) {
        this.GET_FAVORITES()
      } else {
        this.CLEAR_FAVORITES()
      }
    }
  },
  async beforeMount () {
    if (!this.favorites.length && this.$auth.loggedIn) {
      await this.GET_FAVORITES({})
    }
  },
  methods: {
    ...mapMutations({
      CLEAR_FAVORITES: 'Used/CLEAR_FAVORITES'
    }),
    ...mapActions({
      GET_FAVORITES: 'Used/GET_FAVORITES'
    }),
    favoritesLink () {
      if (!this.$auth.loggedIn) {
        this.$swal.fire({
          title: '',
          icon: 'info',
          html: this.$t('for_add_to_favorite_register_or_login'),
          showCloseButton: false,
          showCancelButton: false
        })
      } else {
        this.$router.push({
          path: this.localePath('favorites')
        })
      }
    }
  }
}
</script>
