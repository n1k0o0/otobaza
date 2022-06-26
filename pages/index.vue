<template>
  <div class="container mh60vh">
    <HomeSearch />
    <HomeCategory />
    <HomeHowTo />
  </div>
</template>

<script>
import HomeCategory from '@/components/Common/Index/HomeCategory'
import HomeHowTo from '@/components/Common/Index/HomeHowTo'
import HomeSearch from '@/components/Search/HomeSearch'
export default {
  layout: 'main',
  name: 'Home',
  components: { HomeHowTo, HomeCategory, HomeSearch }
}
</script>
