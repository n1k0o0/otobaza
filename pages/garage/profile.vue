<template lang="pug">
  .container.profile-grg-cover
    .mcontainer.mh60vh
      GarageHeader
        a.user-data-btn(href='#' @click.prevent="edit" v-if="isShowPage") {{ $t('settings') }}
        a.add_new_car(href='#' @click.prevent="cancel" v-else) {{ $t('go_back') }}
      GarageTabs(:active-tab="2")
      transition(name="page-fade" mode="out-in")
        component(:is="page" @cancel="cancel")
</template>
<script>
import GarageHeader from '@/components/Profile/GarageHeader'
import GarageTabs from '@/components/Profile/GarageTabs'
import GarageUserEdit from '@/components/Profile/GarageUserEdit'
import GarageUserShow from '@/components/Profile/GarageUserShow'
export default {
  name: 'Profile',
  components: { GarageUserEdit, GarageUserShow, GarageTabs, GarageHeader },
  middleware: 'authorized',
  layout: 'pages',
  data () {
    return {
      page: 'GarageUserShow'
    }
  },
  computed: {
    isShowPage () {
      return this.page === 'GarageUserShow'
    }
  },
  methods: {
    edit () {
      this.page = 'GarageUserEdit'
    },
    cancel () {
      this.page = 'GarageUserShow'
    }
  }
}
</script>
