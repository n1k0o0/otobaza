<template>
  <div class="header-menu">
    <div class="container">
      <div class="row mdetails">
        <div class="col-5 col-sm-4">
          <n-link class="flogo" :to="localePath('index')">
            <img alt="logo" src="/css/icons/logo.svg" />
          </n-link>
        </div>

        <div class="col-7 col-sm-8">
          <div class="hbflex">
            <div class="mmenu mmenu_hide" :class="{transform00:isMobileMenuShow}">
              <div
                class="menu-toggle2 open-open"
                :class="{'open': isMobileMenuShow}"
                @click.prevent="toggleMobileMenu"
              >
                <i class="fa fa-close"></i>
              </div>

              <Login v-if="!$auth.loggedIn" />
              <LoggedIn v-else />
              <!--              <MenuItems />-->
            </div>
            <div class="position-relative">
              <CartLink />
            </div>
            <div class="position-relative">
              <div class="dropdown langdrop">
                <button
                  id="droplang"
                  aria-expanded="false"
                  aria-haspopup="true"
                  class="btn dropdown-toggle"
                  data-toggle="dropdown"
                  type="button"
                >
                  <img alt="Flag" :src="`img/header/${currentLang.toLowerCase()}.png`" />{{ currentLang }}
                </button>
                <div aria-labelledby="dropdownlang" class="dropdown-menu">
                  <n-link
                    v-for="lang in langs"
                    :key="lang"
                    class="dropdown-item"
                    :class="{'active':currentLang === lang}"
                    :to="changeLanguage(lang)"
                  >
                    {{ lang }}
                  </n-link>
                </div>
              </div>
            </div>
            <div
              id="mobile-menu"
              class="menu-toggle1"
              :class="{'open': isMobileMenuShow}"
              @click.prevent="toggleMobileMenu"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartLink from '@/components/Catalog/CartLink'
// import Currency from '@/components/Common/Header/Menu/Currency'
import LoggedIn from '@/components/Common/Header/Menu/LoggedIn'
import Login from '@/components/Common/Header/Menu/Login'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HeaderMenu',
  components: { CartLink, LoggedIn, Login },
  props: {
    settings: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      langs: ['AZ', 'RU', 'EN', 'TR']
    }
  },
  computed: {
    ...mapGetters({
      isMobileMenuShow: 'UI/isMobileMenuShow'
    }),
    currentLang () {
      return this.$i18n.locale.toUpperCase()
    }
  },
  methods: {
    ...mapMutations({
      TOGGLE_MOBILE_MENU: 'UI/TOGGLE_MOBILE_MENU'
    }),
    toggleMobileMenu () {
      this.TOGGLE_MOBILE_MENU()
    },
    changeLanguage (lang) {
      return this.switchLocalePath(lang.toLowerCase())
    }
  }
}
</script>
