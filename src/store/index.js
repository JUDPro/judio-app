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
        const j = await storageRef.ref().child("videos/" + i.name);
        j.put(i).on("state_changed", (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        });
        uplVideo.commit("uplVideo", storageRef.ref().child("videos/" + i.name).getDownloadURL())
      } catch (error) {
        console.log(error);
      }
    },
    async addObj(state, i) {
      try {
        await firebase
          .firestore()
          .collection("videos")
          .add({
            uid: this.state.user.uid,
            url: this.state.video.url,
            title: i.title,
            description: i.description,
            preview: "test",
          })
          .then(() => {
            console.log(this.state.video.url);
          });
      } catch (error) {
        console.log(error);
      }
    },
    // addNewVideo(state, obj, video) {
    //   this.dispatch("uploadVideo", video);
    //   this.dispatch("addObj", obj)
    // }
  },
  modules: {},
});
