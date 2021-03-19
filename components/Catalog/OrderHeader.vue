<template lang="pug">
  .response-message.about-title
    .mkub.mkubsuccess.kubflex.order_now
      i.fa.fa-shopping-cart
    .rminfo
      h2.rmtt {{ $t('order') }}
      p.rmtxt {{ $t('order_info') }}
</template>
<script>
export default {
  name: 'OrderHeader'
}
</script>
