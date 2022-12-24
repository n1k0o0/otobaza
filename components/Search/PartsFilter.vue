<template lang="pug">
  .filter.row
    .filter_item.col-md-4.col-lg-3.col-xl-2.col-sm-12
      v-select(v-model='search.sparePart', :loading="loading", label='assemblyGroupName', :options='spareParts', :reduce='part => part.assemblyGroupNodeId', @input="GET_BRANDS(search.sparePart)", :placeholder="$t('home_search.spare-parts')")
        template(v-slot:selected-option='option')
          span(:class='option.icon')
          | {{ option.assemblyGroupName.length < 15 ? option.assemblyGroupName : (option.assemblyGroupName.substring(0, 12) + '...') }}
        template(v-slot:option='option')
          span(:class='option.icon')
          | {{ option.assemblyGroupName }}

    .filter_item.col-md-4.col-lg-3.col-xl-2.col-sm-12
      v-select(v-model='search.brand', :loading="loading", :disabled='!search.sparePart', label='manuName', :options='brands', :reduce='brand => brand.manuId', @input='GET_MODELS(search)', :placeholder="$t('brand')", :reset-on-options-change="!!search.brand")
        template(v-slot:selected-option='option')
          span(:class='option.icon')
          | {{ option.manuName.length < 15 ? option.manuName : (option.manuName.substring(0, 12) + '...') }}
        template(v-slot:option='option')
          span(:class='option.icon')
          | {{ option.manuName }}

    .filter_item.col-md-4.col-lg-3.col-xl-2.col-sm-12
      v-select(v-model='search.model', :loading="loading", :disabled='!search.brand', label='modelName', :options='models', :reduce='part => part.modId', @input="GET_TYPES(search)", :placeholder="$t('model')", :reset-on-options-change="!!search.model")
        template(v-slot:selected-option='option')
          span(:class='option.icon')
          | {{ option.modelName.length < 15 ? option.modelName : (option.modelName.substring(0, 12) + '...') }}
        template(v-slot:option='option')
          span(:class='option.icon')
          | {{ option.modelName }}

    .filter_item.col-md-4.col-lg-3.col-xl-2
      v-select(v-model='search.type', :disabled='!search.model', :loading="loading", :options='types', :reduce='part => part.carId', :placeholder="$t('type')", :reset-on-options-change="!!search.type")
        template(slot='selected-option' slot-scope='option')
          | {{ (option.carName + '(' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')').substring(0, 8) }}...
        template(slot='option' slot-scope='option')
          | {{ option.carName + ' (' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')' }}

    .filter_item.col-md-4.col-lg-3.col-xl-2.w-100.h-100
      button.btn-new.w-100(@click="searchMethod", :disabled="!search.model") {{$t('search')}}
    .filter_item.col-md-4.col-lg-3.col-xl-2.col-sm-12.filter_item_sort.sort_wrap
      span(@click.prevent="FILTER_PARTS('price')", :class="{'active':search_sort_by==='price'}")
        | {{$t('price')}}
        img(src="/img/search/sort_arrow.svg")
      span(@click.prevent="FILTER_PARTS('state')", :class="{'active':search_sort_by==='state'}")
        | {{$t('new')}}
        img(src="/img/search/sort_arrow.svg")

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
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

  &_item {
    &_sort {
      display: flex;
      place-content: space-around;
      place-items: center;
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
</style>
