<template lang="pug">
  div
    PhoneVerificationModal(:is-opened='isOtpCodeReceived', :phone='user.phone', :token='registrationResponse', @verified='onOtpVerified' @resend-otp="onResendOtp")
    ClientOnly
      ValidationObserver(v-slot="{ handleSubmit }" slim tag="div")
        form(@submit.prevent="handleSubmit(onSubmit)")
          .setting-border
            .row.update-password
              .col-12.col-sm-12
                h5.up-tt {{ $t('phone_update') }}
              .col-12.form_group
                FormPhoneNumber(
                  v-model="user.phone"
                  :prefix.sync="prefix"
                  :prefixes="['+994']"
                )
              .col-12.col-sm-12
                .setting-btns
                  button.setting-submit(:disabled='loading' :class="{disabled: loading}", type='submit')
                    i.fa.fa-spinner.fa-spin(v-if='loading')
                    |
                    | {{ $t('save') }}
</template>
<script>
import FormInputElement from '@/components/Common/FormInputElement'
import FormPhoneNumber from '@/components/Common/FormPhoneNumber'
import PhoneVerificationModal from '@/components/Common/PhoneVerificationModal'
import { useFriendlyError } from '@/utils'
import { localize } from 'vee-validate'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ProfilePhoneEditForm',
  components: { PhoneVerificationModal, FormPhoneNumber, FormInputElement },
  data () {
    return {
      loading: false,
      prefix: '+994',
      registrationResponse: null,
      user: {}
    }
  },
  computed: {
    ...mapGetters({
      isOtpCodeReceived: 'UI/isOtpVerificationModalOpened'
    })
  },
  async beforeMount () {
    localize(this.$i18n.locale)
    this.user = {
      ...this.$auth.user
    }
    this.SHOW_OTP_VERIFICATION_MODAL(false)
  },
  methods: {
    ...mapMutations({
      SHOW_OTP_VERIFICATION_MODAL: 'UI/SHOW_OTP_VERIFICATION_MODAL'
    }),
    ...mapActions({
      USER_PHONE_EDIT: 'User/USER_PHONE_EDIT',
      SEND_OTP: 'User/SEND_OTP'
    }),
    onOtpVerified () {
      this.SHOW_OTP_VERIFICATION_MODAL(false)
      this.$auth.fetchUser()
    },
    async onResendOtp () {
      await this.onSubmit()
    },
    async onSubmit () {
      this.loading = true
      this.SHOW_OTP_VERIFICATION_MODAL(false)
      await this.USER_PHONE_EDIT({
        new_phone: this.user.phone
      }).then(response => {
        this.registrationResponse = this.$auth.getToken('local').replace('bearer ', '')
        this.$swal.fire({
          position: 'center',
          icon: 'success',
          timer: 5000,
          timerProgressBar: true,
          text: response?.data?.message,
          onClose: () => {
            this.SHOW_OTP_VERIFICATION_MODAL(true)
          }
        })
      }).catch((error) => {
        useFriendlyError(error)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
