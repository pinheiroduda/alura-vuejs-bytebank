import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const estado = {
  token: null,
  usuario: {}
}

export default new Vuex.Store({
  state: estado
})
