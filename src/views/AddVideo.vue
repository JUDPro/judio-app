<template>
    <div class="add-video flex-settings">
        <div class="container">
            <div id="uploading-video" class="select-off flex-settings">
                <div class="file-select-style">
                    <label for="files" class="upl-video-btn flex-settings">Select a file</label>
                    <input
                        id="files"
                        style="visibility:hidden;"
                        type="file"
                        accept="video/*"
                        @change="fileFunc"
                    >
                </div>
                or throw it here
                <div
                    class="droppable"
                    @dragenter="isActive = true"
                    @dragleave="isActive = false"
                    @drop.prevent="someM"
                    :class="{'active-input': isActive}"
                >
                </div>
            </div>
            <div class="info-of-video">
                <div class="name-video">
                    <input
                        class="info-inp"
                        type="text"
                        placeholder="Title of the video"
                        maxlength="50"
                    >
                    <span class="material-icons-outlined select-off">create</span>
                </div>
                <div class="description-video">
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
            <div class="video-editing">
                <div class="tools select-off">
                    <div class="tool flex-settings">
                        <span class="material-icons-outlined">content_cut</span>
                    </div>
                    <div class="tool flex-settings">
                        <span class="material-icons-outlined">undo</span>
                    </div>
                    <div class="tool flex-settings">
                        <span class="material-icons-outlined">redo</span>
                    </div>
                </div>
                <div class="track"></div>
            </div>
            <div
                class="push-video flex-settings"
                type="button"
            >
                Add video
            </div>
        </div>
    </div>
</template>

<script>
import { firebase } from '../plugins/firebase'

export default {
    name: 'add-video',
    data: () => ({
        isActive: false,
    }),
    methods: {
        //функция для добавления новых файлов в storage
        fileFunc(e) {
            let fileMy = e.target.files[0]
            console.log(fileMy.name)
            var storageRef = firebase.storage().ref();
            var mountainsRef = storageRef.child(fileMy.name);
            mountainsRef.put(fileMy).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        },
        someM() {
            console.log('drop!');
        }
    },
    mounted() {
        this.$el.addEventListener('drop', this.someM)
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
#uploading-video {
    position: relative;
    background-color: #EDEDED;
    width: 730px;
    height: 415px;
    margin-right: 30px;
    flex-direction: column;
}
.upl-video-btn {
    width: 170px;
    height: 40px;
    border-radius: 7px;
    font-size: 24px;
    background-color: #009FC2;
    border: solid 1px #000;
    color: #fff;
    cursor: pointer;
}
.file-select-style {
    width: 170px;
    height: 40px;
    margin-bottom: 5px;
    z-index: 20;
}
.droppable {
    position: absolute;
    border: 1px solid #000;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.active-input {
    border: 3px dotted #009FC2;
}
.info-of-video {
    width: 860px;
    height: 415px;
}
.name-video {
    width: 100%;
    height: 50px;
    border: solid 1px #000;
    display: flex;
    align-items: center;
}
.description-video {
    width: 100%;
    height: 345px;
    border: solid 1px #000;
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
.video-editing {
    position: relative;
    width: 100%;
    height: 200px;
    border: solid 1px #000;
    align-self: flex-start;
    display: flex;
}
.tools {
    position: absolute;
    width: 60px;
    height: 200px;
    border-right: solid 1px #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.tool {
    width: 40px;
    height: 40px;
    background-color: #EDEDED;
    border-radius: 50%;
}
.track {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-left: 60px;
}
.select-off {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
}
.push-video {
    position: absolute;
    width: 200px;
    height: 40px;
    background-color: #DA2222;
    border: solid 1px #000;
    border-radius: 7px;
    right: 0;
    bottom: 0;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
}
.flex-settings {
    display: flex;
    justify-content: center;
    align-items: center;
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
.tool > .material-icons-outlined {
    width: 24px;
    height: 24px;
    font-size: 24px;
}
</style>