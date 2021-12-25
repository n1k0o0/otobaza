<template lang="pug">
  .result-filter
    .buy-filter
      span {{ $t('filter.title') }}:
      .custom-control.custom-checkbox
        input#forprice.custom-control-input(v-model='filter', name='filter', type='radio', value='price')
        label.custom-control-label(for='forprice') {{ $t('filter.by_price') }}
      .custom-control.custom-checkbox
        input#nearby.custom-control-input(v-model='filter', name='filter', type='radio', value='nearest')
        label.custom-control-label(for='nearby') {{ $t('filter.by_nearest') }}
      .custom-control.custom-checkbox
        input#brand.custom-control-input(v-model='filter', name='filter', type='radio', value='brand')
        label.custom-control-label(for='brand') {{ $t('filter.by_manufacture') }}
</template>
<script>
export default {
  name: 'PartsFilters',
  computed: {
    filter: {
      get () {
        return this.$route?.query?.filter || 'nearest'
      },
      set (val) {
        this.$router.push({ path: this.$route.path, query: { filter: val } })
      }
    }
  }
}
</script>
