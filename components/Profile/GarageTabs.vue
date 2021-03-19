<template lang="pug">
  .catalog-section
    .catalog-cover
      .container
        ul.catalog-type
          li(:class="{active: isActive(2)}")
            n-link(:to="localePath('garage-profile')") {{ $t('my_info') }}
          li(:class="{active: isActive(1)}")
            n-link(:to="localePath('garage-cars')") {{ $t('my_cars') }}
          li(:class="{active: isActive(3)}")
            n-link(:to="localePath('garage-orders')") {{ $t('my_ordered_products') }}
</template>
<script>
export default {
  name: 'GarageTabs',
  props: {
    activeTab: {
      type: Number,
      default: 2
    }
  },
  methods: {
    isActive (tab) {
      return this.activeTab === tab
    }
  }
}
</script>
