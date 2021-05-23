<template>
  <div class="container fs-c">
    <!---------------------- Дроп через дроп хД ---------------------->
    <div class="dropzone" :style="{ width: width, height: height }">
      <span
        class="material-icons-outlined"
        :class="{
          active: isActive,
          'non-active': isActive == false,
        }"
      >
        upload_file
      </span>
      <div
        class="droppable"
        :class="{ active: isActive }"
        @dragenter="isActive = true"
        @dragleave="isActive = false"
        @dragover.prevent=""
        @drop.prevent="dropFile"
      ></div>
    </div>
    <!---------------------- Дроп через дроп хД ---------------------->
    <!---------------------- Дроп через инпут ---------------------->
    <div class="select-file fs-c" :class="{ 'non-active': isActive }">
      <label for="files" class="upload-video fs-c">Select a file</label>
      <input
        id="files"
        style="visibility:hidden;"
        type="file"
        accept="video/*"
        @change="inputFile"
      />
      <span>or throw it here</span>
    </div>
    <!---------------------- Дроп через инпут ---------------------->
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
  props: {
    width: {
      type: String,
      default: "730px",
    },
    height: {
      type: String,
      default: "415px",
    },
  },
  methods: {
    dropFile(e) {
      let video;
      const localFile = e.dataTransfer.files[0];
      this.isActive = false;
      video = {
        url: URL.createObjectURL(localFile),
        file: localFile,
        active: true,
      };
      this.$store.dispatch("setVideo", video);
    },
    inputFile(e) {
      let video;
      const localFile = e.target.files[0];
      this.isActive = true;
      video = {
        url: URL.createObjectURL(localFile),
        file: localFile,
        active: true,
      };
      this.$store.dispatch("setVideo", video);
    },
  },
};
</script>

<style scoped>
.dropzone {
  border: solid 1px #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.droppable {
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0;
}
.select-file {
  position: absolute;
  flex-direction: column;
  width: 170px;
  height: 50px;
  z-index: 10;
  opacity: 1;
}
.upload-video {
  width: 170px;
  height: 40px;
  border-radius: 7px;
  font-size: 24px;
  background-color: #009fc2;
  color: #fff;
  cursor: pointer;
  border: solid 1px #000;
}
.material-icons-outlined {
  position: absolute;
  width: 100px;
  height: 100px;
  font-size: 100px;
  color: #009fc2;
}
.active {
  opacity: 1;
  z-index: 10;
}
.non-active {
  opacity: 0;
  z-index: 0;
}
.fs-c {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
