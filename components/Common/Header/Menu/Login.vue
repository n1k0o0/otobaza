<template>
  <div v-click-outside="onClickOutside" class="dropdown droplogin">
    <button
      id="droplogin"
      class="btn-new-light dropdown-toggle login-btn"
      :class="{'show':show}"
      type="button"
      @click="TOGGLE_MOBILE_MENU(!show)"
    >
      {{ $t('login') }}
    </button>
    <transition mode="in-out" name="page-fade">
      <div v-if="show" class="dropdown-menu show">
        <form @submit.prevent="userLogin">
          <div class="log-items">
            <div class="login-form">
              <input
                ref="login"
                v-model="login.phone"
                v-mask="'+994#########'"
                class="form-control"
                :placeholder="$t('username')"
                type="text"
              />
              <fieldset class="password-eye">
                <input
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
                @click.prevent="forgotPassword"
              >{{ $t('forget-password') }}</a>
              <button
                class="log-btn log_btn"
                :disabled="loading || !(login.phone && login.password)"
                type="submit"
                @click.prevent="userLogin"
              >
                <i v-if="loading" class="fa fa-spinner fa-spin"></i> {{ $t('signin') }}
              </button>
            </div>
            <div
              class="divider-hr"
            >
              <span>
                {{ $t('registration') }} <!--Padding is optional-->
              </span>
            </div>
            <div class="log-social">
              <n-link class="log-btn log_btn" :to="localePath('registration')">
                {{ $t('driver') }}
              </n-link>

              <a
                class="log-btn log_btn"
                href="https://seller.otobaza.com/#/register"
                target="_blank"
              >
                {{ $t('store') }}
              </a>
              <!--              <a href="https://seller.otobaza.com/#/register" target="_blank">{{ $t('create_store') }}</a>-->

              <!--              <ul>
                              <li>
                                <a href="#" @click.prevent="doSocial('google')">
                                  <i class="fa fa-google"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" @click.prevent="doSocial('facebook')">
                                  <i class="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" @click.prevent="doSocial('linkedin')">
                                  <i class="fa fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>-->
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Login',
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
