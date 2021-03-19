<template lang="pug">
  .form-group
    template(v-if="$fetchState.pending")
      div
        label(for='choose-motor') {{ $t('choose_motor') }}
        div
          i(class="fa fa-spin fa-spinner")
    template(v-else-if="$fetchState.error")
      div
        button(type="button" @click="$fetch" class="btn")
          i(class="fa fa-refresh")
    template(v-else)
      div.choose-motor
        label(for='choose-motor') {{ $t('choose_motor') }}
        select#choose-motor.form-control(name='choose-motor' v-model="carId")
          option(:value="type.carid" v-for="type in motor_types" :key="type.carid") {{type.carName}}, {{type.powerHpFrom}}
</template>
<script>
import { getUrlSlug, setNuxtLink } from '@/utils'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PartsMotor',
  async fetch () {
    const car = this.parts?.brand?.ModelId
    if (!car) return
    await this.GET_MOTOR_TYPES({
      car
    })
  },
  data () {
    return {
      selectedCarId: null
    }
  },
  computed: {
    ...mapGetters({
      parts: 'Catalog/parts',
      motor_types: 'Catalog/motor_types'
    }),
    carId: {
      get () {
        const { page, model, assembly, car, name } = getUrlSlug(this.$route.params.slug, 'assembly')
        if (!(page && model && assembly && car && name)) return null
        return car
      },
      set (id) {
        const { page, model, assembly, car, name } = getUrlSlug(this.$route.params.slug, 'assembly')
        if (!(page && model && assembly && car && name)) return null
        const data = {
          page: 1,
          model,
          car: id,
          assembly,
          name
        }
        this.$router.push(setNuxtLink(this, 'assembly', data))
      }

    }
  },
  methods: {
    ...mapActions({
      GET_MOTOR_TYPES: 'Catalog/GET_MOTOR_TYPES'
    })
  }
}
</script>
