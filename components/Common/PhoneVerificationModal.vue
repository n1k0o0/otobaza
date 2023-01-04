<template>
  <div
    tabindex="0"
    @keydown.esc="escPress"
  >
    <div
      id="verificationModal"
      :aria-hidden="!isOpened"
      aria-labelledby="verificationModalLabel"
      class="modal fade dropotp"
      :class="{'show': isOpened}"
      role="dialog"
      style="display:block"
      tabindex="-1"
    >
      <div class="dropdown-menu show">
        <div class="log-items-header">
          <h3 class="d-inline-block">
            {{ $t('enter_verification') }}
          </h3>

          <div class=" float-right">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              @click="closeModal"
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
            <h3 class="text-center">
              OTP
            </h3>
            <div class="verification-txt">
              {{ $t('verification_txt', { code: phoneNumber }) }}
            </div>
            <div v-if="!showTimer" class="no-receive">
              {{ $t('verificationSmsNotReceived') }}? <a href="#" @click.prevent="resendOtp">{{ $t('resend_otp') }}.</a>
            </div>
            <div v-else class="no-receive">
              <CountDownTimer
                v-if="showTimer"
                :show.sync="showTimer"
                :time-limit="timerLimit"
              >
                <template slot-scope="{ time }">
                  {{ $t('for_resend_please_wait', { time }) }}
                </template>
              </CountDownTimer>
            </div>

            <ClientOnly>
              <ValidationObserver
                v-slot="{ invalid,handleSubmit }"
                tag="div"
              >
                <form class="mt-4" @submit.prevent="handleSubmit(sendOtp)">
                  <ValidationProvider
                    v-slot="{errors}"
                    name="otp1"
                    rules="required|otp"
                  >
                    <FormInput
                      id="otp"
                      v-model="otpParts.first"
                      :invalid="!!errors[0]"
                      :limit="1"
                      placeholder="0"
                      title
                    >
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </FormInput>
                  </ValidationProvider>
                  <ValidationProvider
                    v-slot="{errors}"
                    name="otp2"
                    rules="required|otp"
                  >
                    <FormInput
                      id="otp"
                      v-model="otpParts.second"
                      :invalid="!!errors[0]"
                      :limit="1"
                      placeholder="0"
                      title
                    >
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </FormInput>
                  </ValidationProvider>
                  <ValidationProvider
                    v-slot="{errors}"
                    name="otp3"
                    rules="required|otp"
                  >
                    <FormInput
                      id="otp"
                      v-model="otpParts.third"
                      :invalid="!!errors[0]"
                      :limit="1"
                      placeholder="0"
                      title
                    >
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </FormInput>
                  </ValidationProvider>
                  <ValidationProvider
                    v-slot="{errors}"
                    name="otp4"
                    rules="required|otp"
                  >
                    <FormInput
                      id="otp"
                      v-model="otpParts.fourth"
                      :invalid="!!errors[0]"
                      :limit="1"
                      placeholder="0"
                      title
                    >
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </FormInput>
                  </ValidationProvider>

                  <div class="text-center submit">
                    <button
                      class="btn-new w-100 mt-4"
                      :disabled="invalid"
                      type="submit"
                    >
                      <i v-if="loading" class="fa fa-spinner fa-spin"></i> {{ $t('verify_otp') }}
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" :class="{'show': isOpened}"></div>
  </div>
</template>
<script>
import FormInput from '@/components/Common/FormInput'
import CountDownTimer from '@/components/CountDownTimer'

import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'PhoneVerificationModal',
  components: { CountDownTimer, FormInput },
  props: {
    token: {
      type: String,
      default: null
    },
    phone: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showTimer: false,
      timerLimit: 120,
      loading: false,
      otpParts: {
        first: '',
        second: '',
        third: '',
        fourth: ''
      }
    }
  },
  computed: {
    phoneNumber () {
      const str = this.phone
      return str.replace(str.substring(0, 9), '***')
    },
    otp () {
      return (Object.values(this.otpParts)).join('')
    }
  },
  watch: {
    isOpened (val) {
      if (val) {
        // eslint-disable-next-line no-undef
        $('#otpinput input').focus()
        this.showTimer = true
      }
    }
  },
  methods: {
    ...mapMutations({
      SHOW_OTP_VERIFICATION_MODAL: 'UI/SHOW_OTP_VERIFICATION_MODAL',
      TOGGLE_OTP_VERIFICATION_MODAL: 'UI/TOGGLE_OTP_VERIFICATION_MODAL',
      RESEND_OTP: 'User/RESEND_OTP'
    }),
    ...mapActions({
      SEND_OTP: 'User/SEND_OTP',
      RESEND_OTP: 'User/RESEND_OTP'
    }),
    resendOtp () {
      this.RESEND_OTP({
        token: this.token
      }).then(response => {
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'success',
          timer: 5000,
          timerProgressBar: true,
          text: response?.data?.message || 'Göndərildi!'
        })
        this.showTimer = true
      }).catch(error => {
        const { message: text } = error.response.data
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          text
        })
      })
    },
    escPress () {
      if (this.isOpened) {
        this.SHOW_OTP_VERIFICATION_MODAL(false)
      }
    },
    closeModal () {
      this.TOGGLE_OTP_VERIFICATION_MODAL()
    },
    sendOtp () {
      this.loading = true
      this.SEND_OTP({
        code: +this.otp,
        token: this.token
      }).then(response => {
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'success',
          timer: 5000,
          timerProgressBar: true,
          text: this.$t('successfullyVerified'),
          onClose: () => {
            this.$emit('verified')
          }
        })
      }).catch(error => {
        const { message: text } = error.response.data
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          text
        })
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
