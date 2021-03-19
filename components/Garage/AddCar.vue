<template lang="pug">
  .container.plr00
    .setting-cover
      ClientOnly
        ValidationObserver(v-slot="{ handleSubmit, invalid }" slim tag="div")
          form(@submit.prevent="handleSubmit(onSubmit)")
            .setting-border
              .row.setting-form
                .col-12.col-sm-12
                  h4.setting-title {{isEditing ? $t('editing_car') : $t('add_car')}}

                .col-12.col-sm-8
                  ManufacturerSelect(
                    v-model="form.manu_id"
                    :manu-name.sync="form.manu_name"
                  )
                .col-12.col-sm-8
                  ModelSelect(
                    v-model="form.mod_id"
                    :manu-id="form.manu_id"
                    :mod-name.sync="form.mod_name"
                    v-if="form.manu_id"
                  )
                .col-12.col-sm-8
                  CarSelect(
                    v-model="form.car_id"
                    :model-id="form.mod_id"
                    :car-name.sync="form.car_name"
                    v-if="form.mod_id"
                  )
                .col-12.col-sm-8
                  FormInputElement(
                    class="form_group"
                    v-model="form.car_year"
                    name="car_year"
                    rules="required"
                    type="number"
                    required
                    :label="$t('validation.names.car_year')"
                  )
                .col-12.col-sm-8
                  FormInputElement(
                    class="form_group"
                    v-model="form.hp"
                    name="hp"
                    type="number"
                    rules="required"
                    required
                    :label="$t('validation.names.hp')"
                  )
                .col-12.col-sm-8
                  FormInputElement(
                    class="form_group"
                    v-model="form.milage"
                    type="number"
                    name="milage"
                    rules="required"
                    required
                    :label="$t('validation.names.milage')"
                  )
                .col-12.col-sm-8
                  TransmissionSelect(
                    v-model="form.transmission"
                  )
                .col-12.col-sm-12
                  .setting-btns
                    button.setting-submit(:disabled='loading' :class="{disabled: loading}", type='submit')
                      i.fa.fa-spinner.fa-spin(v-if='loading')
                      |
                      | {{isEditing ? $t('save') : $t('add')}}
                    button.setting-back(type='button' v-if="isEditing" @click="onCancel") {{ $t('go_back') }}
</template>
<script>
import CarSelect from '@/components/Common/CarSelect'
import FormInputElement from '@/components/Common/FormInputElement'
import FormInputGender from '@/components/Common/FormInputGender'
import ManufacturerSelect from '@/components/Common/ManufacturerSelect'
import ModelSelect from '@/components/Common/ModelSelect'
import SocialAccounts from '@/components/Common/SocialAccounts'
import TransmissionSelect from '@/components/Common/TransmissionSelect'

import { localize } from 'vee-validate'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AddCar',
  components: { TransmissionSelect, CarSelect, ModelSelect, ManufacturerSelect, SocialAccounts, FormInputGender, FormInputElement },
  props: {
    isEditing: {
      type: Boolean,
      default: false
    },
    car: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      loading: false,
      form: {
        manu_id: '',
        manu_name: '',
        mod_id: '',
        mod_name: '',
        car_id: '',
        car_name: '',
        car_year: '',
        hp: '',
        milage: '',
        transmission: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      manufacturers: 'Catalog/manufacturersByLogo'
    })
  },
  async beforeMount () {
    localize(this.$i18n.locale)
    if (this.car) {
      this.form = this.car
    }
  },
  methods: {
    ...mapActions({
      ADD_CAR: 'User/ADD_CAR',
      GET_CATALOG_MANUFACTURERS: 'Catalog/GET_CATALOG_MANUFACTURERS'
    }),
    onCancel () {
      if (this.isEditing) {
        this.$emit('cancelEdit')
      } else {
        this.$emit('cancel')
      }
    },
    async addCarSubmit (carId) {
      this.loading = true
      await this.ADD_CAR({
        data: this.form,
        id: carId || null
      }).then(() => {
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
          text: carId ? this.$t('successfully_saved') : this.$t('successfully_added')
        })
        if (this.isEditing) {
          this.$emit('cancelEdit')
        } else {
          this.$emit('cancel')
        }
      }).catch(() => {
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          text: this.$t('failed_retry')
        })
      }).finally(() => {
        this.loading = false
      })
    },
    async onSubmit () {
      if (this.isEditing) {
        await this.addCarSubmit(this.car.id)
      } else {
        await this.addCarSubmit()
      }
    }
  }
}
</script>
