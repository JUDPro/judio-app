<template>
    <div class="add-video flex-settings">
        <div class="container">
            <Judio :url_video="urlVideo"></Judio>
            <div class="video">
                <form class="uploading-video select-off flex-settings black-border">
                    <span
                        class="material-icons-outlined"
                        :class="{active: isActive, 'non-active': isActive == false}"
                    >
                        upload_file
                    </span>
                    <div
                        class="droppable black-border"
                        :class="{active: isActive}"
                        @dragenter="isActive = true"
                        @dragleave="isActive = false"
                        @dragover.prevent=""
                        @drop.prevent="fileFromBox"
                    ></div>
                    <div class="select-file flex-settings" :class="{'non-active': isActive}">
                        <label for="files" class="upl-video-btn flex-settings black-border">Select a file</label>
                        <input
                            id="files"
                            style="visibility:hidden;"
                            type="file"
                            accept="video/*"
                            @change="fileFromInput"
                        >
                        <span>or throw it here</span>
                    </div>
                </form>
            </div>
            <div class="info-of-video">
                <div class="name-video black-border">
                    <input
                        class="info-inp"
                        type="text"
                        placeholder="Title of the video"
                        maxlength="50"
                    >
                    <span class="material-icons-outlined select-off">create</span>
                </div>
                <div class="description-video black-border">
                    <textarea
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
                <div
                    class="undo flex-settings black-border"
                    type="button"
                >
                    Undo
                </div>
                <div
                    class="push-video flex-settings black-border"
                    type="button"
                >
                    Add video
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Judio from '../components/Judio'

export default {
    name: 'add-video',
    components: {
        Judio
    },
    data: () => ({
        isActive: false,
        urlVideo: 'https://firebasestorage.googleapis.com/v0/b/judio-10aa1.appspot.com/o/16188476771353.webm?alt=media&token=5be01c14-aa8c-4f09-b15c-0a32d630c63d',
    }),
    methods: {
        //функция для добавления новых файлов в storage (выполнено через store)
        fileFromInput(e) {
            this.$store.dispatch('uploadFile', e.target.files[0])
        },  
        fileFromBox(e) {
            this.isActive = false
            this.$store.dispatch('uploadFile', e.dataTransfer.files[0])
        },
    },
}
</script>

<style>
.add-video {
    width: 95%;
    height: 100%;
    margin-left: 90px;
}
.container {
    position: relative;
    width: auto;
    height: 830px;
    display: flex;
    flex-wrap: wrap;
}
.video {
    position: relative;
    width: 730px;
    height: 415px;
}
.uploading-video {
    position: absolute;
    background-color: #EDEDED;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
.upl-video-btn {
    width: 170px;
    height: 40px;
    border-radius: 7px;
    font-size: 24px;
    background-color: #009FC2;
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
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;
}
.user-video {
    widows: 100%;
    height: 100%;
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
    height: 345px;
    margin-top: 20px;
    display: flex;
}
.info-inp {
    font-size: 24px;
    font-family: 'Roboto Regular';
    padding: 0 20px 0 20px;
    margin: 0;
    width: 95%;
    height: 100%;
    border-width: 0;
    outline: none;
}
.description-video > textarea {
    padding: 15px 20px 15px 20px;
    height: 90%;
    resize: none;
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
    background-color: #DA2222;
    color: #fff;
}
.undo {
    background-color: #EDEDED;
}
</style>

<style scoped>
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
    color: #009FC2;
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