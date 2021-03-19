<template lang="pug">
  .form-group.form_group.choose-gender(v-if="models && models.length")
    label(for='model')
      | {{ $t('model') }}
      |
      span.text-danger *
    ValidationProvider(v-slot='{errors,failed}', name='model', rules='required')
      select#model.form-control(
        :value='value'
        @change="onChange"
        name='model'
        :class="{'is-invalid': failed, 'is-valid': !failed && value}"
      )
        option(
          :value='value'
          :disabled="value"
          :selected="value === 0 || value === ''"
        ) {{ $t('select_model') }}
        option(
          v-for='model in models'
          :key='model.modId'
          :value='model.modId'
          :selected="value === model.modId"
        ) {{ model.ModelName }}
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ModelSelect',
  props: {
    modName: {
      type: String,
      default: ''
    },
    manuId: {
      type: Number,
      default: 0
    },
    value: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      manufacturer_models: 'Catalog/manufacturer_models'
    }),
    models () {
      return this.manufacturer_models?.items || []
    }
  },
  watch: {
    manuId: {
      handler () {
        this.$nextTick(() => {
          this.getManufacturerModels()
        })
      },
      immediate: true
    }
  },
  methods: {
    async getManufacturerModels () {
      await this.GET_MANUFACTURER_MODELS({
        manufacturer: this.manuId
      })
      if (this.value) {
        const model = this.models.find(item => item.modId === this.value)
        this.$emit('update:modName', model?.ModelName || '')
      }
    },
    ...mapActions({
      GET_MANUFACTURER_MODELS: 'Catalog/GET_MANUFACTURER_MODELS'
    }),
    onChange (e) {
      this.$emit('input', +e.target.value)
      const model = this.models.find(item => item.modId === +e.target.value)
      this.$emit('input', +e.target.value)
      this.$emit('update:modName', model?.ModelName || '')
    }
  }
}
</script>
