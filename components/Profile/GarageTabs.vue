<template lang="pug">
  .catalog-section
    .catalog-cover
      .container
        ul.catalog-type
          li(:class="{active: isActive(2)}")
            n-link(:to="localePath('garage-profile')") {{ $t('profile') }}
          li(:class="{active: isActive(1)}")
            n-link(:to="localePath('garage-cars')") {{ $t('my_garage') }}
          li(:class="{active: isActive(3)}")
            n-link(:to="localePath('garage-orders')") {{ $t('my_orders') }}
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
