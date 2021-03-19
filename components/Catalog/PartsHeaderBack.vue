<template lang="pug">
  .row.cclass-items.car-cclass-items
    .col-12.col-sm-12
      a.cclass-back(href='#', @click.prevent='$router.back()') {{ $t('go_back') }}
</template>
<script>
export default {
  name: 'PartsHeaderBack'
}
</script>
