<template lang="pug">
  .ms-content
    .Searchresults
      ul
        template(v-if="cars.length")
          li(v-for="(car,i) in cars" :key="i" @click.prevent="goToCar(car)")
            em {{car.manuName}}, {{car.modelName}} ({{car.First}}{{car.Second ? '-'+car.Second:''}})
        template(v-if="products.length")
          li(v-for="(product,i) in products" :key="i"  @click.prevent="goToPart(product)")
            span {{product.articleNumber}}
            em {{product.mfrName ? product.mfrName+' - ' : ''}}{{product.assemblyGroupName}}
        template(v-if="carByVin")
          li(@click.prevent="goToCarByVin()")
            //nuxt-link( :to="localePath('vin-catalog')")
            span {{carByVin.name}}
        template(v-if="!cars.length && !products.length && !carByVin")
          span.NotFound {{ $t('no_results_found') }}
</template>
<script>
import { Slugify } from '@/filters'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Searchresults',
  computed: {
    ...mapGetters({
      search_results: 'Catalog/search_results'
    }),
    cars () {
      return this.search_results?.cars || []
    },
    products () {
      return this.search_results?.product || []
    },
    carByVin () {
      return this.search_results?.carByVin || false
    }
  },
  methods: {
    ...mapMutations({
      ADD_SEARCH_TAB: 'UI/ADD_SEARCH_TAB'
    }),
    goToCar (car) {
      window.location.href = this.localePath({
        name: 'model-slug',
        params: {
          slug: `${car.modelId}-${Slugify(car.modelName)}`
        }
      })
    },
    goToPart (product) {
      window.location.href = this.localePath({
        name: 'part-slug',
        params: {
          slug: `p-1-${product.legacyarticleId}-${product.mfrid}-${product.assemblyGroupNodeid}`
        }
      })
    },
    async goToCarByVin () {
      this.ADD_SEARCH_TAB({
        type: 'vin',
        name: this.carByVin.name,
        slug: this.carByVin.catalog + '____' + this.carByVin.vehicleId + '____' + this.carByVin.ssd
      })
      this.$emit('selectVin')
    }
  }
}
</script>
<style lang="scss" scoped>
.ms-content {
  padding: 0;
  background: none !important;
  z-index: 1000;
}

.Searchresults {
  background: #fff;
  border-radius: 2px;

  .NotFound {
    display: block;
    padding: 20px 10px;
    text-align: center;
    color: #7f7f7f;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 10px 10px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #e7e7e7;
      cursor: pointer;

      &:last-child {
        border: 0;
      }

      &:hover, &.selected {
        background: #f7f7f7;
      }

      span {
        font-size: 14px;
        color: #000;
        font-weight: bold;
      }

      em {
        font-size: 14px;
        color: #000;
        font-style: normal;
      }
    }
  }
}
</style>
