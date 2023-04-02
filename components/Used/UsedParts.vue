<template lang="pug">
  .search_results
    template(v-if="loading")
      p.search_results_loading {{ $t('loading') }} ...
    template(v-else)
      div(v-if="parts.length" v-infinite-scroll="getMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10")
        .search_results_items
          UsedPart(:card="card", v-for="(card,index) in parts", :key="index")
        .search_results_more(v-show="search_page!==last_page && !isHome" )
          button.btn-new.px-4.py-2(@click="getMore", :disabled="loadingMore") {{ loadingMore?$t('loading'): $t('more_products')}}
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
      default: () => {}
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    ...mapGetters({
      usedParts: 'Used/parts',
      favorites: 'Used/favorites',
      search_page_parts: 'Used/search_page',
      search_page_favorite: 'Used/search_page_favorite',
      last_page_parts: 'Used/last_page',
      last_page_favorite: 'Used/last_page_favorite',
      loadingMore: 'Used/loading',
      meta_parts: 'Used/meta',
      meta_favorite: 'Used/meta_favorite',
      ad_lasts: 'Used/ad_lasts'
    }),
    isFavorite () {
      return this.type === 'favorites'
    },
    isHome () {
      return this.type === 'home'
    },
    parts () {
      if (this.isHome) {
        return this.ad_lasts
      } else if (this.isFavorite) {
        return this.favorites
      } else {
        return this.usedParts
      }
    },
    meta () {
      if (this.isFavorite) {
        return this.meta_favorite
      } else {
        return this.meta_parts
      }
    },
    search_page () {
      if (this.isFavorite) {
        return this.search_page_favorite
      } else {
        return this.search_page_parts
      }
    },
    last_page () {
      if (this.isFavorite) {
        return this.last_page_favorite
      } else {
        return this.last_page_parts
      }
    },
    busy () {
      return this.loadingMore || this.last_page === this.search_page
    }
  },
  methods: {
    ...mapActions({
      GET_SEARCH_PARTS: 'Used/GET_PARTS',
      GET_FAVORITES: 'Used/GET_FAVORITES'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    getMore () {
      if (this.isFavorite) {
        this.GET_FAVORITES({ page: true })
      } else {
        this.GET_SEARCH_PARTS({ ...this.search, page: true })
      }
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
    justify-content: flex-end;
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
