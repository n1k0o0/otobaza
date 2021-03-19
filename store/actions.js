export default {
  async nuxtServerInit ({ commit }, { req, $axios, store, app }) {
    if (app.$auth.$storage.getUniversal('geo') === undefined) {
      await store.dispatch('UI/GET_GEO')
    } else {
      await store.commit('UI/SET_GEO', app.$auth.$storage.getUniversal('geo'))
    }
    if (app.$auth.$storage.getUniversal('search_tabs')) {
      await store.commit('UI/SET_SEARCH_TABS', app.$auth.$storage.getUniversal('search_tabs'))
    } else {
      app.$auth.$storage.setUniversal('search_tabs', [])
      await store.commit('UI/SET_SEARCH_TABS', [])
    }
  }
}
