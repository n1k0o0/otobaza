export default function ({ store }) {
  store.commit('UI/HIDE_MOBILE_MENU', false)
  store.commit('UI/CLOSE_SEARCH')
}
