<template>
  <div>
    <Header />
    <transition mode="out-in" name="page-fade">
      <nuxt :key="$route.fullPath" />
    </transition>
    <Footer />

    <template v-if="isDownload() && showDownload">
      <div class="download_wrap">
        <div class="downloadApp">
          <img alt="" src="img/mobile.png" />
          <div class="downloadApp_header">
            <h6>{{ $t('mobile_app') }}</h6>
            <span @click="close">
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.25L8 8M8 8L1.25 14.75M8 8L14.75 14.75M8 8L14.75 1.25"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </span>
          </div>
          <div class="downloadApp_content text-center">
            <h2>{{ $t('download_app_title') }}</h2>
            <p class="mb-4">
              {{ $t('download_app_text') }}
            </p>
            <a
              class="btn-new-light
            w-100"
              :href="link"
            >
              {{ $t('download_app') }}
              <svg
                fill="none"
                height="14"
                viewBox="0 0 14 14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16699 6.99984H12.8337M12.8337 6.99984L7.00033 1.1665M12.8337 6.99984L7.00033 12.8332"
                  stroke="#344054"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.67"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import Footer from '@/components/Common/Footer/index'
import Header from '@/components/Common/Header/index'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      showDownload: true
    }
  },
  computed: {
    link () {
      if (!this.$device.isMobile) return ''

      return this.$device.isIos ? 'https://play.google.com/store/apps/details?id=com.otobaza.app&hl=az' : 'https://play.google.com/store/apps/details?id=com.otobaza.app&hl=az'
    }
  },
  mounted () {
    if (!this.$device.isMobile) return false

    if (!this.$cookies.get('download-app')) {
      const bodyElement = document.querySelector('body')
      bodyElement.classList.add('overflow-hidden')

      setTimeout(() => {
        this.$cookies.set('download-app', '1', {
          path: '/',
          maxAge: 60 * 60
        })
      }, 300)
    }
  },
  methods: {
    isDownload () {
      if (!this.$device.isMobile) return false
      return !this.$cookies.get('download-app')
    },
    close () {
      this.showDownload = false
      const bodyElement = document.querySelector('body')
      bodyElement.classList.remove('overflow-hidden')
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://otobaza.com' + this.$route.path
        }
      ]
    }
  }
}
</script>
