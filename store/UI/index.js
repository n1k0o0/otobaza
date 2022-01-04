const strict = false

const state = () => ({
  isOtpVerificationModalOpened: false,
  isMobileMenuShow: false,
  isSearchVisible: false,
  countries: [],
  currencies: [],
  statistics: {
    total_products: 0,
    total_products_last_month: 0,
    total_dismantles: 0,
    total_stores: 0
  },
  search_tabs: [],
  geo: {
    ip: null,
    country: 1,
    city: 1,
    lat: null,
    lng: null,
    currency: 4,
    currency_name: 'AZN'
  },
  blog_items: []
})

const getters = {
  isOtpVerificationModalOpened (state) { return state.isOtpVerificationModalOpened },
  isSearchVisible (state) { return state.isSearchVisible },
  countries (state) { return state.countries },
  currencies (state) { return state.currencies },
  statistics (state) { return state.statistics },
  geo (state) { return state.geo },
  isMobileMenuShow (state) { return state.isMobileMenuShow },
  search_tabs (state) { return state.search_tabs },
  blog_items (state) { return state.blog_items }
}

const mutations = {
  SHOW_OTP_VERIFICATION_MODAL (state, payload) {
    state.isOtpVerificationModalOpened = payload
  },
  TOGGLE_OTP_VERIFICATION_MODAL (state) {
    state.isOtpVerificationModalOpened = !state.isOtpVerificationModalOpened
  },
  SET_COUNTRIES (state, payload) {
    state.countries = payload
  },
  SET_CURRENCIES (state, payload) {
    state.currencies = payload
  },
  SET_STATISTICS (state, payload) {
    state.statistics = payload
  },
  SET_GEO (state, geo) {
    state.geo = geo
  },
  TOGGLE_MOBILE_MENU (state) {
    state.isMobileMenuShow = !state.isMobileMenuShow
  },
  HIDE_MOBILE_MENU (state) {
    state.isMobileMenuShow = false
  },
  TOGGLE_SEARCH (state, payload = state.isSearchVisible = !state.isSearchVisible) {
    state.isSearchVisible = payload
  },
  SHOW_SEARCH (state) {
    state.isSearchVisible = true
  },
  CLOSE_SEARCH (state) {
    state.isSearchVisible = false
  },
  SET_SEARCH_TABS (state, payload) {
    state.search_tabs = payload
  },
  ADD_SEARCH_TAB (state, tab) {
    state.search_tabs.push(tab)
    this.$auth.$storage.setUniversal('search_tabs', state.search_tabs)
  },
  REMOVE_SEARCH_TAB (state, index) {
    state.search_tabs.splice(index, 1)
    this.$auth.$storage.setUniversal('search_tabs', state.search_tabs)
  },
  SET_BLOG_ITEMS (state, payload) {
    state.blog_items = payload
  }
}

const actions = {
  async GET_SETTINGS ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data: settings } = await this.$axios.get('/api/settings')
    commit('SET_COUNTRIES', settings?.country || [])
    commit('SET_CURRENCIES', settings?.currency || [])
    commit('SET_STATISTICS', settings?.statistics || {
      total_products: 0,
      total_products_last_month: 0,
      total_dismantles: 0,
      total_stores: 0
    })
  },
  SET_ERROR (state) {
  },
  async SEND_CONTACT_DETAILS (state, { contact }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    return await this.$axios.post('/api/contact', contact)
  },
  async GET_GEO ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.get('/api/find')
    const geo = {
      ip: data?.ip || null,
      country: data?.country?.[0]?.country_id || 1,
      city: data?.city?.[0]?.city_id || 1,
      lat: data?.city?.[0]?.lat || null,
      lng: data?.city?.[0]?.lng || null,
      currency: data?.currency?.[0]?.currency_id || 4,
      currency_name: data?.currency?.[0]?.currency || 'AZN'
    }
    this.$auth.$storage.setUniversal('geo', geo, true)
    commit('SET_GEO', geo)
  },
  async GET_BLOG_ITEMS ({ commit }) {
    let category = 23
    switch (this.$i18n.locale) {
      case 'az':
        category = 23
        break
      case 'en':
        category = 28
        break
      case 'ru':
        category = 29
        break
      case 'tr':
        category = 30
        break
      default :
        category = 23
    }
    return await fetch(`https://blog.otobaza.com/wp-json/wp/v2/posts?categories=${category}&per_page=4&_embed`)
      .then(response => response.json())
      .then(data => {
        const items = data.map(blog => {
          const {
            title: { rendered: title },
            link,
            _embedded: { 'wp:featuredmedia': media }
          } = blog
          const { media_details: { sizes: { full: { source_url: image } } } } = media[0]
          return {
            link,
            title,
            image
          }
        })
        commit('SET_BLOG_ITEMS', items)
        return items
      })
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
