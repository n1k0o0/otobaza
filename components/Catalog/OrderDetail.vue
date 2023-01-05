<template lang="pug">
  .col-12.col-sm-12.col-md-4.contact-lr.reg-rules.buy-now-rules
    .buy-now-details
      .buy_now_top
        .buy_flex
          p.buy_p_name {{ $t('product_name') }}:
          span.buy-p-name {{order.description}}
        .p_code_market
          .buy_flex
            p.p_code_tt {{ $t('product_code') }}:
            span.p_code {{order.part_number}}
          .buy_flex
            p.p_code_tt {{ $t('store') }}:
            a.p_code {{order.store_name}}
      .buy_now_bottom
        .p_code_market.mt36
          .buy_flex
            p.p_code_tt {{ $t('quantity') }}:
            span.p_code x{{order.quantity}}
          .buy_flex
            p.p_code_tt {{ $t('price') }}:
            span.p_code {{order.price.price}} {{order.price.currency}}
        .buy_flex
          p.buy_p_name {{ $t('sum') }}:
          span.buy-p-name {{totalSum}} {{order.price.currency}}
    button.btn.contact-btn.buy-now-btn.btn-new(type='submit' :disabled='loading')
      i.fa.fa-spinner.fa-spin(v-if='loading')
      span {{ $t('do_order') }}
</template>
<script>
export default {
  name: 'OrderDetail',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    order: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    totalSum () {
      return (this.order.quantity * this.order.price.price).toFixed(2)
    }
  }
}
</script>
