import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAlXPLkziiRHXj9NrexKEbtW9JmGzxTZ0o',
    libraries: 'places'
  }
})
