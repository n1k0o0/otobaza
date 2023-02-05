const strict = false

const state = () => ({
  parts: [],
  part: {},
  loading: false,
  search_lang: '',
  search_page: 1,
  last_page: 1,
  meta: {},
  search_sort_by: 'price',
  search_sort_order: 'desc',
  ad_special: [],
  ad_vip: [],
  ad_lasts: [],

  favorites: []
})

const getters = {
  brands (state) { return state.brands },
  loading (state) { return state.loading },
  parts (state) { return state.parts },
  part (state) { return state.part },
  search_lang (state) { return state.search_lang },
  search_page (state) { return state.search_page },
  last_page (state) { return state.last_page },
  meta (state) { return state.meta },
  sort_by (state) { return state.search_sort_by },
  sort_order (state) { return state.search_sort_order },
  ad_special (state) { return state.ad_special },
  ad_vip (state) { return state.ad_special },
  ad_lasts (state) { return state.ad_lasts },
  favorites (state) { return state.favorites }
}

const mutations = {
  SET_PARTS (state, payload) {
    state.parts = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  },
  SET_PART (state, payload) {
    state.part = payload
  },
  SET_SEARCH_LANG (state, payload) {
    state.search_lang = payload
  },
  SET_SEARCH_PAGE (state, payload) {
    state.search_page = payload
  },
  SET_LAST_PAGE (state, payload) {
    state.last_page = payload
  },
  SET_META (state, payload) {
    state.meta = payload
  },
  SET_SORT_BY (state, payload) {
    state.search_sort_by = payload
  },
  SET_SORT_ORDER (state, payload) {
    state.search_sort_order = payload
  },
  SET_AD_SPECIAL (state, payload) {
    state.ad_special = payload
  },
  SET_AD_VIP (state, payload) {
    state.ad_vip = payload
  },
  SET_AD_LASTS (state, payload) {
    state.ad_lasts = payload
  },
  SET_FAVORITES (state, payload) {
    state.favorites = payload
  }
}

const actions = {
  async GET_SEARCH_PARTS ({ commit }) {
    commit('SET_LOADING', true)
    commit('SET_PARTS', [])
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: parts,
        meta
      }
    } = await this.$axios.get('https://62d45369cd960e45d456a36d.mockapi.io/api/v2/products')
    commit('SET_PARTS', parts)
    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)
    commit('SET_SEARCH_LANG', this.$i18n.locale)
    commit('SET_LOADING', false)
  },
  async GET_PARTS ({ commit, state }, {
    brand = null,
    model = null,
    title = null,
    sortBy = null,
    sortOrder = 'desc',
    page = false
  }) {
    commit('SET_LOADING', true)

    commit('SET_SORT_BY', sortBy ?? 'price')
    commit('SET_SORT_ORDER', sortOrder)
    if (page) {
      commit('SET_SEARCH_PAGE', ++state.search_page)
    }

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.get(`api/used-parts/search?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}`,
      {
        params: {
          manu_id: brand,
          mod_id: model,
          keyword: title
        }
      })

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)

    if (page) {
      commit('SET_PARTS', [...state.parts, ...products])
    } else {
      commit('SET_PARTS', products)
    }
    commit('SET_LOADING', false)
  },

  async FILTER_PARTS ({ commit, state }, {
    brand = null,
    model = null,
    title = null,
    sortBy = 'price'
  }) {
    commit('SET_LOADING', true)
    commit('SET_SORT_BY', sortBy)
    commit('SET_SEARCH_PAGE', 1)
    commit('SET_SORT_ORDER', state.search_sort_order === 'desc' ? 'asc' : 'desc')

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.get(`api/used-parts/search?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}`,
      {
        params: {
          manu_id: brand,
          mod_id: model,
          keyword: title
        }
      })

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)
    commit('SET_PARTS', products)
    commit('SET_LOADING', false)
  },

  async GET_PART ({ commit }, payload) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data: { data: part } } = await this.$axios.get('api/used-parts/' + payload)
    commit('SET_PART', part)
  },

  async ADD_TO_FAVORITE ({ commit }, payload) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    await this.$axios.patch('api/wish-list/used-part/' + payload)
  },

  async GET_HOME_ADS ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products
      }
    } = await this.$axios.get('api/used-parts?perPage=20&orderBy=price&sort=desc')

    commit('SET_AD_LASTS', products)
  },

  async GET_FAVORITES ({ commit, state }, {
    page = false
  }) {
    commit('SET_LOADING', true)

    if (page) {
      commit('SET_SEARCH_PAGE', ++state.search_page)
    }

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.get(`api/wish-list/used-part?page=${state.search_page}`)

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)

    if (page) {
      commit('SET_FAVORITES', [...state.favorites, ...products])
    } else {
      commit('SET_FAVORITES', products)
    }
    commit('SET_LOADING', false)
  },

  async CLEAR_FAVORITES ({ commit }) {
    // this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    // const {} = await this.$axios.patch('api/wish-list/used-part')

    commit('SET_FAVORITES', [])
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
