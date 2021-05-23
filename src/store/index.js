import Vue from "vue";
import Vuex from "vuex";
import { firebase } from "../plugins/firebase";

import getDataOfVideo from './modules/getDataOfVideo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenDialogWindow: false,
    user: {
      uid: "",
      name: "",
      email: "Anon",
      photoURL: "https://firebasestorage.googleapis.com/v0/b/judio-10aa1.appspot.com/o/users%2Favatars%2Fdefault-avatar.jpg?alt=media&token=bb03c08d-8e99-492a-b0c9-2fab89fef8f3",
    },
    video: {
      id: "",
      url: "",
      title: "",
      description: "",
      preview: "https://firebasestorage.googleapis.com/v0/b/judio-10aa1.appspot.com/o/videos%2Fpreviews%2Fdefault-preview.jpg?alt=media&token=c2b3b050-e1c9-4c6c-84cc-27f1bf8bd209",
    },
    Logged: false,
    navbarIsActive: false,
    urlVideo: "",
    fileVideo: "",
    videoIsActive: false,
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
    setVideo(state, i) {
      state.urlVideo = i.url
      state.fileVideo = i.file
      state.videoIsActive = i.active
    }
  },
  actions: {
    setVideo(video, i) {
      video.commit("setVideo", i)
    },
    setOpenDialogWindow(isOpenDialogWindow, i) {
      isOpenDialogWindow.commit("setOpenDialogWindow", i);
    },
    async setUser(user, i) {
      await user.commit("setUser", i);
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
        await storageRef.ref().child("videos/" + i.name).put(i)
          // await j.on("state_changed", (snapshot) => { //не знаю как сделать прогрессбар, ибо он возвращает промис, из-за чего ломается загрузка  
          //   const progress =
          //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //   console.log("Upload is " + progress + "% done");
          // });
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
          preview: this.state.video.preview,
        });
    },
  },
  modules: {
    dataOfVideo: getDataOfVideo
  },
});
