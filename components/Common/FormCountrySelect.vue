<template lang="pug">
  .form-group.choose-currency
    label(for='country')
      | {{label}}
      |
      span.text-danger(v-if="required") *
    ValidationProvider(v-slot='{errors}', name='country', :rules='required ? rules : ""' :vid="vid")
      select#country.form-control(:value='value', name='country' @change="e => $emit('input', +e.target.value)")
        option(v-for='country in countries', :key='country.id', :value='country.id')
          | {{ country.native_name }}
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FormCountrySelect',
  props: {
    label: {
      type: String,
      default: ''
    },
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
      countries: 'UI/countries'
    })
  }
}
</script>
