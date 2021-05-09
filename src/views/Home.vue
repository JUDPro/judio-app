<template>
  <div class="content-home">
    <div class="video" v-for="video in listVideo" :key="video.id">
      <Judio :width="width" :height="height" :url_video="video">
        {{ video.id }}
      </Judio>
    </div>
    <img class="qwe" src="" alt="">
    <canvas class="test" :width="width" :height="height"></canvas>
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
    let j = document.querySelector('.test')
    let c = j.getContext('2d')
    c.drawImage(this.listVideo[0], 0, 0, "400px", "250px")
    const dataUrl = c.toDataUrl()
    querySelector('.qwe').src = dataUrl
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
.test {
  margin: 20px;
}
</style>
