<template>
  <div>
    <Header />
    <div class="main-header">
      <div class="container">
        <HomeSearch />
      </div>
    </div>
    <transition mode="out-in" name="page-fade">
      <nuxt :key="$route.fullPath" />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Common/Footer/index'
import Header from '@/components/Common/Header/index'
import HomeSearch from '@/components/Common/Index/HeaderSearch'
export default {
  name: 'PagesLayout',
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://otobaza.com' + this.$route.path
        }
      ]
    }
  },
  components: { Footer, Header, HomeSearch }
}
</script>
