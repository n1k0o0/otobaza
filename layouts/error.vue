<template>
  <div>
    <Header v-if="!error.isAxiosError" />
    <transition mode="out-in" name="page-fade">
      <component :is="errorPage" :error="error" />
    </transition>
    <Footer v-if="!error.isAxiosError" />
  </div>
</template>
<script>
import Footer from '@/components/Common/Footer/index'
import Header from '@/components/Common/Header/index'
import HomeSearch from '@/components/Common/Index/HeaderSearch'
import error404 from '@/components/Error/404.vue'
import error500 from '@/components/Error/500.vue'

export default {
  name: 'NuxtError',
  components: { Footer, Header, HomeSearch },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage () {
      if (this.error.statusCode === 404) {
        return error404
      }
      return error500
    }
  }
}
</script>
