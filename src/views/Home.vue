<template>
  <div class="content-home">
    <div class="video" v-for="video in listVideo" :key="video.id">
      <img :src="video.preview" alt="">
    </div>
  </div>
</template>

<script>
import { firebase } from "../plugins/firebase";
import Judio from "../components/Judio";

export default {
  name: "Home",
  components: {
    Judio,
  },
  data: () => ({
    listVideo: [],
    width: "400px",
    height: "250px",
  }),
  methods: {
    async getData() {
      await firebase
        .firestore()
        .collection("videos")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.listVideo.push(doc.data());
          });
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.content-home {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
  margin-left: 90px;
}
.video {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video > img {
  width: 100%;
}
</style>
