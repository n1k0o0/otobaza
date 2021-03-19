export default function ({ app, $axios, store }) {
  $axios.onError(error => {
    store.dispatch('UI/SET_ERROR', error)
  })

  $axios.onRequest(config => {
    config.headers.common.Accept = 'application/json'
    config.headers.common['Content-Type'] = 'application/json'
    config.headers.common['Content-Language'] = app.i18n.locale
    config.headers.common['Accept-Language'] = app.i18n.locale
    config.headers.common.HTTP_ACCEPT_LANGUAGE = app.i18n.locale
    config.headers.common.HTTP_CONTENT_LANGUAGE = app.i18n.locale
  })
}
