<template lang="pug">
  .search_results
    .title_wrapper.hr-wrap.my-4
      h5.hr-text.font-weight-bold {{ $t('result_count',{count:parts.length}) }}
    template(v-if="loading")
      p.search_results_loading {{ $t('loading') }} ...
    template(v-else)
      template(v-if="parts.length")
        .search_results_items.d-flex.flex-raw.flex-wrap.justify-content-center
          n-link(:to="localePath({\
                      name: 'search-slug',\
                      params: {\
                      slug: card.id\
                      }\
                      })").search_results_items_item(v-for="(card,index) in parts", :key="index")
            img(v-lazy="card.url[0]?card.url[0].link:'/img/search/default-parts.png'", :alt="card.description")
            hr
            div
              h5 {{card.manufacturer}}
              h5.short_description {{card.part_number}}
              h6.short_description {{card.description}}
            div.text-right
              span.font-weight-bold {{card.price.price}} {{card.price.currency_symbol}}
            div
              AddToCartButton(:id="card.id")
                | {{$t('add_to_cart')}}

        .search_results_more(v-show="search_page!==last_page" )
          button.btn-new-light.px-4.py-2(@click="GET_SEARCH_PARTS({...search,page:true})", :disabled="loadingMore") {{ loadingMore?$t('loading'): $t('more_products')}}
        .search_results_top
          button.btn(@click="scrollTop")
            <i class="fa fa-2x fa-angle-up" aria-hidden="true"></i>
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
      loadingMore: 'Catalog/loading'
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
    gap: 12px;

    &_item {
      border: 1px solid #ebebeb;
      border-radius: 5px;
      padding: 25px;
      width: 205px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: #344054;
      @media screen and (max-width: 480px) {
        width: 150px;
      }

      img {
        width: 130px;
        height: 130px;
        margin: auto;
      }

      span {
        font-size: 1.1rem;
        color: red;
      }

      button {
        font-size: 14px;
      }

      .short_description {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #98A2B3;
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
    margin-top: 50px;
  }

  &_top {
    display: flex;
    justify-content: end;
  }

  &_not-found {
    font-size: 20px;
    color: #f41414;
    padding-left: 75px;
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
</style>
