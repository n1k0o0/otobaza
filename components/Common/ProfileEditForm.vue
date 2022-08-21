<template lang="pug">
  ClientOnly
    ValidationObserver(v-slot="{ handleSubmit }" slim tag="div")
      form(@submit.prevent="handleSubmit(onSubmit)")
        .setting-border
          .row.setting-form
            .col-12.col-sm-12
              h4.setting-title Tənzimləmələr
            .col-12.col-sm-6
              FormInputElement(
                class="form_group"
                v-model="user.first_name"
                name="first_name"
                rules="required"
                required
                :label="$t('validation.names.first_name')"
              )
            .col-12.col-sm-6
              FormInputElement(
                class="form_group"
                v-model="user.last_name"
                name="last_name"
                rules="required"
                required
                :label="$t('validation.names.last_name')"
              )
            .col-12
              FormInputElement(
                class="form_group"
                v-model="user.address"
                name="address"
                rules="required"
                :label="$t('validation.names.address')"
              )
            .col-12.col-sm-6
              FormInputGender(v-model="user.gender" class="form_group" is-required :label="$t('gender')" title)
            .col-12.col-sm-6
              FormCurrencySelect(
                class="form_group"
                v-model="user.currency.id"
                rules="required"
                required
              )
            .col-12
              SocialAccounts(v-model='user.social_links' class="form_group")
            .col-12.col-sm-6
              FormCountrySelect(
                class="form_group"
                v-model="user.country.id"
                rules="required"
                :label="$t('validation.names.country')"
                required
              )
            .col-12.col-sm-6
              FormCitySelect(
                class="form_group"
                :country="user.country.id"
                v-model="user.city.id"
                rules="required"
                :label="$t('validation.names.city')"
                required
              )
            .col-12.col-sm-12
              .setting-btns
                button.setting-submit(:disabled='loading' :class="{disabled: loading}", type='submit')
                  i.fa.fa-spinner.fa-spin(v-if='loading')
                  |
                  | {{ $t('save') }}
</template>
<script>
import FormCitySelect from '@/components/Common/FormCitySelect'
import FormCountrySelect from '@/components/Common/FormCountrySelect'
import FormCurrencySelect from '@/components/Common/FormCurrencySelect'
import FormInputElement from '@/components/Common/FormInputElement'
import FormInputGender from '@/components/Common/FormInputGender'
import SocialAccounts from '@/components/Common/SocialAccounts'
import { useFriendlyError } from '@/utils'
import { localize } from 'vee-validate'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProfileEditForm',
  components: {
    FormCurrencySelect,
    FormCitySelect,
    FormCountrySelect,
    SocialAccounts,
    FormInputGender,
    FormInputElement
  },
  data () {
    return {
      loading: false,
      user: {}
    }
  },
  computed: {
    ...mapGetters({
      currencies: 'UI/currencies'
    })
  },
  async beforeMount () {
    localize(this.$i18n.locale)
    const gender = this.$auth.user.gender_icon === 'm' ? 1 : 0
    this.user = {
      ...this.$auth.user
    }

    if (!this.user.social_links) {
      this.user.social_links = [
        { name: 'facebook', value: '' }
      ]
    }

    this.user.gender = gender
  },
  methods: {
    ...mapActions({
      USER_EDIT: 'User/USER_EDIT'
    }),
    async onSubmit () {
      this.loading = true
      const { city, country, currency, address, gender, first_name, last_name, social_links } = this.user
      const data = {
        city: city?.id,
        country: country?.id,
        currency: currency?.id,
        address,
        gender,
        first_name,
        last_name,
        socials: social_links
      }
      await this.USER_EDIT({
        data
      }).then(response => {
        this.$auth.fetchUser().then(() => {
          this.$swal.fire(
            '',
            response?.data?.message || this.$t('profile_saved'),
            'success'
          )
          this.loading = false
        })
      }).catch(error => {
        useFriendlyError(error)
        this.loading = false
      })
    }
  }
}
</script>
