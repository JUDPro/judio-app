import Vue from "vue";
import Vuex from "vuex";
import { firebase } from '../plugins/firebase';

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
    navbarIsActive: false,
    uplFileVideo: ''
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
    },
    setNavbarIsActive(state, i) {
      state.navbarIsActive = i
    },
    setUplFile(state, i) {
      state.uplFileVideo = i
    }
  },
  actions: {
    setOpenDialogWindow(isOpenDialogWindow, i) {
      isOpenDialogWindow.commit('setOpenDialogWindow', i)
    },
    setUser(user, i) {
      user.commit('setUser', i)
    },
    setLogged(Logged, i) {
      Logged.commit('setLogged', i)
    },
    setNavbarIsActive(setNavbarIsActive, i) {
      setNavbarIsActive.commit('setNavbarIsActive', i)
    },
    uploadFile(uplFile, i) {
      var storageRef = firebase.storage().ref();
      var mountainsRef = storageRef.child(i.name).put(i);
      mountainsRef.on('state_changed', (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' +  progress + '% done')
        switch(snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log('paused')
            break
          case firebase.storage.TaskState.RUNNING:
            console.log('run')
            break
        }
      },
      (error) => {
        console.log('error')
      },
      () => {
        mountainsRef.then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
        uplFile.commit('setUplFile', i)
      }
      )
    }
  },
  modules: {}
});
