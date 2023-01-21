<template lang="pug">
  .filter
    .filter_item
      v-select(v-model='search.brand', :loading="loading", label='manuName', :options='manufacturers', :reduce='brand => brand.manuId', @input='GET_MANUFACTURER_MODELS({manufacturer:search.brand})', :placeholder="$t('brand')", :reset-on-options-change="!!search.brand")
        template(v-slot:selected-option='option')
          span(:class='option.icon')
          | {{ option.manuName.length < 15 ? option.manuName : (option.manuName.substring(0, 12) + '...') }}
        template(v-slot:option='option')
          span(:class='option.icon')
          | {{ option.manuName }}

    .filter_item
      v-select(v-model='search.model', :loading="loading", :disabled='!search.brand', label='ModelName', :options='manufacturer_models', :reduce='part => part.modId', :placeholder="$t('model')", :reset-on-options-change="!!search.model")
        template(v-slot:selected-option='option')
          span(:class='option.icon')
          | {{ option.ModelName.length < 15 ? option.ModelName : (option.ModelName.substring(0, 12) + '...') }}
        template(v-slot:option='option')
          span(:class='option.icon')
          | {{ option.ModelName }}

    .filter_item
      input( v-model="search.title", :placeholder="$t('search')",  )

    .filter_item.w-100.h-100
      button.btn-new.w-100(@click="searchMethod", :disabled="!(search.brand || search.model || search.title)") {{$t('search')}}
    .filter_item.filter_item_sort.sort_wrap
      span(@click.prevent="FILTER_PARTS('price')", :class="{'active':search_sort_by==='price'}")
        | {{$t('price')}}
        img(src="/img/search/sort_arrow.svg")
      span(@click.prevent="FILTER_PARTS('state')", :class="{'active':search_sort_by==='state'}")
        | {{$t('new')}}
        img(src="/img/search/sort_arrow.svg")
      span
        | {{ parts.length }} {{ $t('product') }}

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
      loading: 'Used/loading',
      search_lang: 'Used/search_lang',
      parts: 'Used/parts',
      search_sort_by: 'Used/sort_by',
      manufacturers: 'Catalog/manufacturers',
      manufacturer_models: 'Catalog/manufacturer_models'
    })
  },
  methods: {
    ...mapActions({
      GET_MANUFACTURER_MODELS: 'Catalog/GET_MANUFACTURER_MODELS',
      FILTER_PARTS: 'Used/FILTER_PARTS',
      GET_PARTS: 'Used/GET_PARTS'
    }),
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    async searchMethod () {
      this.loadingResults = true
      await this.GET_PARTS(this.search)
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
      top: 104px;
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

@media screen and (min-width: 768px) {
  .filter {
    grid-template-columns: repeat(3, minmax(150px, 1fr));

    &_item:nth-child(3) {
      grid-column: 3/5;
    }
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

input {
  width: 100%;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  height: 44px;
  padding: 10px 14px;

  &:focus-visible {
    outline: none;
  }
}
</style>
