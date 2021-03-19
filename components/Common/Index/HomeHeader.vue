<template>
  <div class="home-header">
    <div class="home-header-layer home_head_layer">
      <div class="container">
        <div class="home-header-details">
          <div class="hhtop_flex">
            <h1 class="max_670">
              {{ $t('header_top_info') }}
            </h1>
            <n-link class="hh_dtls" :to="localePath('kataloq-mashin-kataloqu')">
              {{ $t('catalog') }}
            </n-link>
          </div>
          <div class="hhtop_play">
            <div class="play-app">
              <a
                class="play-app1"
                href="https://apps.apple.com/us/app/facebook/id1528493953"
                target="_blank"
              ><img alt="" src="/css/icons/app_store_badge.svg" /></a>
              <a :href="androidLink" target="_blank"><img alt="" src="/css/icons/google_play_badge.svg" /></a>
            </div>
          </div>
        </div>
        <HomeSearch />
      </div>
    </div>
    <!-- starts main search result // show this when click main_search_js -->
    <div class="fixed-search-result">
    </div>
    <!-- ends main search result -->
  </div>
</template>
<script>
import HomeSearch from '@/components/Common/Index/HeaderSearch'
export default {
  name: 'HomeHeader',
  components: { HomeSearch },
  computed: {
    androidLink () {
      return `https://play.google.com/store/apps/details?id=com.otobaza.app&hl=${this.$i18n.locale}`
    }
  }
}
</script>
