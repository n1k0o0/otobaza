<template>
  <div class="ms-content">
    <!--    <PageCatalogLogo-->
    <!--      v-if="search_tabs.length === 0"-->
    <!--      is-search-->
    <!--      @selected="onLogoSelected"-->
    <!--    />-->
    <template v-if="search_tabs.length">
      <!--      <Manufacturer
        v-if="lastTab.type === 'manufacturer'"
        is-search
        :slug="lastTab.slug"
      />
      <Model
        v-if="lastTab.type === 'model'"
        is-search
        :slug="lastTab.slug"
      />-->
      <!--      <Car-->
      <!--        v-if="lastTab.type === 'car'"-->
      <!--        is-search-->
      <!--        :slug="lastTab.slug"-->
      <!--      />-->
      <Vin
        v-if="lastTab.type === 'vin'"
        is-search
        :slug="lastTab.slug"
      />
    </template>
  </div>
</template>
<script>
import { Slugify } from '@/filters'
import Manufacturer from '@/pages/brand/_slug'
import Model from '@/pages/model/_slug'
import Car from '@/pages/car/_slug'
import Vin from '@/pages/vin/catalog'
import PageCatalogLogo from '@/pages/kataloq/mashin-kataloqu-brend'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SearchContent',
  components: { Manufacturer, Model, Car, PageCatalogLogo, Vin },
  computed: {
    ...mapGetters({
      search_tabs: 'UI/search_tabs'
    }),
    lastTab () {
      return this.search_tabs.length ? this.search_tabs.slice(-1).pop() : null
    }
  },
  methods: {
    ...mapMutations({
      ADD_SEARCH_TAB: 'UI/ADD_SEARCH_TAB'
    }),
    onLogoSelected (manufacturer) {
      this.ADD_SEARCH_TAB({
        type: 'manufacturer',
        name: manufacturer.manuName,
        slug: `${manufacturer.manuId}-${Slugify(manufacturer.manuName)}`
      })
    }
  }
}
</script>
<style lang="scss">
.ms-content {
  overflow: auto;
  padding: 30px 0;

  .catalog-logo {
    margin-top: -44px;
  }

  .mcontainer {
    margin: 0;
    padding: 0;

    .cclass-back {
      visibility: hidden;
      pointer-events: none;
    }
  }

  .innertop-back {
    display: none;
  }
}
</style>
