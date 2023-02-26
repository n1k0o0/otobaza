<template lang="pug">
  .user-profile
    #profile-dropdown.user-profile-name(aria-expanded='false', aria-haspopup='true', data-toggle='dropdown')
      .user-profile-img(v-if='gender')
        img(alt='user-profile', src='/css/icons/profile-circle.svg')
      span {{ userName }}
    .dropdown-menu(aria-labelledby='profile-dropdown')
      n-link(:to="localePath('garage-profile')").dropdown-item {{ $t('profile') }}
      n-link(:to="localePath('garage-cars')").dropdown-item {{ $t('my_garage') }}
      n-link(:to="localePath('garage-orders')").dropdown-item {{ $t('my_orders') }}
      a.dropdown-item(href='#', @click.prevent='signOut') {{ $t('logout') }}
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoggedIn',
  computed: {
    userName () {
      return `${this.$auth.user?.first_name} ${this.$auth.user?.last_name}`
    },
    gender () {
      return (this.$auth.user?.gender_icon === 'm' ? 'male' : 'female' || '')
    }
  },
  methods: {
    ...mapActions({
      SIGN_OUT: 'User/SIGN_OUT'
    }),
    signOut () {
      this.SIGN_OUT()
    }
  }
}
</script>
