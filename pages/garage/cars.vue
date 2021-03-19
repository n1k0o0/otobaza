<template lang="pug">
  .container.profile-grg-cover
    .mcontainer.mh60vh
      GarageHeader
        a.add_new_car(href='#' @click.prevent="add" v-if="!isAddCar") + {{ $t('add_car') }}
        a.add_new_car(href='#' @click.prevent="cancel" v-else) {{ $t('go_back') }}
      GarageTabs(:active-tab="1")
      transition(name="page-fade" mode="out-in")
        component(:is="page" @cancel="cancel")
</template>
<script>
import GarageHeader from '@/components/Profile/GarageHeader'
import GarageTabs from '@/components/Profile/GarageTabs'
import MyCars from '@/components/Garage/MyCars'
import AddCar from '@/components/Garage/AddCar'
export default {
  name: 'GarageCars',
  components: { MyCars, AddCar, GarageTabs, GarageHeader },
  middleware: 'authorized',
  layout: 'pages',
  data () {
    return {
      page: 'MyCars'
    }
  },
  computed: {
    isAddCar () {
      return this.page === 'AddCar'
    }
  },
  methods: {
    add () {
      this.page = 'AddCar'
    },
    cancel () {
      this.page = 'MyCars'
    }
  }
}
</script>
