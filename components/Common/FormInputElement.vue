<template lang="pug">
  ValidationProvider(v-slot='{errors, failed}' :name='name' :rules='required ? rules : ""' :vid="vid")
    FormInput(
      :id="name"
      :value="value"
      :type="type"
      @input="onChange"
      :invalid='failed'
      :is-required="required"
      :label='label'
      :title='label'
      )
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
import FormInput from '@/components/Common/FormInput'
export default {
  name: 'FormInputElement',
  components: { FormInput },
  props: {
    elClass: {
      type: String,
      default: ''
    },
    vid: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    name: {
      type: String,
      required: true
    },
    rules: {
      type: [String, Array, Object],
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onChange (e) {
      this.$emit('input', this.type === 'number' ? Number(e) : e)
    }
  }
}
</script>
