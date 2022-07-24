<template>
  <div class="container mh60vh">
    <HomeSearch />
    <Banners />
    <Faq />
  </div>
</template>

<script>
import HomeSearch from '@/components/Search/HomeSearch'
import Banners from '@/components/Common/Index/Banners'
import Faq from '@/components/Common/Faq'

export default {
  layout: 'main',
  name: 'Home',
  components: { HomeSearch, Banners, Faq }
}
</script>

<style scoped lang="scss">
.container {
  align-items: center !important;
  display: grid !important;
}
</style>
