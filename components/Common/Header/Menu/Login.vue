<template>
  <div class="dropdown droplogin pointer">
    <button
      v-if="!footer"
      id="droplogin"
      class="btn-new-light dropdown-toggle login-btn"
      :class="{'show':show}"
      type="button"
      @click="TOGGLE_MOBILE_MENU(!show)"
    >
      {{ $t('login') }}
    </button>
    <span v-else @click="TOGGLE_MOBILE_MENU(!show)">
      {{ $t('login') }}
    </span>
    <transition mode="in-out" name="page-fade">
      <div v-if="show" class="dropdown-menu show">
        <form @submit.prevent="userLogin">
          <div class="log-items">
            <div class="log-items-header">
              <h3 class="d-inline-block">
                {{ $t('login') }}
              </h3>

              <div class="close float-right">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="onClickOutside"
                >
                  <path
                    d="M5.25 5.25L12 12M12 12L5.25 18.75M12 12L18.75 18.75M12 12L18.75 5.25"
                    stroke="#98A2B3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <hr class="m-0" />
            <div class="login-form">
              <fieldset class="mb-3">
                <label for="phone">{{ $t('validation.names.phone') }}</label>
                <input
                  id="phone"
                  ref="login"
                  v-model="login.phone"
                  v-mask="'+994#########'"
                  class="form-control"
                  :placeholder="$t('username')"
                  type="text"
                />
              </fieldset>

              <fieldset class="password-eye">
                <label for="password">{{ $t('validation.names.password') }}</label>
                <input
                  id="password"
                  v-model="login.password"
                  class="form-control"
                  :placeholder="$t('password')"
                  :type="passwordType"
                />
                <span
                  class="fa "
                  :class="eyeClass"
                  @click="showPassword"
                ></span>
                <p
                  v-show="errorMessage"
                  class="text-danger text-sm mb-1"
                  v-html="errorMessage"
                >
                </p>
              </fieldset>

              <a
                class="log-fpassword"
                href="#"
                @mousedown.prevent="forgotPassword"
              >{{ $t('forget-password') }}</a>
              <button
                class="btn-new w-100"
                :disabled="loading || !(login.phone && login.password)"
                type="submit"
                @click.prevent="userLogin"
              >
                <i v-if="loading" class="fa fa-spinner fa-spin"></i> {{ $t('signin') }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>
    <div
      v-if="show"
      class="overlay"
      @click="onClickOutside"
    ></div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Login',
  props: {
    footer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false,
      login: {
        phone: '+994',
        password: ''
      },
      passwordType: 'password',
      eyeClass: 'fa-eye-slash',
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters({
      show: 'User/showLogin'
    })
  },
  watch: {
    show (val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.login.focus()
        })
      }
    }
  },
  methods: {
    ...mapActions({
      SIGN_IN: 'User/SIGN_IN',
      FORGOT_PASSWORD: 'User/FORGOT_PASSWORD'
    }),
    ...mapMutations({
      TOGGLE_MOBILE_MENU: 'User/TOGGLE_LOGIN'
    }),
    onClickOutside () {
      if (this.show === true) {
        this.TOGGLE_MOBILE_MENU(false)
      }
    },
    async forgotPassword () {
      if (this.login.phone && this.login.phone.length === 13) {
        const data = await this.FORGOT_PASSWORD(this.login.phone)
        this.$swal.fire({
          position: 'center',
          toast: false,
          icon: data.success ? 'success' : 'error',
          timer: 5000,
          timerProgressBar: true,
          html: data.message
        })
      } else {
        this.$swal.fire({
          position: 'center',
          toast: false,
          icon: 'error',
          timer: 5000,
          timerProgressBar: true,
          html: this.$t('forgot_phone')
        })
      }
    },
    async doSocial (method) {
      await this.$auth.loginWith(method)
    },
    async userLogin () {
      try {
        this.loading = true
        const { data } = await this.SIGN_IN({
          data: this.login
        })
        const group = data?.data?.group?.id

        if (data?.data?.token && group === 1) {
          await this.$auth.setUserToken(data?.data?.token)
        } else if (data?.data?.token && group === 2) {
          window.location.href = `https://seller.otobaza.com/#/login?token=${data?.data?.token}`
        } else {
          this.$swal.fire({
            position: 'center',
            toast: false,
            icon: 'error',
            timer: 5000,
            timerProgressBar: true,
            html: data?.message || this.$t('system_error')
          })
        }
        this.errorMessage = ''
      } catch (error) {
        const defaultError = 'Yenidən cəhd edin!'
        const errors = error?.response?.data?.errors || error?.response?.data?.message || [defaultError]
        this.errorMessage = typeof errors === 'string' ? (error?.response?.data?.message || defaultError) : Object.values(errors).join('<br>')
        // useFriendlyError(error)
      } finally {
        this.loading = false
      }
    },
    showPassword () {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      this.eyeClass = this.passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'
    }
  }
}
</script>
