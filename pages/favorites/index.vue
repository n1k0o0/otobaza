<template lang="pug">
  .container
    ol.breadcrumb-custom
      li.breadcrumb-item
        a(href='/') Home
      li.breadcrumb-item.active(aria-current='page')
        | {{$t('favorites')}}
    .cart.pb-5
      .about-title.cart-header
        h2(class="mb-4")
          | {{ $t('favorites') }}
      template(v-if="favorites.length")
        UsedParts(:is-favorite="true")
      template(v-else)
        div(style="margin:30px;")
          .container-fluid
            .row
              .col-12.col-sm-12
                .error-message
                  i.fa.fa-info-circle
                  span {{ $t('empty_favorites') }}
</template>
<script>
import CartFooter from '@/components/CartFooter'
import CartHeader from '@/components/Catalog/CartHeader'
import CartItems from '@/components/Catalog/CartItems'
import { mapActions, mapGetters } from 'vuex'
import UsedParts from '~/components/Used/UsedParts.vue'

export default {
  name: 'Favorites',
  components: {
    UsedParts,
    CartFooter,
    CartItems,
    CartHeader
  },
  layout: 'pages',
  scrollToTop: true,
  middleware: 'authorized',
  async asyncData ({
    store,
    error,
    query
  }) {
    const hasItems = store.getters['Used/favorites']?.length
    if (Number(hasItems) === 0) {
      await store.dispatch('Used/GET_FAVORITES', {}).catch(e => {
        console.log(444, error)
        error({
          statusCode: e?.response?.status || 404,
          message: e?.response?.data?.message || 'error'
        })
      })
    } else if (query.reload) {
      await store.dispatch('Used/GET_FAVORITES', {}).catch(e => {
        console.log(5555, error)
        error({
          statusCode: e?.response?.status || 404,
          message: e?.response?.data?.message || 'error'
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      favorites: 'Used/favorites'
    })
  },
  watch: {
    '$auth.loggedIn' (val) {
      if (!val) {
        this.$router.push({
          path: this.localePath('/')
        })
      }
    }
  },
  methods: {
    ...mapActions({
      GET_CART: 'Catalog/GET_CART'
    })
  }
}
</script>
