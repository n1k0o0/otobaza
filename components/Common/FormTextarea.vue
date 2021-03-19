<template>
  <div class="form-group">
    <label v-if="$attrs.label" :for="$attrs.id">{{ $attrs.label }} <span v-if="isRequired" class="text-danger">*</span></label>
    <textarea
      v-bind="$attrs"
      class="form-control"
      :class="{'is-invalid': invalid, 'is-valid': !invalid && value}"
      :type="type"
      :value="value"
      @input="$emit('input',$event.target.value)"
    ></textarea>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'FormTextarea',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
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
