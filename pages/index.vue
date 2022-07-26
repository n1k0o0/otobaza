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
  components: { HomeSearch, Banners, Faq },
  data () {
    return {
      title: {
        az: 'Otobaza.com - Ehtiyat hissələri burada',
        ru: 'Otobaza.com - Запчасти здесь',
        en: 'Otobaza.com - Spare parts here',
        tr: 'Otobaza.com - Yedek parçalar burada'
      }
    }
  },
  head () {
    const title = this.title[this.$i18n.locale]

    return {
      title: `${title} `
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  align-items: center !important;
  display: grid !important;
}
</style>
