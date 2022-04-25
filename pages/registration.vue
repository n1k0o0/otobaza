<template lang="pug">
  .container
    .mcontainer.mh60vh
      .response-message.about-title
        .mkub.mkubsuccess.kubflex
          img(src="/img/register-ico.svg")
        .rminfo
          h2.rmtt {{ $t('registration') }}
          p.rmtxt {{ $t('registration_desc') }}
      .row.reg_border
        .col-12.col-sm-12
          .reg-error
            i.fa.fa-info-circle
            | {{ $t('registration_required') }}
        .col-12.col-sm-12.col-md-8.contact-lr
          ClientOnly
            ValidationObserver(v-slot="{ handleSubmit }" slim tag="div")
              form(@submit.prevent="handleSubmit(onSubmit)")
                .container.contact-form.registration-form
                  .row
                    .col-12.col-sm-6
                      FormInputElement(
                        v-model="form.first_name"
                        name="first_name"
                        rules="required"
                        required
                        :label="$t('validation.names.first_name')"
                      )
                    .col-12.col-sm-6
                      FormInputElement(
                        v-model="form.last_name"
                        name="last_name"
                        rules="required"
                        required
                        :label="$t('validation.names.last_name')"
                      )
                    .col-12.col-sm-6
                      FormPhoneNumber(
                        v-model="form.phone"
                        :prefix.sync="prefix"
                        :prefixes="['+994']"
                        )
                    .col-12.col-sm-3
                      FormInputGender(v-model="form.gender" is-required :label="$t('gender')" title)
                    .col-12.col-sm-3
                      FormCurrencySelect(
                        v-model="form.price_types.id"
                        required
                        rules="required"
                      )
                    .col-12.col-sm-6
                      FormCountrySelect(
                        v-model="form.country"
                        :label="$t('validation.names.select_country')"
                        required
                        rules="required"
                      )
                    .col-12.col-sm-6
                      FormCitySelect(
                        v-model="form.city"
                        :country="form.country"
                        :label="$t('validation.names.select_city')"
                        required
                        rules="required"
                      )
                    .col-12.col-sm-12
                      FormInputElement(
                        v-model="form.email"
                        name="email"
                        type="email"
                        rules="email"
                        :label="$t('validation.names.email')"
                      )
                    .col-12.col-sm-12
                      FormInputElement(
                        v-model="form.address"
                        name="address"
                        type="address"
                        :label="$t('validation.names.address')"
                      )
                    .col-12.col-sm-12
                      .custom-control.custom-checkbox
                        input#subscribe.custom-control-input(type='checkbox', name='subscribe' v-model="form.is_subscribe")
                        label.custom-control-label.subscribe(for='subscribe') {{ $t('do_subscribe') }}
                    .col-12.col-sm-12
                      SocialAccounts(v-model='form.socials')
                    .col-12.col-sm-6
                      FormInputElement(
                        v-model="form.password"
                        name="password"
                        type="password"
                        rules="required"
                        required
                        :label="$t('validation.names.password')"
                        vid='confirmation'
                      )
                    .col-12.col-sm-6
                      FormInputElement(
                        v-model="password_confirmation"
                        name="password_confirm"
                        type="password"
                        rules="required|confirmed:confirmation"
                        required
                        :label="$t('validation.names.password_confirm')"
                      )
                    .col-12(v-if='errors')
                      .alert.alert-danger(role='alert')
                        div(v-for='error in Object.keys(errors)', :key='error')
                          div {{ errors[error][0] }}
                    .col-12.col-sm-6
                      .custom-control.custom-checkbox.terms_conditions
                        ValidationProvider(v-slot='{ errors }', name='terms_confirm', :rules='{ required: { allowFalse: false } }')
                          input#terms-conditions.custom-control-input(v-model='confirm', name='terms-conditions', type='checkbox', @input='confirm = true')
                          label.custom-control-label(for='terms-conditions')
                            a(:href="localePath('terms-and-conditions')", target='_blank') {{ $t('terms_conditions') }}
                          br
                          span.text-danger {{ errors[0] }}
                    .col-12.col-sm-6.text-right
                      button.btn.contact-btn(:disabled='loading', type='submit')
                        i.fa.fa-spinner.fa-spin(v-if='loading')
                        |  {{ $t('registration') }}
        .col-12.col-sm-12.col-md-4.contact-lr.reg-rules
          .registration-rules
            h4.reg-rules-title
              | {{ $t('registration_why') }}
            .reg_rules
              ul
                li 1.{{ $t('registration_1') }}
                li 2.{{ $t('registration_2') }}
                li 3.{{ $t('registration_3') }}
                li 4.{{ $t('registration_4') }}
    // verification popup
    PhoneVerificationModal(:is-opened='isOtpCodeReceived', :phone='form.phone', :token='registrationResponse && registrationResponse.token', @verified='onOtpVerified')

</template>
<script>
import FormCitySelect from '@/components/Common/FormCitySelect'
import FormCountrySelect from '@/components/Common/FormCountrySelect'
import FormCurrencySelect from '@/components/Common/FormCurrencySelect'
import FormInput from '@/components/Common/FormInput'
import FormInputElement from '@/components/Common/FormInputElement'
import FormInputGender from '@/components/Common/FormInputGender'
import FormPhoneNumber from '@/components/Common/FormPhoneNumber'
import PhoneVerificationModal from '@/components/Common/PhoneVerificationModal'
import SocialAccounts from '@/components/Common/SocialAccounts'
import { useFriendlyError } from '@/utils'
import { localize } from 'vee-validate'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'RegistrationBuyer',
  components: { FormPhoneNumber, FormCitySelect, FormCountrySelect, FormCurrencySelect, FormInputElement, SocialAccounts, PhoneVerificationModal, FormInputGender, FormInput },
  layout: 'pages',
  middleware: 'loggedin',
  data () {
    return {
      registrationResponse: null,
      errors: null,
      isOpen: false,
      loading: false,
      confirm: false,
      password_confirmation: '',
      prefix: '+994',
      form: {
        first_name: '',
        last_name: '',
        gender: 1,
        group_id: 1,
        phone: '',
        email: '',
        password: '',
        address: '',
        is_subscribe: true,
        price_types: {
          id: 4
        },
        country: 1,
        city: 1,
        socials: []
      }
    }
  },
  computed: {
    ...mapGetters({
      isOtpCodeReceived: 'UI/isOtpVerificationModalOpened'
    })
  },
  beforeMount () {
    localize(this.$i18n.locale)
    this.SHOW_OTP_VERIFICATION_MODAL(false)
  },
  methods: {
    ...mapMutations({
      SHOW_OTP_VERIFICATION_MODAL: 'UI/SHOW_OTP_VERIFICATION_MODAL'
    }),
    ...mapActions({
      REGISTER_BUYER: 'User/REGISTER_BUYER'
    }),
    onOtpVerified () {
      this.$auth.setUserToken(this.registrationResponse.token)
      this.$router.push({
        path: this.localePath('/')
      })
    },
    onSubmit () {
      this.loading = true
      this.REGISTER_BUYER({
        data: this.form
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
    }
  }
}
</script>
