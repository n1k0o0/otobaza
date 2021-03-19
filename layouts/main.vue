<template>
  <div>
    <Header />
    <HomeHeader />
    <transition mode="out-in" name="page-fade">
      <nuxt :key="$route.fullPath" />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Common/Footer/index'
import Header from '@/components/Common/Header/index'
import HomeHeader from '@/components/Common/Index/HomeHeader'
export default {
  name: 'MainLayout',
  components: { Header, Footer, HomeHeader }
}
</script>
