<template>
  <div class="content">
    <div class="user-actions">
      <div class="custom-functions">
        <Judio :width="width" :height="height" :url_video="video.url"></Judio>
        <div class="info-block">
          <span class="title">{{ video.title }}</span>
          
          <span class="description">{{ video.description }}</span>
        </div>
      </div>
      <!-- <div class="comments"></div> -->
    </div>
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
    width: "1050px",
    height: "600px",
    video: "",
    path: ""
  }),
  methods: {
    async takeVideo() {
      await firebase
        .firestore()
        .collection("videos")
        .doc(this.id)
        .get()
        .then((doc) => {
          this.video = doc.data();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.takeVideo();
    this.path = this.$router.history.current.name
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-actions {
  display: flex;
}
.custom-functions {
  display: flex;
  flex-direction: column;
}
.info-block {
  width: 1050px;
  height: 180px;
  margin: 20px;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 30px;
  width: 40%;
  padding: 10px;
  border-bottom: solid 1px #000;
}
.description {
  font-size: 24px;
  padding: 10px;
  border-bottom: solid 1px #000;
}
.comments {
  margin: 20px;
  width: 480px;
  height: 600px;
  border: solid 1px black;
}
</style>
