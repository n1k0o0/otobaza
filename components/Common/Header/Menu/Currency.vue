<template>
  <div class="dropdown dropcurrency">
    <button
      id="dropcurrency"
      aria-expanded="false"
      aria-haspopup="true"
      class="btn dropdown-toggle"
      data-toggle="dropdown"
      type="button"
    >
      {{ selectedCurrency }}
    </button>
    <div aria-labelledby="dropcurrency" class="dropdown-menu">
      <a
        v-for="currency in currencies"
        :key="currency.id"
        class="dropdown-item"
        :class="{'active': currency.currency_code === selectedCurrency}"
        href="#"
        @click.prevent="setCurrency(currency)"
      >{{ currency.currency_code }}</a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Currency',
  props: {
    currencies: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({
      geo: 'UI/geo'
    }),
    selectedCurrency() {
      let currency = 'USD'
      const currencyId = this.geo?.currency || this.$auth.user?.currency?.id
      if (currencyId) {
        currency = this.currencies.find(cur => cur.id === currencyId)
          ?.currency_code
      }
      return currency
    }
  },
  methods: {
    ...mapMutations({
      SET_GEO: 'UI/SET_GEO'
    }),
    setCurrency(currency) {
      const geo = this.$auth.$storage.getUniversal('geo')
      geo.currency = currency.id
      geo.currency_name = currency.currency_code
      this.$auth.$storage.setUniversal('geo', geo)
      this.SET_GEO(geo)
    }
  }
}
</script>
