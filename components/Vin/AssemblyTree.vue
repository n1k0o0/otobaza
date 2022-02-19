<template lang="pug">
  .col-12.cclass-tree
    ClientOnly
      liquor-tree(:data="vin_assemblies_tree" :options="treeOptions" @node:selected="onSelected")
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AssemblyTree',
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    slug: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      vin_assemblies_tree: 'Catalog/vin_assemblies_tree',
      car_assemblies_brand: 'Catalog/car_assemblies_brand'
    }),
    treeOptions () {
      return {
        propertyNames: {
          text: 'name',
          id: 'quickgroupid',
          children: 'children',
          ssd: 'ssd',
        },
        checkbox: false,
        multiple: false,
        autoCheckChildren: false
      }
    }
  },
  methods: {
    ...mapMutations({
      TOGGLE_SEARCH: 'UI/TOGGLE_SEARCH',
      SET_VIN_ASSEMBLIES_TREE: 'Catalog/SET_VIN_ASSEMBLIES_TREE',
      SET_CAR_ASSEMBLIES_BRAND: 'Catalog/SET_CAR_ASSEMBLIES_BRAND'
    }),
    onSelected (node) {
      if (!node.children.length) {

        if (this.isSearch) {
          this.TOGGLE_SEARCH()
        }
        window.location.href = this.localePath({
          name: 'vin-oem',
          params: {
            oem: `${node.id}____${this.car_assemblies_brand.catalog}____${this.car_assemblies_brand.vehicleid}____${this.car_assemblies_brand.ssd}`
          }
        })
      }
    }
  },
  /*mounted () {
    const tree = JSON.parse(localStorage.getItem('vin_assemblies_tree'))
    const brand = JSON.parse(localStorage.getItem('car_assemblies_brand'))
    const expireDate = new Date(JSON.parse(localStorage.getItem('vin_date')))

    if (tree && brand && expireDate){
      if (expireDate > (Date.now() - 1000 * 60 * 60)) {
        this.SET_VIN_ASSEMBLIES_TREE(tree)
        this.SET_CAR_ASSEMBLIES_BRAND(brand)
      }
    }else {
      localStorage.removeItem('vin_assemblies_tree')
      localStorage.removeItem('car_assemblies_brand')
      localStorage.removeItem('vin_date')
    }

  }*/
}
</script>
