<template lang="pug">
  .container
    .mcontainer.mh60vh
      CartHeader
      template(v-if="cart.length")
        CartItems
        CartFooter
      template(v-else)
        div(style="margin:30px;")
          .container-fluid
            .row
              .col-12.col-sm-12
                .error-message
                  i.fa.fa-info-circle
                  span {{ $t('empty_cart') }}
</template>
<script>
import CartFooter from '@/components/CartFooter'
import CartHeader from '@/components/Catalog/CartHeader'
import CartItems from '@/components/Catalog/CartItems'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  components: { CartFooter, CartItems, CartHeader },
  layout: 'pages',
  scrollToTop: true,
  middleware: 'authorized',
  async asyncData ({ store, error, query }) {
    const hasItems = store.getters['Catalog/cart']?.length
    if (Number(hasItems) === 0) {
      await store.dispatch('Catalog/GET_CART').catch(e => {
        error({ statusCode: e?.response?.status || 404, message: e?.response?.data?.message || 'error' })
      })
    } else if (query.reload) {
      await store.dispatch('Catalog/GET_CART').catch(e => {
        error({ statusCode: e?.response?.status || 404, message: e?.response?.data?.message || 'error' })
      })
    }
  },
  computed: {
    ...mapGetters({
      cart: 'Catalog/cart',
      geo: 'UI/geo'
    })
  },
  watch: {
    '$auth.loggedIn' (val) {
      if (!val) {
        this.$router.push({
          path: this.localePath('/')
        })
      }
    },
    'geo.currency' () {
      this.GET_CART().catch(e => {
        this.$nuxt.error({ statusCode: e?.response?.status || 404, message: e?.response?.data?.message || 'error' })
      })
    }
  },
  methods: {
    ...mapActions({
      GET_CART: 'Catalog/GET_CART'
    })
  }
}
</script>
