<template>
  <div
    class="main-search"
  >
    <!-- search tag example -->
    <!--    <div v-if="isSearchVisible && vin" class="SearchTags">
      <div class="search-tags">
        <a
          v-for="(tab,index) in search_tabs"
          :key="tab.type"
          class="search-tag"
        >{{ tab.name }}
          <i class="fa fa-close" @click.prevent.self="onRemove(index)"></i>
        </a>
      </div>
    </div>-->

    <div class="ms-relative main-search-input">
      <input
        ref="searchInput"
        v-model="searchTerm"
        class="form-control main_search"
        :placeholder="vin?$t('home_search.by_vin'):$t('home_search.by_detail_code')"
        type="text"
        @focus="onFocus"
        @focusout="closeSearch"
        @input="onSearch"
      />
      <i :class="searching ? 'fa fa-spin fa-spinner': 'fa fa-search'"></i>
      <!--      <button
        v-if="isSearchVisible"
        class="search-close-btn"
        type="button"
        @click.prevent="closeSearch"
      >
        <i class="fa fa-close"></i>
      </button>-->
    </div>
    <!--    <SearchContent v-if="isSearchVisible && !searchTerm" />-->
    <Searchresults v-if="isSearchVisible && searchTerm" @selectVin="selectVin" />
    <!--    <div class="main-search-overlay" @click="closeSearch"></div>-->
  </div>
</template>
<script>
import SearchContent from '@/components/Search/SearchContent'
import Searchresults from '@/components/Search/Searchresults'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import debounce from 'lodash.debounce'

export default {
  name: 'HomeSearch',
  components: { Searchresults, SearchContent },
  props: {
    vin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchTerm: '',
      searching: false
    }
  },
  computed: {
    ...mapGetters({
      isSearchVisible: 'UI/isSearchVisible',
      search_tabs: 'UI/search_tabs'
    })
  },
  watch: {
    'isSearchVisible' (val) {
      if (val) {
        setTimeout(() => {
          this.$refs.searchInput.focus()
        }, 10)
        // document.querySelector('body').classList.add('overflow-hidden')
      } else {
        // document.querySelector('body').classList.remove('overflow-hidden')
      }
    }
  },
  methods: {
    ...mapActions({
      SEARCH_ASSEMBLY: 'Catalog/SEARCH_ASSEMBLY',
      SEARCH_VIN: 'Catalog/SEARCH_VIN'
    }),
    ...mapMutations({
      TOGGLE_SEARCH: 'UI/TOGGLE_SEARCH',
      SHOW_SEARCH: 'UI/SHOW_SEARCH',
      REMOVE_SEARCH_TAB: 'UI/REMOVE_SEARCH_TAB'
    }),
    onSearch: debounce(async function () {
      // this.searchTerm = e.target.value
      if (this.searchTerm) {
        this.searching = true
        if (this.vin) {
          await this.SEARCH_VIN({
            term: this.searchTerm
          }).finally(() => {
            this.searching = false
          })
        } else {
          await this.SEARCH_ASSEMBLY({
            term: this.searchTerm
          }).finally(() => {
            this.searching = false
          })
        }
      }
    }, 800),
    onRemove (index) {
      this.REMOVE_SEARCH_TAB(index)
    },
    onFocus () {
      this.SHOW_SEARCH()
    },
    closeSearch () {
      setTimeout(() => {
        this.searchTerm = ''
        this.TOGGLE_SEARCH()
      }, 300)
    },
    selectVin () {
      this.searchTerm = ''
      this.TOGGLE_SEARCH(true)
    }
  }
}
</script>
<style lang="scss">
.search-tags {
  margin-bottom: 5px;

  .search-tag {
    margin-right: 5px;

    i {
      display: none;
    }

    &:last-child {
      i {
        display: block;
      }
    }
  }

  i {
    cursor: pointer;

    &:hover {
      color: #E05353;
    }
  }
}

.main-search {
  transition: top 0.2s ease-in;

  i.fa.fa-spin.fa-spinner {
    position: absolute;
    left: 32px;
    top: 20px;
    font-size: 23px;
    color: #D0D0D0;
  }

  &.opened {
    //position: fixed !important;
    //top: 0 !important;
    //bottom: 0;
    //right: 0;
    //left: 0;
    z-index: 999;
    //overflow: hidden;
    //display: flex;
    //flex-direction: column;
    //padding: 40px 55px;
    //align-items: center;

    .SearchTags {
      z-index: 100;
      //max-width: 1110px;
      //width: 100%;
    }

    .main-search-input {
      z-index: 100;
      //transition: top 0.2s ease-in;
      //max-width: 1110px;
      //width: 100%;
    }

    .main-search-overlay {
      opacity: 1;
      visibility: 0.2;
      pointer-events: auto;
    }

    /*
    .ms-content {
      z-index: 100;
      max-width: 1110px;
      width: 100%;
      flex: 1;
      margin-top: 5px;
      background: #fff;
      border-radius: 3px;
    }
    */
  }

  &-overlay {
    position: fixed;
    top: 0;
    opacity: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(77, 166, 255, 0.17);
    z-index: 99;
    overflow: hidden;
    pointer-events: none;
    transition: all 0.2s ease-in;
  }
}
</style>
