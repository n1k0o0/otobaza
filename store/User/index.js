const strict = false

const state = () => ({
  my_cars: []
})

const getters = {
  my_cars (state) {
    return state.my_cars
  }
}

const mutations = {
  SET_MY_CARS (state, payload) {
    state.my_cars = payload
  }
}
const actions = {
  async SIGN_IN ({ commit }, { data }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.post('/api/user/login', data)
  },
  async SIGN_OUT () {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return this.$axios.get('/api/user/logout').finally(() => {
      this.$auth.$storage.setUniversal('_token.local', null)
      this.$auth.$storage.setUniversal('strategy', 'local')
      this.$auth.$storage.setUniversal('refresh_token', null)
      this.$auth.$storage.setUniversal('user', null)
      this.$auth.$storage.setState('loggedIn', false)
    })
  },
  async REGISTER_BUYER ({ commit }, { data }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.post('/api/user/register', data)
  },
  async SEND_OTP (state, { token, code }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.put(
      '/api/user/phone/edit',
      {
        code
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  },

  async RESEND_OTP (state, { token }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.put(
      '/api/user/phone/resend',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  },

  async GET_MY_CARS ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.get('/api/garage')
    commit('SET_MY_CARS', data)
  },
  async ADD_CAR (state, { data, id }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    if (id) {
      await this.$axios.put('/api/garage/' + id, data)
    } else {
      await this.$axios.post('/api/garage', data)
    }
  },
  async DELETE_CAR (state, { id }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.delete('/api/garage/' + id)
    return data
  },
  async CHANGE_EMAIL (state, new_email) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    await this.$axios.post('/api/user/email/edit', {
      new_email
    })
  },
  async SUBSCRIBE (state, is_subscribe) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.post('/api/subscribe', {
      is_subscribe
    })
  },
  async USER_EDIT (state, { data }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.post('/api/user/edit', data)
  },
  async USER_PASSWORD_EDIT (state, { data }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.post('/api/user/password/edit', data)
  },
  async USER_PHONE_EDIT (state, { new_phone }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.post('/api/user/phone/edit', {
      new_phone
    })
  },
  async SUBSCRIBE_TO_NEWSLETTER (state, email) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.post('/api/newsletter', {
      email
    })
    return data
  },
  async GET_SELLER_PACKAGES (state, { currency }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.get(`/api/packages?currency=${currency}`)
    return data?.data
  },
  async FORGOT_PASSWORD (state, phone) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    let message = ''
    let success = false
    await this.$axios.post('/api/user/forgot', {
      phone
    })
      .then(res => {
        message = res.data?.message
        success = true
      })
      .catch(err => {
        console.log(err.response.status)
        if (err.response.status === 422) {
          message = err.response?.data?.errors?.phone[0]
        } else {
          message = err.response?.data?.message
        }
      })
    return { message, success }
  },
  async DO_SOCIAL_LOGIN (state, { hash, type, code }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const data = {}
    if (type === 'google') {
      data.token = `${hash.access_token}`
      data.social = type
    }
    if (type === 'facebook') {
      data.token = `${hash['#access_token']}`
      data.social = type
    }
    if (type === 'linkedin') {
      try {
        this.$axios.defaults.baseURL = ''
        const linkedinRes = await this.$axios.get(`/linkedin-callback?code=${code}`)
        data.token = `${linkedinRes?.data?.access_token}`
        data.social = type
      } catch (e) {
        return Error(e)
      }
    }
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const res = await this.$axios.post('/api/user/social-login', data)
    return res.data
  }
}

export default {
  strict,
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
