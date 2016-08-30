import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  get (url, cb) {
    Vue.http.get(url).then( (response) => {
      cb(response)
    })
  },
  post (url, data, cb, errorCb) {
    Vue.http.post(url, data).then( (response) => {
      cb(response)
    }, (response) => {
      errorCb && errorCb(response)
    })
  }
}