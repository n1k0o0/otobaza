import { serialize } from '@/utils'
import Vue from 'vue'

const strict = false

function toTree (data, pid = 0) {
  return data.reduce((r, e) => {
    if (e.parentNodeId === pid) {
      const obj = { ...e }

      if (obj.assemblyGroupName === null) {
        obj.assemblyGroupName = obj.assemblyGroupNodeId
      }

      const children = toTree(data, e.assemblyGroupNodeId)
      if (children.length) obj.children = children
      r.push(obj)
    }
    return r
  }, [])
}

function vinToTree (data) {
  return data.reduce((r, e) => {
    const temp = {
      link: e['@attributes'].link,
      name: e['@attributes'].name,
      quickgroupid: e['@attributes'].quickgroupid,
      children: []
    }
    if (e.row) {
      if (Array.isArray(e.row)) {
        temp.children = vinToTree(e.row)
      } else {
        temp.children = vinToTree([e.row])
      }
    }
    r.push(temp)
    return r
  }, [])
}

const state = () => ({
  manufacturers: [],
  manufacturersByAlphabet: null,
  manufacturersByLogo: null,
  manufacturer_models: [],
  model_cars: null,
  car_assemblies: null,
  car_assemblies_brand: null,
  car_assemblies_tree: [],
  vin_assemblies_tree: [],
  car_assemblies_list: [],
  parts: null,
  search_parts: [],
  vin_parts: null,
  cart: [],
  motor_types: [],
  product: null,
  delivery_methods: [],
  orders: null,
  search_results: null,
  dismantles: null,
  dismantle: null,
  spare_parts: [],
  brands: [],
  models: [],
  types: [],
  search_part: [],
  search_oems: [],
  loading: false,
  search_lang: '',
  search_page: 1,
  last_page: 1,
  meta: {},
  search_sort_by: 'price',
  search_sort_order: 'desc'
})

const getters = {
  manufacturers (state) { return state.manufacturers },
  manufacturersByAlphabet (state) { return state.manufacturersByAlphabet },
  manufacturersByLogo (state) { return state.manufacturersByLogo },
  manufacturer_models (state) { return state.manufacturer_models },
  model_cars (state) { return state.model_cars },
  car_assemblies (state) { return state.car_assemblies },
  car_assemblies_brand (state) { return state.car_assemblies_brand },
  car_assemblies_tree (state) { return state.car_assemblies_tree },
  vin_assemblies_tree (state) { return state.vin_assemblies_tree },
  car_assemblies_list (state) { return state.car_assemblies_list },
  parts (state) { return state.parts },
  vin_parts (state) { return state.vin_parts },
  cart (state) { return state.cart },
  motor_types (state) { return state.motor_types },
  product (state) { return state.product },
  delivery_methods (state) { return state.delivery_methods },
  orders (state) { return state.orders },
  search_results (state) { return state.search_results },
  dismantles (state) { return state.dismantles },
  dismantle (state) { return state.dismantle },
  // SEARCH
  spare_parts (state) { return state.spare_parts },
  models (state) { return state.models },
  brands (state) { return state.brands },
  types (state) { return state.types },
  loading (state) { return state.loading },
  search_parts (state) { return state.search_parts },
  search_part (state) { return state.search_part },
  search_oems (state) { return state.search_oems },
  search_lang (state) { return state.search_lang },
  search_page (state) { return state.search_page },
  last_page (state) { return state.last_page },
  meta (state) { return state.meta },
  search_sort_by (state) { return state.search_sort_by },
  search_sort_order (state) { return state.search_sort_order }
}

const mutations = {
  SET_MANUFACTURERS (state, payload) {
    state.manufacturers = payload
  },
  SET_MANUFACTURERS_BY_ALPHABET (state, payload) {
    state.manufacturersByAlphabet = payload
  },
  SET_MANUFACTURERS_BY_LOGO (state, payload) {
    state.manufacturersByLogo = payload
  },
  SET_MANUFACTURER_MODEL (state, payload) {
    state.manufacturer_models = payload
  },
  SET_MODEL_CARS (state, payload) {
    state.model_cars = payload
  },
  SET_CAR_ASSEMBLIES_BRAND (state, payload) {
    state.car_assemblies_brand = payload
  },
  SET_CAR_ASSEMBLIES_TREE (state, payload) {
    state.car_assemblies_tree = payload
  },
  SET_VIN_ASSEMBLIES_TREE (state, payload) {
    state.vin_assemblies_tree = payload
  },
  SET_CAR_ASSEMBLIES_LIST (state, payload) {
    state.car_assemblies_list = payload
  },
  SET_PARTS (state, payload) {
    state.parts = {
      brand: payload?.parts?.brand || payload?.parts?.assembly || null,
      items: payload?.products?.data || [],
      pagination: payload?.products?.meta || [],
      links: payload?.products?.links || []
    }
  },
  SET_CART (state, payload) {
    state.cart = payload
  },
  SET_VIN_PARTS (state, payload) {
    state.vin_parts = payload
  },
  CLEAR_CART (state) {
    state.cart = []
  },
  SET_MOTOR_TYPES (state, payload) {
    state.motor_types = payload
  },
  SET_PRODUCT (state, payload) {
    state.product = payload
  },
  SET_DELIVERY_METHODS (state, payload) {
    state.delivery_methods = payload.map(item => ({
      value: item.id,
      text: item.name
    }))
  },
  SET_ORDERS (state, payload) {
    state.orders = payload
  },
  SET_SEARCH_RESULTS (state, payload) {
    state.search_results = payload
  },
  SET_DISMANTLES (state, payload) {
    state.dismantles = payload
  },
  SET_DISMANTLE (state, payload) {
    state.dismantle = payload
  },

  // SEARCH - NEW DESIGN
  SET_SPARE_PARTS (state, payload) {
    state.spare_parts = payload
  },
  SET_MODELS (state, payload) {
    state.models = payload
  },
  SET_BRANDS (state, payload) {
    state.brands = payload
  },
  SET_TYPES (state, payload) {
    state.types = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  },
  SET_SEARCH_PARTS (state, payload) {
    state.search_parts = payload
  },
  SET_SEARCH_PART (state, payload) {
    state.search_part = payload
  },
  SET_SEARCH_OEMS (state, payload) {
    state.search_oems = payload
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
  SET_SEARCH_SORT_BY (state, payload) {
    state.search_sort_by = payload
  },
  SET_SEARCH_SORT_ORDER (state, payload) {
    state.search_sort_order = payload
  }
}

const actions = {
  async GET_CATALOG_MANUFACTURERS ({ commit }, { type }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get('/api/avto')
    if (type === 'logo') {
      commit('SET_MANUFACTURERS_BY_LOGO', data)
    } else if (type === 'alphabet') {
      const manufacturers = data.reduce((r, e) => {
        const char = e.manuName[0]
        if (!r[char]) r[char] = { char, items: [e] }
        else r[char].items.push(e)
        return r
      }, {})
      commit('SET_MANUFACTURERS_BY_ALPHABET', Object.values(manufacturers))
    } else {
      commit('SET_MANUFACTURERS', data)
    }

    commit('SET_SEARCH_LANG', this.$i18n.locale)
  },
  async GET_MANUFACTURER_MODELS ({ commit }, { manufacturer }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get(`/api/avto/${manufacturer}`)
    const filtered = {
      model: {},
      items: []
    }
    filtered.model = {
      name: data?.[0]?.manuName || '',
      url: data?.[0]?.url || ''
    }
    filtered.items = data.map(item => {
      return {
        modId: item.modId,
        yearOfConstrFrom: item.yearOfConstrFrom,
        yearOfConstrTo: item.yearOfConstrTo,
        ModelName: item.ModelName,
        Construction: item.Construction,
        brand_image: item.brand_image
      }
    })
    commit('SET_MANUFACTURER_MODEL', data)
    return filtered
  },
  async GET_MODEL_CARS ({ commit }, { model }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get(`/api/cars/${model}`)
    const filtered = {
      car: {},
      items: []
    }
    filtered.car = {
      name: data?.[0]?.manuName || '',
      url: data?.[0]?.url || ''
    }
    filtered.items = data.map(item => {
      return {
        carid: item.carid,
        carName: item.carName,
        motorType: item.motorType,
        powerHpFrom: item.powerHpFrom
      }
    })
    commit('SET_MODEL_CARS', filtered)
    return filtered
  },
  async GET_CAR_ASSEMBLIES ({ commit }, { car }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get(`/api/kataloq/${car}`)
    const tree = toTree(data.kataloq)
    commit('SET_CAR_ASSEMBLIES_BRAND', data?.brand?.[0] || null)
    commit('SET_CAR_ASSEMBLIES_TREE', tree)
  },
  async GET_VIN_ASSEMBLIES ({ commit, state }, { catalog, vehicleId, ssd }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const lang = this.$i18n.locales.find(el => el.code === this.$i18n.locale).iso.replace('-', '_')

    const { data } = await this.$axios.post('/api/laximo/catalog', {
      catalog: catalog,
      vehicleid: vehicleId,
      ssd: ssd,
      language: lang
    })
    const tree = vinToTree(data.row)
    const brand = ({
      CarName: data.GetVehicleInfo.row['@attributes'].name,
      ManuName: data.GetVehicleInfo.row['@attributes'].brand,
      catalog: data.GetVehicleInfo.row['@attributes'].catalog,
      vehicleid: data.GetVehicleInfo.row['@attributes'].vehicleid,
      ssd: data.GetVehicleInfo.row['@attributes'].ssd,
      lang: lang
    })
    commit('SET_CAR_ASSEMBLIES_BRAND', brand || null)
    commit('SET_VIN_ASSEMBLIES_TREE', tree)
  },
  async GET_CAR_ASSEMBLIES_LIST ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get('/api/detail_to')
    commit('SET_CAR_ASSEMBLIES_LIST', data)
  },
  async GET_PARTS ({ commit, rootState }, { model, car, assembly, filter, page, name }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    let url = `api/detail/${model}/${car}/${assembly}`
    if (name.startsWith('to-')) {
      url = `api/detail_to/${model}/${car}/${assembly}`
    }
    const { data: parts } = await this.$axios.get(url)
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL

    const geo = this.$auth.$storage.getUniversal('geo')
    const productsData = {
      oem: parts.oem,
      cross: parts.cross,
      currency: geo.currency_name,
      country: geo.country,
      latitude: geo.lat,
      longitude: geo.lng
    }

    if (filter === 'nearest') {
      productsData.nearby = 1
    }
    if (filter === 'price') {
      productsData.nearby = 0
    }
    if (filter === 'brand') {
      productsData.orderByBrand = true
    }

    const { data: products } = await this.$axios.post(`api/products?page=${page}`, {
      ...productsData
    })
    commit('SET_PARTS', {
      parts,
      products
    })
  },
  async GET_OEM ({ commit, rootState }, data) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    data.language = this.$i18n.locales.find(el => el.code === this.$i18n.locale).iso.replace('-', '_')
    const { data: products } = await this.$axios.post('api/laximo/oem', data)

    if (!Array.isArray(products.Category)) {
      products.Category = [products.Category]
    }

    products.Category.forEach(category => {
      if (!Array.isArray(category.Unit)) {
        category.Unit = [category.Unit]
      }
      category.Unit.forEach(unit => {
        if (!Array.isArray(unit.Detail)) {
          unit.Detail = [unit.Detail]
        }
      })
    })

    const parts = products.Category

    commit('SET_VIN_PARTS', { ...parts })
    commit('SET_CAR_ASSEMBLIES_BRAND', products.GetVehicleInfo.row['@attributes'])
  },
  async GET_OEM_BY_IMAGE ({ commit, rootState }, data) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    data.language = this.$i18n.locales.find(el => el.code === this.$i18n.locale).iso.replace('-', '_')
    const { data: products } = await this.$axios.post('api/laximo/oem/image', data)
    const parts = []
    parts.image = products.GetUnitInfo.row['@attributes']
    parts.oem = products.ListDetailsByUnit.row.filter(el => el['@attributes'].codeonimage && el['@attributes'].oem)
    parts.codes = products.ListImageMapByUnit.row.filter(el => (parts.oem.map(el => el['@attributes'].codeonimage)).includes(el['@attributes'].code))

    commit('SET_VIN_PARTS', { ...parts })
  },

  async GET_PART ({ commit, rootState, state }, { article, page, manufacturer, assembly }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const url = `api/search/articlenumber/${article}/${manufacturer}/${assembly}`

    const { data: oems } = await this.$axios.get(url)
    commit('SET_SEARCH_OEMS', oems)

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.post(`/api/v2/products?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}`, {
      country: 1,
      currency: 'AZN',
      ...state.search_oems
    })

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)

    if (page > 1) {
      commit('SET_SEARCH_PARTS', [...state.search_parts, ...products])
    } else {
      commit('SET_SEARCH_PARTS', products)
    }
    commit('SET_LOADING', false)
  },
  async GET_PARTS_BY_VIN ({ commit, rootState, state }, { oem, page }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL

    const { data: oems } = await this.$axios.get(`api/laximooem/${oem}`)
    commit('SET_SEARCH_OEMS', oems)

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.post(`/api/v2/products?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}`, {
      country: 1,
      currency: 'AZN',
      ...state.search_oems
    })

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)

    if (page > 1) {
      commit('SET_SEARCH_PARTS', [...state.search_parts, ...products])
    } else {
      commit('SET_SEARCH_PARTS', products)
    }
    commit('SET_LOADING', false)
  },
  async GET_PART_BY_BRAND ({ commit, rootState, state }, { brand }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const url = `api/lg/${brand}`

    const { data: oems } = await this.$axios.get(url)
    commit('SET_SEARCH_OEMS', oems)

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.post(`/api/v2/products?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}`, {
      country: 1,
      currency: 'AZN',
      ...state.search_oems
    })

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)

    commit('SET_SEARCH_PARTS', products)
    commit('SET_LOADING', false)
  },

  async GET_MOTOR_TYPES ({ commit }, { car }) {
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get(`/api/cardetail/${car}`)
    commit('SET_MOTOR_TYPES', data)
  },
  async GET_CART ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    try {
      const geo = this.$auth.$storage.getUniversal('geo')
      const currency = {
        currency: geo.currency_name
      }
      const { data } = await this.$axios.get(`api/cart?${serialize(currency)}`)
      const cart = data?.data || []
      const cartWithQuntity = cart.map(item => {
        item.quantity = 1
        return item
      })

      commit('SET_CART', cartWithQuntity)
      return data.data
    } catch (e) {
      throw Error(this.app.i18n.t('errors.fetch_cart'))
    }
  },

  async ADD_TO_CART ({ dispatch }, { id }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.post('api/cart', { id })
    await dispatch('GET_CART')
    return data.id
  },
  async REMOVE_FROM_CART ({ dispatch }, { id }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    await this.$axios.delete(`api/cart/${id}`)
    await dispatch('GET_CART')
  },
  async GET_PRODUCT ({ commit }, { id, currency }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data: res } = await this.$axios.post('/api/product', {
      id,
      currency
    })
    commit('SET_PRODUCT', res.data)
    return res
  },
  async ORDER_PRODUCT (state, data) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data: res } = await this.$axios.post('/api/order', data)
    return res
  },
  async GET_DELIVERY_METHODS ({ commit }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.get('/api/delivery')
    commit('SET_DELIVERY_METHODS', data)
    return data
  },
  async GET_ORDERS ({ commit }, { page }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.get(`/api/order?page=${page}`)
    commit('SET_ORDERS', data)
    return data
  },
  async SET_ORDER_STATUS (state, { id }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.post('/api/order/statuses', {
      orders: {
        id
      },
      order_statuses: {
        id: 9
      }
    })
    return data
  },
  async SEARCH_ASSEMBLY ({ commit, rootGetters }, { term }) {
    commit('SET_SEARCH_RESULTS', [])
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data } = await this.$axios.get(`/api/search/${term}`)
    commit('SET_SEARCH_RESULTS', data)
  },
  async SEARCH_VIN ({ commit, rootGetters }, { term }) {
    commit('SET_SEARCH_RESULTS', [])
    if (term.length !== 17) return
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    if (!rootGetters.isAuthenticated) {
      Vue.$swal.fire({
        icon: 'warning',
        width: 300,
        title: this.$i18n.t('vin.auth'),
        showConfirmButton: false,
        timer: 5000,
        customClass: 'custom_sweetalert'
      })
    } else {
      const carByVin = []
      const lang = this.$i18n.locales.find(el => el.code === this.$i18n.locale).iso.replace('-', '_')
      await this.$axios.post('/api/auto/vin', { vin: term, language: lang })
        .then(res => {
          const data = res.data
          carByVin.cars = []
          carByVin.product = []
          carByVin.carByVin = false
          if (data['@attributes']) {
            carByVin.carByVin = {
              name: data['@attributes'].name,
              ssd: data['@attributes'].ssd,
              vehicleId: data['@attributes'].vehicleid,
              catalog: data['@attributes'].catalog,
              brand: data['@attributes'].brand,
              lang: lang
            }
          }

          commit('SET_SEARCH_RESULTS', carByVin)
        })
        .catch(err => {
          Vue.$swal.fire({
            icon: 'warning',
            width: 300,
            title: err?.response?.data?.error ?? this.$i18n.t('system_error'),
            showConfirmButton: false,
            timer: 5000,
            customClass: 'custom_sweetalert'
          })
        })
    }
  },
  async GET_DISMANTLES ({ commit, rootState }, { page }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data: dismantles } = await this.$axios.get(`api/dismantles?page=${page}`)
    commit('SET_DISMANTLES', dismantles)
  },
  async GET_DISMANTLE ({ commit, rootState }, { id }) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data } = await this.$axios.get(`api/dismantles/${id}`)
    commit('SET_DISMANTLE', data?.data || {})
  },

  // search
  async GET_SPARE_PARTS ({ commit }) {
    commit('SET_LOADING', true)
    commit('SET_SPARE_PARTS', [])
    commit('SET_BRANDS', [])
    commit('SET_MODELS', [])
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data: parts } = await this.$axios.get('api/ehisse')
    commit('SET_SPARE_PARTS', parts)
    commit('SET_SEARCH_LANG', this.$i18n.locale)
    commit('SET_LOADING', false)
  },
  async GET_BRANDS ({ commit }, payload) {
    commit('SET_LOADING', true)
    commit('SET_BRANDS', [])
    commit('SET_MODELS', [])
    if (!payload) {
      commit('SET_LOADING', false)
      return
    }
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data: brands } = await this.$axios.get(`api/ehisse/${payload}`)
    commit('SET_BRANDS', brands)
    commit('SET_LOADING', false)
  },
  async GET_MODELS ({ commit }, { sparePart, brand }) {
    commit('SET_LOADING', true)
    commit('SET_MODELS', [])
    if (!brand) {
      commit('SET_LOADING', false)
      return
    }
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data: models } = await this.$axios.get(`api/ehisse/${sparePart}/${brand}`)
    commit('SET_MODELS', models)
    commit('SET_LOADING', false)
  },
  async GET_TYPES ({ commit }, { sparePart, brand, model }) {
    commit('SET_LOADING', true)
    commit('SET_TYPES', [])
    if (!model) {
      commit('SET_LOADING', false)
      return
    }
    this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
    const { data: types } = await this.$axios.get(`api/ehisse/${sparePart}/${brand}/${model}`)
    commit('SET_TYPES', types)
    commit('SET_LOADING', false)
  },
  async GET_SEARCH_PARTS ({ commit, state }, {
    sparePart,
    brand = null,
    model = null,
    type = null,
    sortBy = null,
    sortOrder = 'desc',
    page = false
  }) {
    commit('SET_LOADING', true)

    commit('SET_SEARCH_SORT_BY', sortBy ?? 'price')
    commit('SET_SEARCH_SORT_ORDER', sortOrder)
    if (page) {
      commit('SET_SEARCH_PAGE', ++state.search_page)
    } else {
      if (!sortBy) {
        this.$axios.defaults.baseURL = this.$env.CATALOG_API_URL
        const { data: oems } = await this.$axios.post('api/ehisse/search', {
          assemblyGroupNodeId: sparePart,
          manuId: brand,
          modId: model,
          carId: type
        })
        commit('SET_SEARCH_OEMS', oems)
        commit('SET_SEARCH_PAGE', 1)
      }
    }

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.post(`/api/v2/products?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}`, {
      country: 1,
      currency: 'AZN',
      ...state.search_oems
    })

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)

    if (page) {
      commit('SET_SEARCH_PARTS', [...state.search_parts, ...products])
    } else {
      commit('SET_SEARCH_PARTS', products)
    }
    commit('SET_LOADING', false)
  },

  async FILTER_PARTS ({ commit, state }, by) {
    commit('SET_LOADING', true)
    commit('SET_SEARCH_SORT_BY', by)
    commit('SET_SEARCH_SORT_ORDER', state.search_sort_order === 'desc' ? 'asc' : 'desc')

    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const {
      data: {
        data: products,
        meta
      }
    } = await this.$axios.post(`/api/v2/products?page=${state.search_page}&orderBy=${state.search_sort_by}&sort=${state.search_sort_order}`, {
      country: 1,
      currency: 'AZN',
      ...state.search_oems
    })

    commit('SET_LAST_PAGE', meta.last_page)
    commit('SET_META', meta)
    commit('SET_SEARCH_PARTS', products)
    commit('SET_LOADING', false)
  },

  async GET_SEARCH_PRODUCT ({ commit }, payload) {
    this.$axios.defaults.baseURL = this.$env.BASE_API_URL
    const { data: { data: part } } = await this.$axios.post('/api/v2/product',
      {
        id: payload,
        currency: 'AZN'
      })
    commit('SET_SEARCH_PART', part)
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
