<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      PartsPlaceholder
    template(v-else-if="$fetchState.error")
      .container
        .mcontainer.mh60vh
          .response-message
            .mkub.mkubfail
            .rminfo
              h4.rmtt {{ $t('not_found') }}`
              p.rmtxt {{ $t('not_found_info') }}
              h1 {{$fetchState}}
    template(v-else)
      div
        .container.d-flex.flex-column
          .hr-wrap
            h1.title.hr-text Ehtiyyat hisseler
          .filter.row
            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.sparePart', :loading="loading", label='assemblyGroupName', :options='spareParts', :reduce='part => part.assemblyGroupNodeId', @input='GET_BRANDS(search.sparePart)',:placeholder="$t('home_search.spare-parts')")
            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.brand', :loading="loading", :disabled='!search.sparePart', label='manuName', :options='brands', :reduce='brand => brand.manuId', @input='GET_MODELS(search)',:placeholder="$t('brand')",:reset-on-options-change="true")
            .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
              v-select(v-model='search.model', :loading="loading", :disabled='!search.brand', label='modelName', :options='models', :reduce='part => part.modId', :placeholder="$t('model')", :reset-on-options-change="true")
            .filter_item.col-md-4.col-lg-3.col-xl-2
              v-select(v-model='search.type', :disabled='!search.model', label='name', :options='types', :reduce='part => part.value', :placeholder="$t('type')")
            .filter_item.col-md-4.col-lg-3.col-xl-1.w-100
              button.btn.btn-primary.w-100 {{$t('search')}}
          .vin_search.d-flex.justify-content-center
            div.w-50.position-relative
              input.form-control
              .fa.fa-search.fa-lg.fa-fw
          .sort_wrap.text-right
            span
              | Qiymet
              img(src="img/search/sort_arrow.svg")
            span
              | Yeni
              img(src="img/search/sort_arrow.svg")
          SearchResults(:parts="parts")

</template>
<script>
import Parts from '@/components/Catalog/Parts'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import SearchResults from '@/components/Search/ResultParts'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Search',
  watchQuery: true,
  components: { PartsPlaceholder, Parts, SearchResults },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    if (!this.spareParts?.length) {
      await this.GET_SPARE_PARTS()
    }
    if (this.$route.query.brand && !this.brands?.length) {
      await this.GET_BRANDS(this.$route.query.sparePart)
    }
    if (this.$route.query.model && !this.models?.length) {
      await this.GET_MODELS(this.$route.query)
    }

    this.search.sparePart = +this.$route.query.sparePart ? +this.$route.query.sparePart : null
    this.search.brand = +this.$route.query.brand ? +this.$route.query.brand : null
    this.search.model = +this.$route.query.model ? +this.$route.query.model : null
    this.search.type = +this.$route.query.type ? +this.$route.query.type : null
  },
  data () {
    return {
      search: {
        sparePart: '',
        model: '',
        brand: '',
        type: ''
      },
      parts: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11]
    }
  },
  computed: {
    ...mapGetters({
      spareParts: 'Catalog/spare_parts',
      brands: 'Catalog/brands',
      models: 'Catalog/models',
      types: 'Catalog/types',
      loading: 'Catalog/loading'
    })
  },
  methods: {
    ...mapActions({
      GET_SPARE_PARTS: 'Catalog/GET_SPARE_PARTS',
      GET_BRANDS: 'Catalog/GET_BRANDS',
      GET_MODELS: 'Catalog/GET_MODELS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-color: #fff;
  gap: 15px;
  margin: 10px auto;
  padding: 50px 30px;
  min-height: calc(100vh - 20px - 62px - 95px - 241px);

  .filter {
    row-gap: 10px;
  }

  .vin_search {
    > div {
      @media screen and (max-width: 767px) {
        width: 100% !important;
      }
    }
  }

  .sort_wrap {
    color: #4a8ee9;

    span {
      cursor: pointer;

      img {
        margin-left: 5px;
      }

      margin-right: 10px;
    }
  }

  .fa-search {
    position: absolute;
    top: 10px;
    right: 5px;
    color: #bababa;
    cursor: pointer;
  }

  .btn {
    border-radius: 5px;
    background-color: #4a8ee9;
    color: #fff;
  }
}
</style>
