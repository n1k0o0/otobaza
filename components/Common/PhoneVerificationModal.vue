import Swal from "sweetalert2"
<template>
  <div
    tabindex="0"
    @keydown.esc="escPress"
  >
    <div
      id="verificationModal"
      :aria-hidden="!isOpened"
      aria-labelledby="verificationModalLabel"
      class="modal fade"
      :class="{'show': isOpened}"
      role="dialog"
      style="display:block"
      tabindex="-1"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="verificationModalLabel" class="modal-title">
              {{ $t('enter_verification') }}
            </h5>
            <button
              aria-label="Close"
              class="close"
              data-dismiss="modal"
              type="button"
              @click.prevent="closeModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="verification-txt">
              {{ $t('verification_txt', {code: phoneNumber}) }}
            </div>
            <ClientOnly>
              <ValidationObserver
                v-slot="{ invalid,handleSubmit }"
                tag="div"
              >
                <form @submit.prevent="handleSubmit(sendOtp)">
                  <ValidationProvider
                    v-slot="{errors}"
                    name="otp"
                    rules="required|otp"
                  >
                    <FormInput
                      id="otp"
                      v-model="otp"
                      :invalid="!!errors[0]"
                      :placeholder="$t('enter_verification')"
                      title
                      type="number"
                    >
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </FormInput>
                  </ValidationProvider>
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
                        {{ $t('for_resend_please_wait', {time}) }}
                      </template>
                    </CountDownTimer>
                  </div>
                  <div class="text-center">
                    <button
                      class="verification-sign"
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

import { mapMutations, mapActions } from 'vuex'
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
      otp: '',
      loading: false
    }
  },
  computed: {
    phoneNumber () {
      const str = this.phone
      return str.replace(str.substring(0, 9), '***')
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
