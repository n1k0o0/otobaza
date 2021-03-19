<template lang="pug">
  .form-group.form_group.choose-gender(v-if="cars && cars.length")
    label(for='car')
      | {{ $t('automobile') }}
      |
      span.text-danger *
    ValidationProvider(v-slot='{errors,failed}', name='car', rules='required')
      select#car.form-control(
        :value='value'
        @change="onChange"
        name='car'
        :class="{'is-invalid': failed, 'is-valid': !failed && value}"
      )
        option(
          :value='value'
          :disabled="value"
          :selected="value === 0 || value === ''"
        ) {{ $t('select_automobile') }}
        option(
          v-for='car in cars'
          :key='car.carid'
          :value='car.carid'
          :selected="value === car.carid"
        ) {{ car.carName }}
      span.invalid-feedback {{ errors[0] }}
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CarSelect',
  props: {
    carName: {
      type: String,
      default: ''
    },
    modelId: {
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
      model_cars: 'Catalog/model_cars'
    }),
    cars () {
      return this.model_cars?.items || []
    }
  },
  watch: {
    modelId: {
      handler () {
        this.$nextTick(() => {
          this.getModelCars()
        })
      },
      immediate: true
    }
  },
  methods: {
    async getModelCars () {
      await this.GET_MODEL_CARS({
        model: this.modelId
      })
      if (this.value) {
        const car = this.cars.find(item => item.carid === this.value)
        this.$emit('update:carName', car?.carName || '')
      }
    },
    ...mapActions({
      GET_MODEL_CARS: 'Catalog/GET_MODEL_CARS'
    }),
    onChange (e) {
      this.$emit('input', +e.target.value)
      const car = this.cars.find(item => item.carid === +e.target.value)
      this.$emit('update:carName', car?.carName || '')
    }
  }
}
</script>
