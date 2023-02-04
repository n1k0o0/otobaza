<template>
  <div class="pointer">
    <div class="dropdown droplogin drop_register">
      <button
        v-if="!footer"
        id="droplogin"
        class="btn-new dropdown-toggle login-btn"
        :class="{'show':show}"
        type="button"
        @click="TOGGLE_REGISTER(!show)"
      >
        {{ $t('registration') }}
      </button>
      <span v-else @click="TOGGLE_REGISTER(!show)">
        {{ $t('registration') }}
      </span>
      <transition mode="in-out" name="page-fade">
        <div v-if="show && !userRegisterShow" class="dropdown-menu show">
          <div class="log-items-header">
            <h3 class="d-inline-block">
              {{ $t('registration') }}
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

          <div class="log-items">
            <div class="register_user pointer" @click="TOGGLE_USER_REGISTER(true)">
              <h3>{{ $t('driver') }}</h3>
              <p>Müştəri kimi qeydiyyatdan keç</p>
              <div class="image_wrap">
                <img alt="user" src="/img/header/register_user.png" />
              </div>
            </div>
            <div class="register_store pointer" @click="goToSeller">
              <h3>{{ $t('store') }}</h3>
              <p>Mağaza kimi qeydiyyatdan keç</p>
              <div class="image_wrap">
                <img alt="store" src="/img/header/register_store.png" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="show && userRegisterShow" class="dropdown-menu show">
          <div class="log-items-header">
            <h3 class="d-inline-block">
              {{ $t('driver') }}
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

          <div class="log-items user_register">
            <div class="login-form">
              <fieldset class="mb-3">
                <label for="phone">{{ $t('validation.names.first_name') }}</label>
                <input
                  v-model="register.first_name"
                  class="form-control"
                  :placeholder="$t('username')"
                  type="text"
                />
              </fieldset>

              <fieldset class="mb-3">
                <label for="phone">{{ $t('validation.names.phone') }}</label>
                <input
                  id="phone"
                  v-model="register.phone"
                  v-mask="'+994#########'"
                  class="form-control"
                  :placeholder="$t('validation.names.phone')"
                  type="text"
                />
              </fieldset>

              <fieldset class="password-eye">
                <label for="password">{{ $t('validation.names.password') }}</label>
                <input
                  id="password"
                  v-model="register.password"
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
              <fieldset class="mb-3">
                <div class="custom-control custom-checkbox terms_conditions">
                  <input
                    id="terms-conditions"
                    v-model="register.checked"
                    class="custom-control-input"
                    name="terms-conditions"
                    type="checkbox"
                    @input="confirm = true"
                  /><label class="custom-control-label" for="terms-conditions"></label>
                  <a href="localePath('terms-and-conditions')" target="_blank">
                    {{ $t('terms_conditions') }}
                  </a>
                  <br />
                </div>
              </fieldset>

              <button
                class="btn-new w-100 mt-4"
                :disabled="loading || !(register.phone && register.password && register.checked)"
                type="submit"
                @click.prevent="userRegister"
              >
                <i v-if="loading" class="fa fa-spinner fa-spin"></i> {{ $t('registration') }}
              </button>
            </div>
          </div>
        </div>
      </transition>
      <div
        v-if="show"
        class="overlay"
        @click="onClickOutside"
      ></div>
    </div>

    <PhoneVerificationModal
      :is-opened="isOtpCodeReceived"
      :phone="register.phone"
      :token="registrationResponse && registrationResponse.token"
      @verified="onOtpVerified"
    />
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import { useFriendlyError } from '~/utils'
import PhoneVerificationModal from '~/components/Common/PhoneVerificationModal.vue'

export default {
  name: 'Register',
  components: { PhoneVerificationModal },
  props: {
    footer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      registrationResponse: null,
      loading: false,
      passwordType: 'password',
      eyeClass: 'fa-eye-slash',
      errorMessage: '',
      otpShow: false,
      register: {
        phone: '+994',
        first_name: '',
        password: '',
        checked: false,
        group_id: 1,
        city: 1,
        country: 1,
        is_subscribe: false,
        last_name: 'Magaza',
        price_types: {
          id: 4
        },
        gender: 1
      }
    }
  },
  computed: {
    ...mapGetters({
      isOtpCodeReceived: 'UI/isOtpVerificationModalOpened',
      show: 'User/showRegister',
      userRegisterShow: 'User/userRegisterShow'
    })
  },
  methods: {
    ...mapActions({
      SIGN_IN: 'User/SIGN_IN',
      REGISTER_BUYER: 'User/REGISTER_BUYER'
    }),
    ...mapMutations({
      SHOW_OTP_VERIFICATION_MODAL: 'UI/SHOW_OTP_VERIFICATION_MODAL',
      TOGGLE_REGISTER: 'User/TOGGLE_REGISTER',
      TOGGLE_USER_REGISTER: 'User/TOGGLE_USER_REGISTER'
    }),
    onClickOutside () {
      if (this.show === true) {
        this.TOGGLE_REGISTER(false)
      }
      this.otpShow = false
      this.TOGGLE_USER_REGISTER(false)
    },
    showPassword () {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      this.eyeClass = this.passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'
    },
    goToSeller () {
      window.location.href = 'https://staging-seller.otobaza.com/#/login'
    },
    userRegister () {
      this.REGISTER_BUYER({
        data: this.register
      }).then(response => {
        const { message, is_phone_verified } = response.data
        this.registrationResponse = response.data
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'success',
          timer: 5000,
          timerProgressBar: true,
          text: message,
          onClose: () => {
            if (!is_phone_verified) {
              this.SHOW_OTP_VERIFICATION_MODAL(true)
            }
          }
        })
      }).catch(error => {
        useFriendlyError(error)
      }).finally(() => {
        this.loading = false
      })
    },
    onOtpVerified () {
      this.$auth.setUserToken(this.registrationResponse.token)
      this.$router.push({
        path: this.localePath('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.terms_conditions {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  a {
    color: #0086C9 !important;
  }
}
</style>
