<template lang="pug">
  .form-group.form_group.choose-gender(v-if="manufacturers && manufacturers.length")
    label(for='manufacturer')
      | {{ $t('manufacturer') }}
      |
      span.text-danger *
    ValidationProvider(v-slot='{errors,failed}', name='manufacturer', rules='required')
      select#manufacturers.form-control(
        :value='value'
        @change="onChange"
        name='manufacturer'
        :class="{'is-invalid': failed, 'is-valid': !failed && value}"
      )
        option(
          :value='value'
          :disabled="value"
          :selected="value === 0 || value === ''"
        ) {{ $t('select_manufacturer') }}
        option(
          v-for='manufacturer in manufacturers'
          :key='manufacturer.manuId'
          :value='manufacturer.manuId'
          :selected="value === manufacturer.manuId"
          ) {{ manufacturer.manuName }}
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ManufacturerSelect',
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    manuName: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      manufacturers: 'Catalog/manufacturersByLogo'
    })
  },
  async beforeMount () {
    await this.GET_CATALOG_MANUFACTURERS({
      type: 'logo'
    })
    if (this.value) {
      const manuName = this.manufacturers.find(item => item.manuId === this.value)
      this.$emit('update:manuName', manuName?.manuName || '')
    }
  },
  methods: {
    ...mapActions({
      GET_CATALOG_MANUFACTURERS: 'Catalog/GET_CATALOG_MANUFACTURERS'
    }),
    onChange (e) {
      this.$emit('input', +e.target.value)
      const manuName = this.manufacturers.find(item => item.manuId === +e.target.value)
      this.$emit('update:manuName', manuName?.manuName || '')
    }
  }
}
</script>
