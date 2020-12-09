import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenSignIn: false,
    user: {
      email: 'Anon',
      userId: '',
    },
  },
  mutations: {
    setOpenSignIn(state, i) {
      state.isOpenSignIn = i
    },
    setUser(state, i) {
      state.user = i
    }
  },
  actions: {
    setOpenSignIn(isOpenSignIn, i) {
      isOpenSignIn.commit('setOpenSignIn', i)
    },
    setUser(user, i) {
      user.commit('setUser', i)
    }
  },
  modules: {}
});
