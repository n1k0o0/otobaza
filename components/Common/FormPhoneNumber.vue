<template lang="pug">
  .form-group.mobile_number_cover
    label(title)
      | {{label ? label : $t('mobile_number')}}
      |
      span.text-danger *
    .mobile_number(:class="{invalidPhone: !!error}")
      select#prefix.form-control.prefix(:value='prefix', @change="onChangePrefix" name='number-prefix')
        option(v-for="(p,i) in prefixes" :selected="p === prefix" :key="i") {{p}}
      ClientOnly
        ValidationProvider(
          rules="required|min:9|max:9"
          :persist="true"
          name="phone"
          v-slot="{errors, failed, valid}"
          style="width:100%")
          input#phone.form-control(
            :class="{'is-invalid': failed, 'is-valid': !failed && value}"
            v-model="phoneNumber"
            v-mask="'#########'"
            type="tel"
          )
</template>
<script>
export default {
  name: 'FormPhoneNumber',
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: '+994'
    },
    prefixes: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    phoneNumber: {
      get () {
        return this.value.replace(this.prefix, '')
      },
      set (val) {
        this.$emit('input', `${this.prefix}${val}`)
      }
    }
  },
  methods: {
    onChangePrefix (e) {
      this.$emit('update:prefix', e.target.value)
      this.$emit('input', `${e.target.value}`)
    }
  }
}
</script>
