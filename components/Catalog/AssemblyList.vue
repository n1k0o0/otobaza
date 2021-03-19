<template lang="pug">
  .col-12.col-sm-12.cclass_description
    ul
      li(v-for="assembly in car_assemblies_list")
        template(v-if="isSearch")
          a(href="javascript:void(0)" @click.prevent="goToAssembly(assembly)") {{ assembly.assemblyGroupName }}
        template(v-else)
          n-link(:to="link(assembly)") {{ assembly.assemblyGroupName }}
</template>
<script>
import { getUrlSlug, setNuxtLink } from '@/utils'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'AssemblyList',
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
      car_assemblies_list: 'Catalog/car_assemblies_list',
      car_assemblies_brand: 'Catalog/car_assemblies_brand'
    })
  },
  async activated () {
    await this.GET_CAR_ASSEMBLIES_LIST()
  },
  methods: {
    ...mapActions({
      GET_CAR_ASSEMBLIES_LIST: 'Catalog/GET_CAR_ASSEMBLIES_LIST'
    }),
    ...mapMutations({
      TOGGLE_SEARCH: 'UI/TOGGLE_SEARCH'
    }),
    link (assembly) {
      const { car } = getUrlSlug(this.$route.params.slug, 'car')

      const data = {
        page: 1,
        model: this.car_assemblies_brand.ManuId,
        car,
        assembly: assembly.id,
        name: assembly.assemblyGroupName
      }
      return setNuxtLink(this, 'assembly', data, true)
    },
    goToAssembly (assembly) {
      const { car } = getUrlSlug(this.slug, 'car')
      const data = {
        page: 1,
        model: this.car_assemblies_brand.ManuId,
        car,
        assembly: assembly.id,
        name: assembly.assemblyGroupName
      }
      this.TOGGLE_SEARCH()
      const link = setNuxtLink(this, 'assembly', data, true)
      this.$router.push(link)
    }
  }
}
</script>
