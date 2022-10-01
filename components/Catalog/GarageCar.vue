<template lang="pug">
  div
    template(v-if="isEditing")
      .cars-item
        AddCar(is-editing :car="car" @cancelEdit="onCancelEdit")
    template(v-else)
      .cars-item(:class="{'Loading': loading}")
        transition(name="fade")
          .loading(v-if="loading")
            i.fa.fa-spin.fa-spinner
        .cars-image
          img(src='/img/car-image.png', alt='car')
        .cars-details
          .cars-dtop
            h4.cars-dtop-tt
              | {{car.manu_name}}
              p {{car.car_name}}
            a.cars-dtop-edit.mr-2(href='#' @click.prevent="goToCar(car)") {{ $t('show_parts') }}
            a.cars-dtop-edit(href='#' @click.prevent="editCar(car.id)") {{ $t('edit') }}
            a.cars-dtop-edit.remove(href='#' @click.prevent="deleteCar(car.id)")
              i(:class="deleting ? 'fa fa-spin fa-spinner' : 'fa fa-times'")
              span(v-if="!deleting") {{ $t('remove') }}
          .cars-dbottom
            .cars-dbottom-item
              strong {{ $t('car_year') }}
              p {{car.car_year}}
            .cars-dbottom-item
              strong {{ $t('hp') }}
              p {{car.hp}}
            .cars-dbottom-item
              strong {{ $t('milage') }}
              p {{car.milage}} km
            .cars-dbottom-item
              strong {{ $t('transmission') }}
              p {{$t(`car.transmission.${car.transmission}`)}}
</template>
<script>
import AddCar from '@/components/Garage/AddCar'
import { mapActions } from 'vuex'

export default {
  name: 'GarageCar',
  components: { AddCar },
  props: {
    car: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isEditing: false,
      loading: false,
      deleting: false
    }
  },
  methods: {
    ...mapActions({
      DELETE_CAR: 'User/DELETE_CAR',
      GET_MY_CARS: 'User/GET_MY_CARS'
    }),
    async editCar (id) {
      this.loading = true
      setTimeout(() => {
        this.isEditing = true
        this.loading = false
      }, 1000)
    },
    goToCar (car) {
      this.$router.push(this.localePath({
        name: 'lp-brand-slug',
        params: {
          brand: car.manu_id,
          slug: car.manu_name
        }
      }))
    },
    onCancelEdit () {
      this.isEditing = false
    },
    async deleteCar (id) {
      this.$swal.fire({
        title: this.$t('sure_delete'),
        text: this.$t('not_undo'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: this.$t('yes'),
        cancelButtonText: this.$t('no')
      }).then((result) => {
        if (result.value) {
          this.deleting = true
          this.DELETE_CAR({ id }).then(response => {
            this.$swal.fire({
              position: 'top',
              toast: true,
              icon: 'success',
              timer: 3000,
              timerProgressBar: true,
              text: response.message
            })
            this.GET_MY_CARS()
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
            this.deleting = false
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
.Loading {
  position: relative;
  opacity: 0.8;
  transition: all 0.1s linear;

  .cars-image, .cars-details {
    user-select: none;
  }

  .cars-image *, .cars-details * {
    user-select: none;
    pointer-events: none;
  }

  .loading {
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #4DA6FF;
    filter: none;
    -webkit-filter: none;
  }
}
</style>
