<template lang="pug">
  .fmail
    .row
      .col-12.col-sm-6
        .fmtitle {{ $t('subscription') }}
        p.fmtxt {{ $t('subscription_desc') }}
      .col-12.col-sm-6
        ClientOnly
          ValidationObserver(v-slot="{ handleSubmit }" slim tag="div" ref="newsLetterForm")
            form(@submit.prevent="handleSubmit(onSubmit)")
              ValidationProvider(v-slot='{errors, failed}' name='email' rules='required|email' tag="div" class="fmflex")
                input.subscribe-input.form-control(
                  :placeholder="$t('email_address')"
                  type='email'
                  v-model="email"
                  :class="{'is-invalid': failed, 'is-valid': !failed && email}"
                )
                button.btn(type='submit' :disabled="loading")
                  i.fa.fa-spinner.fa-spin(v-if='loading')
                  |
                  | {{ $t('subscribe') }}
</template>
<script>
import { useFriendlyError } from '@/utils'
import { mapActions } from 'vuex'
export default {
  name: 'NewsLetter',
  data () {
    return {
      loading: false,
      email: ''
    }
  },
  methods: {
    ...mapActions({
      SUBSCRIBE_TO_NEWSLETTER: 'User/SUBSCRIBE_TO_NEWSLETTER'
    }),
    async onSubmit () {
      this.loading = true
      await this.SUBSCRIBE_TO_NEWSLETTER(this.email).then(response => {
        this.$swal.fire('', response?.message, 'success')
      }).catch(error => {
        useFriendlyError(error)
      }).finally(() => {
        this.loading = false
        this.email = ''
        this.$refs.newsLetterForm.reset()
      })
    }
  }
}
</script>
