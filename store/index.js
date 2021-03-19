import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// Modules
import UI from './UI'
import User from './User'
import Catalog from './Catalog'

export default {
  state: () => ({
    locales: ['az', 'ru', 'en'],
    locale: 'az',
    auth: {
      loggedIn: false,
      user: null
    }
  }),
  getters,
  actions,
  mutations,
  strict: false,
  modules: {
    UI,
    User,
    Catalog
  }
}
