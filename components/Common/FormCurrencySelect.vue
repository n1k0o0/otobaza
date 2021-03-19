<template lang="pug">
  .form-group.choose-currency
    label(for='currency')
      | {{ $t('currency') }}
      span.text-danger(v-if="required") *
    ValidationProvider(v-slot='{errors, failed}' name='currency' :rules='required ? rules : ""' :vid="vid")
      select#currency.form-control(:value='value', name='currency' @change="e => $emit('input', +e.target.value)")
        option(v-for='currency in currencies', :key='currency.id', :value='currency.id')
          | {{ currency.currency_code }}
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FormCurrencySelect',
  props: {
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: ''
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    vid: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      currencies: 'UI/currencies'
    })
  }
}
</script>
