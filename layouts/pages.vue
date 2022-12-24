<template>
  <div>
    <Header />
    <transition mode="out-in" name="page-fade">
      <nuxt :key="$route.fullPath" />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Common/Footer/index'
import Header from '@/components/Common/Header/index'

export default {
  name: 'PagesLayout',
  components: {
    Footer,
    Header
  },
  data () {
    return {
      showDownload: true
    }
  },
  computed: {
    link () {
      if (!this.$device.isMobile) return ''

      return this.$device.isIos ? 'https://apps.apple.com/us/app/facebook/id1528493953' : 'https://play.google.com/store/apps/details?id=com.otobaza.app&hl=az'
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
