// Create a new store instance.
import {createStore} from 'vuex';

const store = createStore({
  state () {
    return {
      user: '',
      token: '',
    }
  },
  mutations: {
  setUser(state, userConnect) {
    return state.user = userConnect;
  },
  setToken(state, tokenConnect) {
    return state.token = tokenConnect;
  },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.token;
    },
  }
})
export default store
