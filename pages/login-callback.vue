<template>
  <div class="SocialLogin">
    <div class="loading">
      <i class="fa fa-spin fa-spinner"></i>
      <span>{{ $t('loading') }}...</span>
    </div>
  </div>
</template>
<script>
import { getUrlParams } from '@/utils'
import { mapActions } from 'vuex'
export default {
  name: 'LoginCallback',
  async beforeMount () {
    const hash = getUrlParams(this.$route.hash)
    const type = this.$route.query.type
    const code = this.$route.query.code
    await this.DO_SOCIAL_LOGIN({
      type,
      hash,
      code
    }).then(response => {
      const token = response?.data?.token || response?.token
      if (response?.message) {
        this.$swal.fire({
          icon: 'error',
          timer: 5000,
          timerProgressBar: true,
          text: response?.message,
          onClose: () => {
            this.$router.push(this.localePath('/'))
          }
        })
      }

      this.$auth.setToken('local', 'Bearer ' + token)
      this.$auth.setStrategy('local').then(() => {
        this.$router.push(this.localePath('/'))
      }).catch(error => {
        this.$swal.fire({
          icon: 'error',
          timer: 5000,
          timerProgressBar: true,
          text: error?.response?.data?.message,
          onClose: () => {
            this.$router.push(this.localePath('/'))
          }
        })
      })
    }).catch(error => {
      this.$auth.reset()
      this.$auth.setStrategy('local').then(() => {
        this.$swal.fire({
          icon: 'error',
          timer: 5000,
          timerProgressBar: true,
          text: error?.response?.data?.message,
          onClose: () => {
            this.$router.push(this.localePath('registration'))
          }
        })
      })
    })
  },
  methods: {
    ...mapActions({
      DO_SOCIAL_LOGIN: 'User/DO_SOCIAL_LOGIN'
    })
  }
}
</script>
<style lang="scss">
  .SocialLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    i {
      color:#0e7ae7;
      font-size: 50px;
    }
    span {
      font-size: 20px;
      color:#0e7ae7;
      margin-top: 10px;
    }
  }
</style>
