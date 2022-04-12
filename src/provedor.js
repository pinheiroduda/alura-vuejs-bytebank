import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const estado = {
  token: null,
  usuario: {}
}

const mutations = {
  DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
    state.token = token
    state.usuario = usuario
  },
  DESLOGAR_USUARIO(state) {
    // eslint-disable-next-line no-extra-semi
    ;(state.token = null), (state.usuario = {})
  }
}

export default new Vuex.Store({
  state: estado,
  mutations
})
