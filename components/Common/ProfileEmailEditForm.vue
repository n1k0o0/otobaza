<template lang="pug">
  ClientOnly
    ValidationObserver(v-slot="{ handleSubmit }" slim tag="div")
      form(@submit.prevent="handleSubmit(onSubmit)")
        .setting-border
          .row.update-password
            .col-12.col-sm-12
              h5.up-tt {{ $t('update_email') }}
            .col-12
              FormInputElement(
                class="form_group"
                v-model="user.email"
                name="email"
                type="email"
                rules="required|email"
                required
                :label="$t('validation.names.email')"
              )
            .col-12
              template(v-if="subscribeLoading")
                i.fa.fa-spin.fa-spinner
              template(v-else)
                .custom-control.custom-checkbox.terms_conditions.mt-0
                  input#subscribe.custom-control-input(type='checkbox', name='subscribe' v-model="subscribed")
                  label.custom-control-label.subscribe(for='subscribe') {{ $t('do_subscribe') }}
            .col-12.col-sm-12
              .setting-btns
                button.setting-submit(:disabled='loading' :class="{disabled: loading}", type='submit')
                  i.fa.fa-spinner.fa-spin(v-if='loading')
                  |
                  | {{ $t('save') }}
</template>
<script>
import FormInputElement from '@/components/Common/FormInputElement'
import { useFriendlyError } from '@/utils'
import { localize } from 'vee-validate'
import { mapActions } from 'vuex'
export default {
  name: 'ProfileEmailEditForm',
  components: { FormInputElement },
  data () {
    return {
      loading: false,
      subscribeLoading: false,
      user: {}
    }
  },
  computed: {
    subscribed: {
      get () {
        return this.user.subscribed
      },
      async set (val) {
        this.loading = true
        this.subscribeLoading = true
        await this.SUBSCRIBE(val).then((response) => {
          this.$swal.fire(
            '',
            response?.data?.message,
            val ? 'success' : 'warning'
          )
        }).catch(error => {
          useFriendlyError(error)
        }).finally(() => {
          this.subscribeLoading = false
          this.loading = false
        })
        this.user.subscribed = val
      }
    }
  },
  async beforeMount () {
    localize(this.$i18n.locale)
    this.user = {
      ...this.$auth.user
    }
  },
  methods: {
    ...mapActions({
      CHANGE_EMAIL: 'User/CHANGE_EMAIL',
      SUBSCRIBE: 'User/SUBSCRIBE'
    }),
    async onSubmit () {
      this.loading = true
      await this.CHANGE_EMAIL(this.user.email).then(() => {
        this.$swal.fire(
          '',
          this.$t('confirmation_sent_to_email'),
          'success'
        )
      }).catch((error) => {
        useFriendlyError(error)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
