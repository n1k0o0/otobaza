<template lang="pug">
  .search_results
    template(v-if="loading")
      p.search_results_loading {{ $t('loading') }} ...
    template(v-else)
      template(v-if="parts.length")
        .search_results_items
          n-link(:to="localePath({\
                      name: 'search-slug',\
                      params: {\
                      slug: card.id\
                      }\
                      })").search_results_items_item(v-for="(card,index) in parts", :key="index")
            img(v-lazy="card.url[0]?card.url[0].link:'/img/search/default-parts.png'", :alt="card.description")
            .search_results_items_item_price
              span.font-weight-bold {{card.price.price}} {{card.price.currency_symbol}}
            div
              p.search_results_items_item_store {{card.store_name}}
              p.search_results_items_item_store {{card.part_number}}
              p.short_description
                | {{card.description}}
              p.search_results_items_item_store
                | {{card.manufacturer}}

            div.search_results_items_item_button_cart
              AddToCartButton(:id="card.id")

        .search_results_more(v-show="search_page!==last_page" )
          button.btn-new.px-4.py-2(@click="GET_SEARCH_PARTS({...search,page:true})", :disabled="loadingMore") {{ loadingMore?$t('loading'): $t('more_products')}}
      .search_results_not-found(v-else)
        p {{$t('not_found_products')}}
        button.btn.light-blue(@click="$router.push(localePath({ name: 'contact'}))") {{$t('contact_us')}}

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddToCartButton from '@/components/Catalog/AddToCartButton'

export default {
  name: 'ResultParts',
  components: { AddToCartButton },

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    search: {
      type: Object,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({
      parts: 'Catalog/search_parts',
      search_page: 'Catalog/search_page',
      last_page: 'Catalog/last_page',
      loadingMore: 'Catalog/loading',
      meta: 'Catalog/meta'
    })
  },
  methods: {
    ...mapActions({
      GET_SEARCH_PARTS: 'Catalog/GET_SEARCH_PARTS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-light:disabled {
  background-color: #e7eef4 !important;
  border-color: #e4eaef !important;

}

.search_results {
  &_items {
    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    gap: 14px;
    justify-content: space-between;

    &_item {
      position: relative;
      background-color: #fff;
      border: 1px solid #EAECF0;
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: #344054;
      @media screen and (max-width: 480px) {
        padding: 10px;
        h5 {
          font-size: 1rem;
        }
        h6 {
          font-size: 0.725rem;
        }
      }

      p {
        margin: 0;
      }

      img {
        width: 130px;
        height: 130px;
        margin: 0 auto;
      }

      button {
        font-size: 14px;
      }

      .short_description {
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;

        color: #344054;
      }

      &_store {
        color: #98A2B3;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }

      &_price {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #0086C9;
        margin: 8px 0;
      }

      &_button_cart {
        position: absolute;
        right: 0;
        top: 8px;
      }

      &:hover {
        h5, .short_description {
          color: #344054;
        }

        .btn {
          background-color: #498EBF;
        }
      }

    }
  }

  &_more {
    display: flex;
    justify-content: center;
    margin-top: 34px;
  }

  &_top {
    display: flex;
    justify-content: end;
  }

  &_not-found {
    font-size: 18px;
    color: #f41414;
    padding-left: 25px;
  }

  &_loading {
    padding-left: 75px;
    font-size: 20px;
    font-weight: normal;
  }
}

.btn {
  border-radius: 5px;
  background-color: #3A7299;
  color: #fff;

  &:hover {
    background-color: #498EBF;
  }
}

@media screen and (min-width: 768px) {
  .search_results {
    &_items {
      grid-template-columns: repeat(3, minmax(150px, 1fr));
    }

    &_not-found {
      font-size: 20px;
      padding-left: 75px;
    }
  }
}

@media screen and (min-width: 992px) {
  .search_results {
    &_items {
      grid-template-columns: repeat(4, minmax(150px, 1fr));
    }
  }
}

@media screen and (min-width: 1200px) {
  .search_results {
    &_items {
      grid-template-columns: repeat(5, minmax(150px, 1fr));
    }
  }
}

</style>
