import Vue from "vue";
import Vuex, { Store } from "vuex";
import { firebase } from "../plugins/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenDialogWindow: false,
    user: {
      uid: "",
      email: "Anon",
      userAvatar: "",
    },
    video: {
      url: "",
      title: "",
      description: "",
      preview: "",
    },
    Logged: false,
    navbarIsActive: false,
  },
  mutations: {
    setOpenDialogWindow(state, i) {
      state.isOpenDialogWindow = i;
    },
    setUser(state, i) {
      state.user = i;
    },
    setLogged(state, i) {
      state.Logged = i;
    },
    setNavbarIsActive(state, i) {
      state.navbarIsActive = i;
    },
    uplVideo(state, i) {
      state.video.url = i;
    },
  },
  actions: {
    setOpenDialogWindow(isOpenDialogWindow, i) {
      isOpenDialogWindow.commit("setOpenDialogWindow", i);
    },
    setUser(user, i) {
      user.commit("setUser", i);
    },
    setLogged(Logged, i) {
      Logged.commit("setLogged", i);
    },
    setNavbarIsActive(setNavbarIsActive, i) {
      setNavbarIsActive.commit("setNavbarIsActive", i);
    },
    async uploadVideo(uplVideo, i) {
      var storageRef = firebase.storage();
      try {
        var j = await storageRef.ref();
        j.child("videos/" + i.name)
          .put(i)
          .on("state_changed", (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          });
        let urlI = await storageRef
          .ref()
          .child("videos/" + i.name)
          .getDownloadURL();
        uplVideo.commit("uplVideo", urlI);
      } catch (error) {
        console.log(error);
        console.log(i);
      }
    },
    async addObj(state, i) {
      await this.dispatch("uploadVideo", i);
      firebase
        .firestore()
        .collection("videos")
        .add({
          uid: this.state.user.uid,
          url: this.state.video.url,
          title: this.state.video.title,
          description: this.state.video.description,
          preview: "test",
        });
    },
    // addNewVideo(state, obj, video) {
    //   this.dispatch("uploadVideo", video);
    //   this.dispatch("addObj", obj)
    // }
  },
  modules: {},
});
