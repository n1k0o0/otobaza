<template>
  <header>
    <HeaderTop />
    <HeaderMenu :settings="settings" />
  </header>
</template>
<script>
import HeaderTop from '@/components/Common/Header/Top'
import HeaderMenu from '@/components/Common/Header/Menu'
import { mapActions } from 'vuex'
export default {
  name: 'Header',
  components: {
    HeaderTop,
    HeaderMenu
  },
  computed: {
    settings () {
      const countries = this.$store.getters['UI/countries']
      const currencies = this.$store.getters['UI/currencies']
      return {
        countries,
        currencies
      }
    }
  },
  async beforeMount () {
    if (!(this.settings?.countries.length && this.settings?.currencies.length)){
      await this.GET_SETTINGS()
    }
  },
  methods: {
    ...mapActions({
      GET_SETTINGS: 'UI/GET_SETTINGS'
    })
  }
}
</script>
