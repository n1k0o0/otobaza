<template lang="pug">
  footer
    .footer-details
      .container
        .row
          .col-6.col-sm-6.col-lg-2
            n-link.flogo(to='/')
              img(alt='logo' src='/css/icons/logo.svg')
          .col-6.col-sm-6.col-lg-2.mb-4
            .play-app
              a(href="https://apps.apple.com/us/app/facebook/id1528493953" class='play-app1' target="_blank")
                img(alt='ios' src='img/header/ios-xl.png')
              a(:href='androidLink' target="_blank")
                img(alt='android' src='img/header/android-xl.png')
          .col-12.col-sm-8.mbw12
            FooterMenu

          .col-12.col-sm-12.mbw12.footer-subscribe
            NewsLetter
              FooterSocials.footer-socials

    .footer-bottom
      .container
        .flex
          p.cright {{ $t('footer-copy',{ year:new Date().getFullYear() } ) }}
          FooterSocials
    .footer-bug
      n-link(:to="localePath({name: 'contact'})")
        img(alt='ios' src='img/footer/bug.png')
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
