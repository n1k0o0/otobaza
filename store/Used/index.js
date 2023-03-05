import $swal from 'sweetalert2'

const strict = false

const state = () => ({
  brandList: {
    5: 'audi',
    16: 'bmw',
    184: 'kia',
    183: 'hyundai',
    842: 'lexus',
    77: 'mitsubishi',
    80: 'nissan',
    106: 'skoda',
    111: 'toyota',
    121: 'volkswagen',
    120: 'volvo',
    107: 'subaru',
    88: 'peugeot',
    84: 'opel',
    72: 'mazda',
    5172: 'lifan',
    1820: 'landrover',
    64: 'lancia',
    5173: 'qaz',
    882: 'jeep',
    56: 'jaguar',
    54: 'isuzu',
    1526: 'infiniti',
    45: 'honda',
    5174: 'haval',
    5175: 'haima',
    2903: 'greatwall',
    2590: 'geely',
    36: 'ford',
    35: 'fiat',
    3137: 'faw',
    29: 'dodge',
    185: 'daewoo',
    139: 'dacia',
    21: 'citroen',
    138: 'chevrolet',
    2887: 'chery',
    5176: 'changan',
    2: 'alfa romeo',
    1505: 'acura'
  },
  brands: [],
  models: [],
  parts: [],
  part: {},
  loading: false,
  search_lang: '',
  search_page: 1,
  search_page_favorite: 1,
  last_page: 1,
  last_page_favorite: 1,
  meta: {},
  meta_favorite: {},
  search_sort_by: 'created_at',
  search_sort_order: 'desc',
  ad_special: [],
  ad_vip: [],
  ad_lasts: [],
  similar_parts: [],
  favorites: [],
  favorites_count: 0
})

const getters = {
  brands (state) { return state.brands },
  models (state) { return state.models },
  loading (state) { return state.loading },
  parts (state) { return state.parts },
  part (state) { return state.part },
  search_lang (state) { return state.search_lang },
  search_page (state) { return state.search_page },
  search_page_favorite (state) { return state.search_page_favorite },
  last_page (state) { return state.last_page },
  last_page_favorite (state) { return state.last_page_favorite },
  meta (state) { return state.meta },
  meta_favorite (state) { return state.meta_favorite },
  sort_by (state) { return state.search_sort_by },
  sort_order (state) { return state.search_sort_order },
  ad_special (state) { return state.ad_special },
  ad_vip (state) { return state.ad_special },
  ad_lasts (state) { return state.ad_lasts },
  favorites (state) { return state.favorites },
  favorites_count (state) { return state.favorites_count },
  similar_parts (state) { return state.similar_parts },
  brand_name (state) {
    return (id) => {
      return state.brandList[id]
    }
  },
  brand_key (state) {
    return (value) => {
      return +(Object.keys(state.brandList).find(key => state.brandList[key] === value) ?? 5)
    }
  }
}

const mutations = {
  SET_BRANDS (state, payload) {
    state.brands = payload
  },
  SET_MODELS (state, payload) {
    state.models = payload
  },
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
  SET_SEARCH_PAGE_FAVORITE (state, payload) {
    state.search_page_favorite = payload
  },
  SET_LAST_PAGE (state, payload) {
    state.last_page = payload
  },
  SET_LAST_PAGE_FAVORITE (state, payload) {
    state.last_page_favorite = payload
  },
  SET_META (state, payload) {
    state.meta = payload
  },
  SET_META_FAVORITE (state, payload) {
    state.meta_favorite = payload
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
  },
  SET_FAVORITES_COUNT (state, payload) {
    state.favorites_count = payload
  },
  CLEAR_FAVORITES (state) {
    state.favorites = []
  },
  SET_SIMILAR_PARTS (state, payload) {
    state.similar_parts = payload
  }
}

const actions = {
  async GET_BRANDS ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get('/api/marks')

    commit('SET_SEARCH_LANG', this.$i18n.locale)
    commit('SET_BRANDS', data)
  },
  async GET_MODELS ({ commit }, { manufacturer }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get('/api/marks/' + manufacturer)

    const ss = data.filter((v, i, a) => a.findIndex(v2 => (v2.modelId === v.modelId)) === i)
    commit('SET_MODELS', ss)
  },

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
    keyword = null,
    sortBy = null,
    sortOrder = null,
    page = false
  }) {
    if (keyword && keyword.length > 0 && keyword.length < 3) {
      await $swal.fire({
        title: this.$i18n.t('keyword_limit_error'),
        position: 'top',
        toast: true,
        timer: 2000,
        timerProgressBar: true,
        icon: 'error'
      })
      return
    }

    commit('SET_LOADING', true)
    commit('SET_SORT_BY', sortBy ?? state.search_sort_by)
    commit('SET_SORT_ORDER', sortOrder ?? state.search_sort_order)

    commit('SET_SEARCH_PAGE', page ? ++state.search_page : 1)

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.post(`api/used-parts/search?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}&perPage=20`,
      {
        manu_id: brand,
        mod_id: model,
        keyword: keyword
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
    keyword = null,
    sortBy = 'created_at'
  }) {
    if (keyword && keyword.length > 0 && keyword.length < 3) {
      await $swal.fire({
        title: this.$i18n.t('keyword_limit_error'),
        position: 'top',
        toast: true,
        timer: 2000,
        timerProgressBar: true,
        icon: 'error'
      })
      return
    }

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
    } = await this.$axios.post(`api/used-parts/search?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}&perPage=20`,
      {
        manu_id: brand,
        mod_id: model,
        keyword: keyword
      })

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)
    commit('SET_PARTS', products)
    commit('SET_LOADING', false)
  },

  async GET_PART ({ commit, dispatch }, payload) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data: { data: part } } = await this.$axios.get('api/used-parts/' + payload)
    commit('SET_PART', part)

    dispatch('GET_SIMILAR_PARTS', payload)
  },

  async ADD_TO_FAVORITE ({ commit, dispatch, state }, payload) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.patch('api/wish-list/used-part/' + payload)
    state.part.wishlisted = data.wishlisted
    dispatch('GET_FAVORITES')
  },

  async GET_HOME_ADS ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.get('api/used-parts?perPage=20&orderBy=created_at&sort=desc')

    commit('SET_META', meta)
    commit('SET_AD_LASTS', products)
  },

  async GET_FAVORITES ({ commit, state }, {
    page = false
  } = { page: false }) {
    commit('SET_LOADING', true)

    commit('SET_SEARCH_PAGE_FAVORITE', page ? ++state.search_page : 1)

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.get(`api/wish-list/used-part?page=${state.search_page}`)

    commit('SET_LAST_PAGE_FAVORITE', meta.last_page)
    commit('SET_META_FAVORITE', meta)
    commit('SET_FAVORITES_COUNT', meta.total)

    if (page) {
      commit('SET_FAVORITES', [...state.favorites, ...products])
    } else {
      commit('SET_FAVORITES', products)
    }
    commit('SET_LOADING', false)
  },

  async GET_SIMILAR_PARTS ({ commit, dispatch, state }, payload) {
    const { data: { data: relatives } } = await this.$axios.get('/api/used-parts/similar/' + payload + '?perPage=20')
    commit('SET_SIMILAR_PARTS', relatives)
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
