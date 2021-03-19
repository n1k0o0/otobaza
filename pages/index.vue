<template>
  <div class="container mh60vh">
    <HomeCategory />
    <HomeHowTo />
  </div>
</template>

<script>
import HomeCategory from '@/components/Common/Index/HomeCategory'
import HomeHowTo from '@/components/Common/Index/HomeHowTo'
export default {
  layout: 'main',
  name: 'Home',
  components: { HomeHowTo, HomeCategory }
}
</script>
