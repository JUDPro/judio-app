<template>
    <div class="content-home">
        <div class="video" v-for="video in videos" :key="video.idVideo">
            <video
                src=videos.urlVideo
                controls="controls"
                loop="loop" 
                poster=""> 
            </video>
        </div>
        <div class="arrayTest" v-for="value in object" :key="value.id">
            {{ value }}
        </div>
    </div>
</template>

<script>
import {firebase} from 'firebase/database'

export default {
    name: 'Home',

    data: () => ({
        videos: { 
            idVideo: '' 
        },
    }),

    methods: {
        testAr() {

        },
        writeData(userId, urlVideo) {
            firebase.database().ref('posts/' + userId).set({
                urlVideo:  urlVideo,
            })
        },
    }
}
</script>

<style>
.content-home {
    position: relative;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-flow: wrap;
}

.video {
    background-color: grey;
    width: 380px;
    height: 220px;
    margin: 40px 0 0 0;
}

video {
    width: 100%;
    height: 100%;
}
</style>