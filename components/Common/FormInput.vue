<template lang="pug">
  .form-group
    label(v-if='$attrs.label', :for='$attrs.id')
      | {{ $attrs.label }}
      |
      span.text-danger(v-if='isRequired') *
    input.form-control(v-bind='$attrs', :class="{'is-invalid': invalid, 'is-valid': !invalid && value && isRequired}", :type='type', :value='value', @input="$emit('input',$event.target.value)")
    slot
</template>
<script>
export default {
  name: 'FormInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    invalid: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: false
    }
  }
}
</script>
