<template lang="pug">
  .d-grid
    .filter
      .filter_item
        v-select(v-model='search.sparePart', :loading="loading", label='assemblyGroupName', :options='spareParts', :reduce='part => part.assemblyGroupNodeId', @input="GET_BRANDS(search.sparePart)", :placeholder="$t('home_search.spare-parts')")
          template(v-slot:selected-option='option')
            span(:class='option.icon')
              | {{ option.assemblyGroupName }}
          template(v-slot:option='option')
            span(:class='option.icon')
              | {{ option.assemblyGroupName }}

      .filter_item
        v-select(v-model='search.brand', :loading="loading", :disabled='!search.sparePart', label='manuName', :options='brands', :reduce='brand => brand.manuId', @input='GET_MODELS(search)', :placeholder="$t('brand')", :reset-on-options-change="!!search.brand")
          template(v-slot:selected-option='option')
            span(:class='option.icon')
              | {{ option.manuName }}
          template(v-slot:option='option')
            span(:class='option.icon')
              | {{ option.manuName }}

      .filter_item
        v-select(v-model='search.model', :loading="loading", :disabled='!search.brand', label='modelName', :options='models', :reduce='part => part.modId', @input="GET_TYPES(search)", :placeholder="$t('model')", :reset-on-options-change="!!search.model")
          template(v-slot:selected-option='option')
            span(:class='option.icon')
              | {{ option.modelName }}
          template(v-slot:option='option')
            span(:class='option.icon')
              | {{ option.modelName }}

      .filter_item
        v-select(v-model='search.type', :disabled='!search.model', :loading="loading", :options='types', :reduce='part => part.carId', :placeholder="$t('type')", :reset-on-options-change="!!search.type")
          template(slot='selected-option' slot-scope='option')
            span
              | {{ option.carName + '(' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')' }}
          template(slot='option' slot-scope='option')
            span
              | {{ option.carName + ' (' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')' }}

      .filter_item.w-100.h-100
        button.btn-new.w-100(@click="searchMethod", :disabled="!search.model") {{$t('search')}}
      .filter_item.filter_item_sort.sort_wrap
        span(@click.prevent="FILTER_PARTS('price')", :class="{'active':search_sort_by==='price'}")
          | {{$t('price')}}
          img(src="/img/search/sort_arrow.svg")
        span(@click.prevent="FILTER_PARTS('state')", :class="{'active':search_sort_by==='state'}")
          | {{$t('new')}}
          img(src="/img/search/sort_arrow.svg")
        span
          | {{ search_parts.length }} {{ $t('product') }}

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddToCartButton from '@/components/Catalog/AddToCartButton'

export default {
  name: 'PartsFilter',
  components: { AddToCartButton },
  props: {
    search: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data () {
    return {
      loadingResults: false,
      searchS: {
        sparePart: '',
        model: '',
        brand: '',
        type: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      spareParts: 'Catalog/spare_parts',
      brands: 'Catalog/brands',
      models: 'Catalog/models',
      types: 'Catalog/types',
      loading: 'Catalog/loading',
      search_lang: 'Catalog/search_lang',
      search_parts: 'Catalog/search_parts',
      search_sort_by: 'Catalog/search_sort_by'
    })
  },
  methods: {
    ...mapActions({
      GET_SPARE_PARTS: 'Catalog/GET_SPARE_PARTS',
      GET_BRANDS: 'Catalog/GET_BRANDS',
      GET_MODELS: 'Catalog/GET_MODELS',
      GET_TYPES: 'Catalog/GET_TYPES',
      GET_SEARCH_PARTS: 'Catalog/GET_SEARCH_PARTS',
      FILTER_PARTS: 'Catalog/FILTER_PARTS'
    }),
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    async searchMethod () {
      this.loadingResults = true
      await this.GET_SEARCH_PARTS(this.search)
      this.loadingResults = false
    }
  }
}
</script>

<style lang="scss" scoped>

.filter {
  row-gap: 10px;
  display: grid;
  grid-gap: 32px;

  &_item {
    &_sort {
      display: flex;
      place-content: space-around;
      place-items: center;

      position: absolute;
      right: 0;
      top: 0;
      padding: 24px;
      font-size: 14px;
    }
  }
}

.sort_wrap {
  color: #98A2B3;

  span {
    cursor: pointer;

    img {
      margin-left: 5px;
    }

    margin-right: 10px;

    &.active, &:hover {
      color: #344054;
    }
  }
}

.btn-new {
  height: 44px;
}

@media screen and (max-width: 500px) {
  .filter_item_sort {
    margin-top: 25px;
  }
}

@media screen and (min-width: 768px) {
  .filter {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
}

@media screen and (min-width: 992px) {
  .filter {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }
}

@media screen and (min-width: 1200px) {
  .filter {
    grid-template-columns: repeat(5, minmax(150px, 1fr));
  }
}
</style>
