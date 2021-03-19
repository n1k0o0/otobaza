<template>
  <div class="header-menu">
    <div class="container">
      <div class="row mdetails">
        <div class="col-3 col-sm-3">
          <n-link class="flogo" :to="localePath('index')">
            <img alt="logo" src="/css/icons/logo.svg" />
          </n-link>
        </div>

        <div class="col-9 col-sm-9">
          <div class="hbflex">
            <div class="mmenu mmenu_hide" :class="{transform00:isMobileMenuShow}">
              <div
                class="menu-toggle2 open-open"
                :class="{'open': isMobileMenuShow}"
                @click.prevent="toggleMobileMenu"
              >
                <i class="fa fa-close"></i>
              </div>
              <Currency :currencies="settings.currencies" />
              <Login v-if="!$auth.loggedIn" />
              <LoggedIn v-else />
              <MenuItems />
            </div>
            <div class="position-relative">
              <CartLink />
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
import Currency from '@/components/Common/Header/Menu/Currency'
import LoggedIn from '@/components/Common/Header/Menu/LoggedIn'
import Login from '@/components/Common/Header/Menu/Login'
import MenuItems from '@/components/Common/Header/Menu/MenuItems'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'HeaderMenu',
  components: { CartLink, LoggedIn, MenuItems, Login, Currency },
  props: {
    settings: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters({
      isMobileMenuShow: 'UI/isMobileMenuShow'
    })
  },
  methods: {
    ...mapMutations({
      TOGGLE_MOBILE_MENU: 'UI/TOGGLE_MOBILE_MENU'
    }),
    toggleMobileMenu () {
      this.TOGGLE_MOBILE_MENU()
    }
  }
}
</script>
