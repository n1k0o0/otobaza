<template lang="pug">
  .container
    .cars
      template(v-if="$fetchState.pending")
        CarItemPlaceholder
        CarItemPlaceholder
        CarItemPlaceholder
      template(v-else-if="$fetchState.error")
        .error-message.mt-4
          i.fa.fa-info-circle
          span {{$fetchState.error.message}}
      template(v-else)
        template(v-if="my_cars && my_cars.length")
          GarageCar(v-for="car in my_cars" :key="car.id" :car="car")
        template(v-else)
          .error-message.mt-4
            i.fa.fa-info-circle
            span {{ $t('no_car') }}
</template>
<script>
import GarageCar from '@/components/Catalog/GarageCar'
import CarItemPlaceholder from '@/components/Placeholders/CarItemPlaceholder'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MyCars',
  components: { GarageCar, CarItemPlaceholder },
  fetchOnServer: false,
  async fetch () {
    await this.GET_MY_CARS()
  },
  computed: {
    ...mapGetters({
      my_cars: 'User/my_cars'
    })
  },
  methods: {
    ...mapActions({
      GET_MY_CARS: 'User/GET_MY_CARS'
    })
  }
}
</script>
