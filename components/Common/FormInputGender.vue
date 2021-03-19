<template>
  <div class="form-group choose-currency">
    <label :for="$attrs.id">{{ $attrs.label }}
      <span v-if="'required' in $attrs" class="text-danger">*</span>
    </label>
    <select
      v-bind="$attrs"
      class="form-control"
      title=""
      :value="value"
      @change="$emit('input',+$event.target.value)"
    >
      <option :value="1">
        {{ $t('male') }}
      </option>
      <option :value="0">
        {{ $t('female') }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'FormInputGender',
  props: {
    value: {
      type: Number,
      default: 1
    }
  }
}
</script>
