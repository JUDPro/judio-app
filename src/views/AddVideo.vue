<template>
  <div class="add-video flex-settings">
    <div class="container">
      <div class="for-files flex-settings">
        <Judio ref="kek" :url_video="urlVideo" v-show="userVideoActive"></Judio>
        <div class="video" v-show="!userVideoActive">
          <form class="uploading-video select-off flex-settings black-border">
            <span
              class="material-icons-outlined"
              :class="{ active: isActive, 'non-active': isActive == false }"
            >
              upload_file
            </span>
            <div
              class="droppable black-border"
              :class="{ active: isActive }"
              @dragenter="isActive = true"
              @dragleave="isActive = false"
              @dragover.prevent=""
              @drop.prevent="fileFromBox"
            ></div>
            <div
              class="select-file flex-settings"
              :class="{ 'non-active': isActive }"
            >
              <label
                for="files"
                class="upl-video-btn flex-settings black-border"
                >Select a file</label
              >
              <input
                id="files"
                style="visibility:hidden;"
                type="file"
                accept="video/*"
                @change="fileFromInput"
              />
              <span>or throw it here</span>
            </div>
          </form>
        </div>
        <div class="preview-for-video">
          <!--div class="preview flex-settings" v-if="!userVideoActive">
            Preview
          </div-->
          <canvas ref="pos"></canvas>
          <div class="preview flex-settings">
            <span class="material-icons-outlined">add_circle_outline</span>
          </div>
        </div>
      </div>

      <div class="for-info flex-settings">
        <div class="info-of-video">
          <div class="name-video black-border">
            <input
              v-model="title"
              class="info-inp"
              type="text"
              placeholder="Title of the video"
              maxlength="50"
            />
            <span class="material-icons-outlined select-off">create</span>
          </div>
          <div class="description-video black-border">
            <textarea
              v-model="description"
              class="info-inp"
              type="text"
              placeholder="Description"
              maxlength="1000"
              size="100px"
            >
            </textarea>
            <span class="material-icons-outlined select-off">create</span>
          </div>
        </div>
        <div class="undo-add">
          <div class="undo flex-settings black-border" type="button">
            Undo
          </div>
          <div
            class="push-video flex-settings black-border"
            type="button"
            @click="addNewVideo"
          >
            Add video
          </div>
        </div>
        <!--div class="tags">
                    <span class="select-off info-inp">Tags:</span>
                </div-->
      </div>
    </div>
  </div>
</template>

<script>
import Judio from "../components/Judio";

export default {
  name: "add-video",
  components: {
    Judio,
  },
  data: () => ({
    isActive: false,
    userVideoActive: false,
    title: "",
    description: "",
    preview: "",
    urlVideo: "",
    video: "",
    initialVideo: "",
  }),
  methods: {
    //функция для добавления новых файлов в storage (выполнено через store)
    fileFromInput(e) {
      let i = e.target.files[0];
      return i;
    },
    fileFromBox(e) {
      const localFile = e.dataTransfer.files[0];
      this.isActive = false;
      this.userVideoActive = true;
      this.urlVideo = URL.createObjectURL(e.dataTransfer.files[0]);
      this.video = localFile;
      let v = this.initialVideo;
      let p = this.$refs.pos.getContext("2d");
      console.log(v + " " + p);
      p.drawImage(v, 0, 0);
    },
    addNewVideo() {
      this.$store.state.video.title = this.title;
      this.$store.state.video.description = this.description;
      this.$store.dispatch("addObj", this.video);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initialVideo = this.$refs.kek.$refs.video;
      console.log(this.$refs.kek.$refs.video);
    });
    
  },
};
</script>

<style>
.add-video {
  height: 100%;
  margin-left: 90px;
}
.container {
  position: relative;
  width: auto;
  height: 830px;
  display: flex;
  flex-direction: column;
}
.uploading-video {
  background-color: #ededed;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.upl-video-btn {
  width: 170px;
  height: 40px;
  border-radius: 7px;
  font-size: 24px;
  background-color: #009fc2;
  color: #fff;
  cursor: pointer;
}
.select-file {
  position: absolute;
  flex-direction: column;
  width: 170px;
  height: 50px;
  z-index: 10;
  opacity: 1;
}
.droppable {
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0;
}
.user-video {
  widows: 100%;
  height: 100%;
}
.preview-for-video {
  height: 415px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.preview {
  height: 200px;
  width: 100%;
  border: solid 1px #000;
}

.for-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info-of-video {
  width: 860px;
  height: 415px;
}
.name-video {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.description-video {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  display: flex;
}
.info-inp {
  font-size: 24px;
  font-family: "Roboto Regular";
  padding: 0 20px 0 20px;
  margin: 0;
  width: 100%;
  height: 100%;
  border-width: 0;
  outline: none;
}
.description-video > textarea {
  padding: 15px 20px 15px 20px;
  height: auto;
  resize: none;
}
.tags {
  width: 150px;
  height: 100%;
}
.undo-add {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 430px;
  right: 0;
  bottom: 0;
}
.undo-add > div {
  width: 200px;
  height: 40px;
  border-radius: 7px;
  font-size: 24px;
  cursor: pointer;
}
.push-video {
  background-color: #da2222;
  color: #fff;
}
.undo {
  background-color: #ededed;
}
</style>

<style scoped>
.video {
  width: 730px;
  height: 415px;
  margin: 20px;
}
.material-icons-outlined {
  color: #505050;
  font-size: 35px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  padding: 5px;
}
.uploading-video > .material-icons-outlined {
  position: absolute;
  width: 100px;
  height: 100px;
  font-size: 100px;
  color: #009fc2;
}
.select-off {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
}
.flex-settings {
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  opacity: 1;
  z-index: 10;
}
.non-active {
  opacity: 0;
  z-index: 0;
}
.black-border {
  border: solid 1px #000;
}
</style>
