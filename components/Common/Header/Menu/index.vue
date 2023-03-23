<template>
  <div class="header-menu">
    <div class="container">
      <div class="row ">
        <div class="col-4 col-sm-4 pr-0">
          <nuxt-link class="" :to="localePath('index')">
            <img alt="logo" src="/css/icons/logo.svg" />
          </nuxt-link>
        </div>

        <div class="col-8 col-sm-8 pl-0 ms-unset">
          <div class="hbflex">
            <!--            <div class="position-relative mr-2">
              <div class="dropdown langdrop">
                <button
                  id="droplang"
                  aria-expanded="false"
                  aria-haspopup="true"
                  class="btn dropdown-toggle lang_btn"
                  data-toggle="dropdown"
                  type="button"
                >
                  <img alt="Flag" src="/css/icons/lang.svg" />{{ currentLang }}
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
            </div>-->

            <div class="position-relative mr-2 mr-md-4 cart-header-menur">
              <CartLink />
            </div>
            <div class="position-relative mr-2 mr-md-4 cart-header-menur">
              <FavoriteLink />
            </div>

            <div class="mmenu mmenu_hide" :class="{transform00:isMobileMenuShow}">
              <div
                class="menu-toggle2 open-open"
                :class="{'open': isMobileMenuShow}"
                @click.prevent="toggleMobileMenu"
              >
                <i class="fa fa-close"></i>
              </div>

              <div class="mobile_menu">
                <Register v-if="!$auth.loggedIn" />

                <Login v-if="!$auth.loggedIn" />

                <LoggedIn v-else />
              </div>

              <!--              <MenuItems />-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile_footer_menu">
      <div class="mobile_footer_menu_wrapper">
        <span class="mobile_menu_item" @click="goToPage('index')">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9931 3.19968L13.9934 3.19986L19.7533 7.2298C19.7533 7.22982 19.7533 7.22984 19.7534 7.22986C20.2226 7.55833 20.6668 8.0969 20.9943 8.72408C21.3217 9.35129 21.51 10.0244 21.51 10.6002V17.3802C21.51 19.654 19.6639 21.5002 17.39 21.5002H6.61C4.33755 21.5002 2.49 19.6454 2.49 17.3702V10.4702C2.49 9.93574 2.66039 9.29667 2.95858 8.69105C3.25663 8.0857 3.66107 7.55706 4.08752 7.22443L4.08763 7.22435L9.09625 3.31542C9.09647 3.31525 9.09668 3.31508 9.0969 3.31491C10.4337 2.27962 12.6028 2.22559 13.9931 3.19968Z"
              fill="#0086C9"
              opacity="0.4"
              stroke="#0086C9"
            />
            <path
              d="M12 18.25C11.8661 18.25 11.75 18.1339 11.75 18V15C11.75 14.8661 11.8661 14.75 12 14.75C12.1339 14.75 12.25 14.8661 12.25 15V18C12.25 18.1339 12.1339 18.25 12 18.25Z"
              fill="#0086C9"
              stroke="#0086C9"
            />
          </svg>
          {{ $t('home') }}
        </span>
        <span class="mobile_menu_item" @click="goToPage('cart')">
          <CartLink :header="false" />
          {{ $t('my_cart') }}
        </span>
        <span class="mobile_menu_item" @click="goToPage('favorites')">
          <FavoriteLink :header="false" />
          {{ $t('favorites') }}
        </span>
        <div class="mobile_menu_item">
          <template v-if="!$auth.loggedIn">
            <div class="user-profile">
              <div
                id="profile-dropdown"
                aria-expanded="false"
                aria-haspopup="true"
                class="user-profile-name"
                data-toggle="dropdown"
              >
                <div class="user-profile-img">
                  <img alt="user-profile" src="/css/icons/profile-circle.svg" />
                </div>
                <span>{{ $t('profile') }}</span>
              </div>
              <div aria-labelledby="profile-dropdown" class="dropdown-menu">
                <div class="d-flex flex-column">
                  <span class="py-2 px-4" @click="TOGGLE_MOBILE_MENU(true)">
                    {{ $t('login') }}
                  </span>
                  <span class="py-2 px-4" @click="TOGGLE_REGISTER(true)">
                    {{ $t('registration') }}
                  </span>
                </div>
              </div>
            </div>
          </template>
          <LoggedIn v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartLink from '@/components/Catalog/CartLink'
import FavoriteLink from '@/components/Used/FavoriteLink'
// import Currency from '@/components/Common/Header/Menu/Currency'
import LoggedIn from '@/components/Common/Header/Menu/LoggedIn'
import Login from '@/components/Common/Header/Menu/Login'
import Register from '@/components/Common/Header/Menu/Register'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HeaderMenu',
  components: { CartLink, LoggedIn, Login, Register, FavoriteLink },
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
      TOGGLE_MOBILE_MENU: 'User/TOGGLE_LOGIN',
      TOGGLE_REGISTER: 'User/TOGGLE_REGISTER'
    }),
    toggleMobileMenu () {
      this.TOGGLE_MOBILE_MENU()
    },
    changeLanguage (lang) {
      return this.switchLocalePath(lang.toLowerCase())
    },
    async goToPage (page) {
      const currentName = this.$router.currentRoute.name.split('__')[0]

      if (page === currentName) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        await this.$router.push(this.localePath({ name: page }))
      }
    }
  }
}
</script>

<style lang="scss">
.mobile_footer_menu {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;
  z-index: 99;
  display: none;

  &_wrapper {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    justify-items: center;
    align-content: center;
  }

  .mobile_menu_item {
    display: grid;
    justify-items: center;
    font-family: 'SF Pro Display', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 12px;
    text-align: center;

    color: #98A2B3;
  }
}
</style>
