<template>
  <div class="container mh60vh">
    <HomeSearch />
  </div>
</template>

<script>
import HomeSearch from '@/components/Search/HomeSearch'

export default {
  layout: 'main',
  name: 'Home',
  components: { HomeSearch }
}
</script>

<style scoped lang="scss">
.container {
  align-items: center !important;
  display: grid !important;
}
</style>
