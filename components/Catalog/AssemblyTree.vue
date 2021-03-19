<template lang="pug">
  .col-12.cclass-tree
    ClientOnly
      liquor-tree(:data="car_assemblies_tree" :options="treeOptions" @node:selected="onSelected")
</template>
<script>
import { getUrlSlug, setNuxtLink } from '@/utils'
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
      car_assemblies_tree: 'Catalog/car_assemblies_tree',
      car_assemblies_brand: 'Catalog/car_assemblies_brand'
    }),
    treeOptions () {
      return {
        propertyNames: {
          text: 'assemblyGroupName',
          id: 'assemblyGroupNodeId',
          children: 'children'
        },
        checkbox: false,
        multiple: false,
        autoCheckChildren: false
      }
    }
  },
  methods: {
    ...mapMutations({
      TOGGLE_SEARCH: 'UI/TOGGLE_SEARCH'
    }),
    onSelected (node) {
      if (!node.children.length) {
        let slug
        if (this.isSearch) {
          slug = getUrlSlug(this.slug, 'car')
        } else {
          slug = getUrlSlug(this.$route.params.slug, 'car')
        }
        const data = {
          page: 1,
          model: this.car_assemblies_brand.ManuId,
          car: slug.car,
          assembly: node.id,
          name: node.data.text
        }
        if (this.isSearch) {
          this.TOGGLE_SEARCH()
        }
        this.$router.push(setNuxtLink(this, 'assembly', data))
      }
    }
  }
}
</script>
