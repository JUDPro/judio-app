<template>
  <div class="content">
    <Judio :width="width" :height="height" :url_video="url"></Judio>
  </div>
</template>

<script>
import Judio from "../components/Judio";
import { firebase } from "../plugins/firebase";

export default {
  props: ["id"],
  components: {
    Judio,
  },
  data: () => ({
      width: "950px",
      height: "520px",
      url: ''
  }),
  methods: {
    async takeVideo() {
      await firebase
        .firestore()
        .collection("videos")
        .doc(this.id)
        .get()
        .then((doc) => {
          this.url = doc.data().url;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.takeVideo();
  },
};
</script>

<style scoped>
.content {
  margin-left: 90px;
}
</style>
