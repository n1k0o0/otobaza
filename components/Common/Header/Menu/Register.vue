<template>
  <div v-click-outside="onClickOutside" class="dropdown droplogin drop_register">
    <button
      id="droplogin"
      class="btn-new dropdown-toggle login-btn"
      :class="{'show':show}"
      type="button"
      @click="show=true"
    >
      {{ $t('registration') }}
    </button>
    <transition mode="in-out" name="page-fade">
      <div v-if="show" class="dropdown-menu show">
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
          <div class="register_user">
            <h3>{{ $t('driver') }}</h3>
            <p>Müştəri kimi qeydiyyatdan keç</p>
            <div class="image_wrap">
              <img alt="user" src="/img/header/register_user.png" />
            </div>
          </div>
          <div class="register_store">
            <h3>{{ $t('store') }}</h3>
            <p>Mağaza kimi qeydiyyatdan keç</p>
            <div class="image_wrap">
              <img alt="store" src="/img/header/register_store.png" />
            </div>
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
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      loading: false,
      passwordType: 'password',
      eyeClass: 'fa-eye-slash',
      errorMessage: '',
      show: false
    }
  },
  computed: {
    ...mapGetters({})
  },
  methods: {
    ...mapActions({
      SIGN_IN: 'User/SIGN_IN'
    }),
    ...mapMutations({}),
    onClickOutside () {
      this.show = false
    },
    showPassword () {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      this.eyeClass = this.passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'
    }
  }
}
</script>
