<template lang="pug">
  .form-group.choose-currency
    label(for='country')
      | {{label}}
      |
      span.text-danger(v-if="required") *
    ValidationProvider(v-slot='{errors}', name='city', :rules='required ? rules : ""' :vid="vid")
      select#city.form-control(:value='value', name='city' @change="e => $emit('input', +e.target.value)")
        option(v-for='city in cities', :key='city.id', :value='city.id')
          | {{ city.name }}
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FormCitySelect',
  props: {
    label: {
      type: String,
      default: ''
    },
    country: {
      type: [Number, String],
      default: 0
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
    }),
    cities () {
      return this.countries.find(country => +country.id === +this.country)?.cities || []
    }
  }
}
</script>
