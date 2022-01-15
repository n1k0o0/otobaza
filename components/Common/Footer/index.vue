<template lang="pug">
  footer
    .footer-details
      .container
        .row
          .col-12.col-sm-2.mbw12
            n-link.flogo(to='/')
              img(alt='logo' src='/css/icons/logo.svg')
          .col-12.col-sm-4.mbw12
            FooterMenu
          .col-12.col-sm-4.mbw12
            NewsLetter
              FooterSocials.footer-socials
          .col-12.col-sm-2.mbw12
            .play-app
              a(href="https://apps.apple.com/us/app/facebook/id1528493953" class='play-app1' target="_blank")
                img(alt='' src='/css/icons/app_store_badge.svg')
              a(:href='androidLink' target="_blank")
                img(alt='' src='/css/icons/google_play_badge.svg')
    .footer-bottom
      .container
        .flex
          p.cright {{ $t('footer-copy',{ year:new Date().getFullYear() } ) }}
          FooterSocials
</template>
<script>
import FooterMenu from '@/components/Common/FooterMenu'
import FooterSocials from '@/components/Common/FooterSocials'
import NewsLetter from '@/components/Common/NewsLetter'

export default {
  name: 'Footer',
  components: { FooterSocials, FooterMenu, NewsLetter },
  computed: {
    androidLink () {
      return `https://play.google.com/store/apps/details?id=com.otobaza.app&hl=${this.$i18n.locale}`
    }
  }
}
</script>
