<template>
  <div>
    <Header />
    <transition mode="out-in" name="page-fade">
      <nuxt :key="$route.fullPath" />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Common/Footer/index'
import Header from '@/components/Common/Header/index'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://otobaza.com' + this.$route.path
        }
      ]
    }
  }
}
</script>
