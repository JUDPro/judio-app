import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenDialogWindow: false,
    user: {
      uid: '',
      email: 'Anon',
      userAvatar: '',
      userVideo: {
        videoUrl: ''
      },
    },
    Logged: false,
  },
  mutations: {
    setOpenDialogWindow(state, i) {
      state.isOpenDialogWindow = i
    },
    setUser(state, i) {
      state.user = i
    },
    setLogged(state, i) {
      state.Logged = i
    }
  },
  actions: {
    setOpenDialogWindow(isOpenDialogWindow, i) {
      if (i == 'login') {
        isOpenDialogWindow.commit('setOpenDialogWindow', i)
      }
      if (i == 'regist') {
        isOpenDialogWindow.commit('setOpenDialogWindow', i)
      }
      if (i == false) {
        isOpenDialogWindow.commit('setOpenDialogWindow', i)
      }
    },
    setUser(user, i) {
      user.commit('setUser', i)
    },
    setLogged(Logged, i) {
      Logged.commit('setLogged', i)
    }
  },
  modules: {}
});
