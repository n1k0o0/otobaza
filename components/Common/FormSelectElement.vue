<template lang="pug">
  .form-group.choose-currency
    label(:for='name')
      | {{ label }}
      span.text-danger(v-if="required") *
    ValidationProvider(v-slot='{errors, failed}' :name='name' :rules='required ? rules : ""' :vid="vid" class="formElement" tag="div")
      select.form-control(
        :value='value'
        :id="name"
        :name='name'
        @change="onChange"
        :class="{'is-invalid': failed, 'is-valid': !failed && value && required}"
        )
        option(:value="''" :selected="value === '' || value === null || value === undefined" :disabled="value")
          | {{placeholder}}
        option(
          v-for='option in options'
          :key='option.value'
          :value='option.value'
          :selected="option.value === value"
        ) {{ option.text }}
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
export default {
  name: 'FormSelectElement',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    rules: {
      type: [String, Object],
      default: ''
    },
    vid: {
      type: String,
      default: ''
    }
  },
  methods: {
    onChange (e) {
      const val = +e.target.value
      this.$emit('input', val)
      const selected = this.options.find(item => +item.value === val)
      this.$emit('selected', selected)
    }
  }
}
</script>
