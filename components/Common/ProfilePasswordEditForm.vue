<template lang="pug">
  ClientOnly
    ValidationObserver(v-slot="{ handleSubmit }" slim tag="div")
      form(@submit.prevent="handleSubmit(onSubmit)")
        .setting-border
          .row.update-password
            .col-12.col-sm-12
              h5.up-tt {{ $t('update_password') }}
            .col-12.col-sm-6
              FormInputElement(
                v-model="form.password"
                class="form_group"
                name="password"
                type="password"
                rules="required|min:8"
                required
                :label="$t('new_pass')"
                vid='confirmation'
              )
            .col-12.col-sm-6
              FormInputElement(
                v-model="form.password_confirmation"
                class="form_group"
                name="password_confirm"
                type="password"
                rules="required|confirmed:confirmation"
                required
                :label="$t('new_pass_confirm')"
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
import { useFriendlyError } from '@/utils'
import { mapActions } from 'vuex'
export default {
  name: 'ProfilePasswordEditForm',
  components: { FormInputElement },
  data () {
    return {
      loading: false,
      form: {
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    ...mapActions({
      USER_PASSWORD_EDIT: 'User/USER_PASSWORD_EDIT'
    }),
    async onSubmit () {
      this.loading = true
      await this.USER_PASSWORD_EDIT({ data: this.form }).then((response) => {
        this.$swal.fire(
          '',
          response?.data?.message,
          'success'
        )
      }).catch(error => {
        useFriendlyError(error)
      }).finally(() => {
        this.subscribeLoading = false
        this.loading = false
      })
      this.loading = false
    }
  }
}
</script>
