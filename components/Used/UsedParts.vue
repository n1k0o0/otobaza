<template lang="pug">
  .search_results
    template(v-if="loading")
      p.search_results_loading {{ $t('loading') }} ...
    template(v-else)
      template(v-if="parts.length")
        .search_results_items
          n-link(:to="localePath({\
                      name: 'oluxana-slug',\
                      params: {\
                      slug: card.id\
                      }\
                      })")(v-for="(card,index) in parts", :key="index")
            UsedPart(:card="card")
        .search_results_more(v-show="search_page!==last_page" )
          button.btn-new.px-4.py-2(@click="GET_SEARCH_PARTS({...search,page:true})", :disabled="loadingMore") {{ loadingMore?$t('loading'): $t('more_products')}}
      .search_results_not-found(v-else)
        p {{$t('not_found_products')}}
        button.btn.light-blue(@click="$router.push(localePath({ name: 'contact'}))") {{$t('contact_us')}}

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddToFavoriteButton from '~/components/Used/AddToFavoriteButton.vue'
import UsedPart from '~/components/Used/UsedPart.vue'

export default {
  name: 'UsedParts',
  components: { AddToFavoriteButton, UsedPart },

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
      parts: 'Used/parts',
      search_page: 'Used/search_page',
      last_page: 'Used/last_page',
      loadingMore: 'Used/loading',
      meta: 'Used/meta'
    })
  },
  methods: {
    ...mapActions({
      GET_SEARCH_PARTS: 'Used/GET_PARTS'
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
