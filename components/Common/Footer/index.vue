<template lang="pug">
  footer
    .container
      .footer-details
        .row
          .col-12.col-lg-6
            .row
              .col-12.col-md-6.text-center.text-lg-left
                n-link(to='/')
                  img(alt='logo' src='/css/icons/logo-light.png')
                .socials.justify-content-center.justify-content-lg-start
                  a(href='https://www.facebook.com/otobazacom/' target='_blank')
                    img(alt='logo' src='/css/icons/fb.png')
                  a(href='https://instagram.com/otobaza' target='_blank')
                    img(alt='logo' src='/css/icons/instagram.png')
                  a(href='https://www.linkedin.com/company/otobaza' target='_blank')
                    img(alt='logo' src='/css/icons/linkedin.png')
                p.phone
                  img(alt='logo' src='/css/icons/call.png')
                  | +994 55 677 43 23
                p.email
                  img(alt='logo' src='/css/icons/email.png')
                  | info@otobaza.com
              .col-12.col-md-6
                FooterMenu

          .col-12.col-lg-6.footer_right
            .footer_app
              h6 {{$t('download_app')}}
              p {{$t('header_top_info')}}.

              .app_icons
                a(href="https://apps.apple.com/us/app/facebook/id1528493953" class='' target="_blank")
                  img(alt='ios' src='/css/icons/app_store.png')
                a(:href='androidLink' target="_blank")
                  img(alt='android' src='/css/icons/google_play.png')

            NewsLetter

    hr.footer_hr
    .footer-bottom
      .container
        .flex
          p.cright {{ $t('footer-copy',{ year:new Date().getFullYear() } ) }}
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

<style lang="scss" scoped>

.footer-details {
  background-color: #2C5573;
  padding: 40px 10px;
  border-radius: 16px;
  margin-bottom: 24px;
}

.footer_right {
  @media screen and (max-width: 992px) {
    text-align: center;
  }
}

.socials {
  margin-top: 34px;
  display: flex;
  gap: 45px;
}

p.phone, p.email {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;

  color: #FFFFFF;

  img {
    margin-right: 15px;
  }
}

p.phone {
  margin-top: 35px;
}

p.email {
  margin-top: 24px;
  margin-bottom: 32px;
}

.footer_app {
  margin-bottom: 40px;

  h6 {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #98A2B3;
  }

  .app_icons {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    @media screen and (max-width: 992px) {
      justify-content: center;
    }
  }
}

@media screen and (min-width: 576px) {
  .footer-details {
    padding: 40px 20px;
  }
}

@media screen and (min-width: 768px) {
  .footer-details {
    padding: 40px 50px;
  }
  padding: 40px 50px;
}

@media screen and (min-width: 992px) {
  .footer-details {
    padding: 40px 100px;
  }
}

</style>
