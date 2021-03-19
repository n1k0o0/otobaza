<template lang="pug">
  .form-group.form_group.choose-gender
    label(for='transmission')
      | {{ $t('transmission') }}
      |
      span.text-danger *
    ValidationProvider(v-slot='{errors,failed}', name='transmission', rules='required')
      select#transmission.form-control(
        :value='value'
        @change="onChange"
        name='transmission'
        :class="{'is-invalid': failed, 'is-valid': !failed && value}"
      )
        option(
          v-for='transmission in transmissions'
          :key='transmission.id'
          :value='transmission.id'
          :selected="value === transmission.id"
        ) {{ transmission.name }}
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
export default {
  name: 'TransmissionSelect',
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    transmissions () {
      return [0, 1, 2, 3].map(item => {
        return {
          id: item,
          name: this.$t(`car.transmission.${item}`)
        }
      })
    }
  },
  methods: {
    onChange (e) {
      this.$emit('input', +e.target.value)
    }
  }
}
</script>
