<template>
  <div class="content-home">
    <div class="video" v-for="video in listVideo" :key="video.id">
      <Judio :width="width" :height="height" :url_video="video">
        {{ video.id }}
      </Judio>
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
            this.listVideo.push(doc.data().url);
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
</style>
