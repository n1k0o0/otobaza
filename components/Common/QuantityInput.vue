<template lang="pug">
  .quantity
    a.quantity__minus(href='#' @click.prevent="minus")
      span -
    input.quantity__input(
      name='quantity'
      type='number'
      v-model='newValue'
      )
    a.quantity__plus(href='#' @click.prevent="plus")
      span +
</template>
<script>
export default {
  name: 'QuantityInput',
  props: {
    value: {
      default: 1,
      type: Number
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 99,
      type: Number
    }
  },
  data () {
    return {
      newValue: 1
    }
  },
  watch: {
    newValue (val) {
      if (Number(val) <= 1) {
        this.newValue = 1
        this.$emit('input', this.newValue)
      } else {
        this.newValue = +val
        if (this.newValue >= this.max) {
          this.$emit('input', this.max)
        } else {
          this.$emit('input', this.newValue)
        }
      }
    },
    value: {
      handler (newVal) {
        this.newValue = +newVal
      }
    }
  },
  created () {
    this.newValue = this.value
  },
  methods: {
    plus: function () {
      if (this.max === undefined || (this.newValue < this.max)) {
        this.newValue = this.newValue + 1
        this.$emit('input', this.newValue)
      }
    },
    minus: function () {
      if ((this.newValue) > this.min) {
        this.newValue = this.newValue - 1
        this.$emit('input', this.newValue)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .quantity {
    &__input {
      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type=number] {
        -moz-appearance: textfield;
      }
    }
  }
</style>
