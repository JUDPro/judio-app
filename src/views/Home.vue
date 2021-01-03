<template>
    <div class="content-home">
        <div class="video" v-for="video in videos" :key="video.id">
            <video
                src="videos.id"
                controls="controls"
                loop="loop" 
                poster=""
                >{{video.id}}
            </video>
        </div>
    </div>
</template>

<script>
import {firebase} from '../plugins/firebase'

export default {
    name: 'Home',

    data: () => ({
        idVideo: '',
        videos: { 
            id: ''
        },
    }),

    methods: {
        writeData(Id, videoUrl) {
            firebase.database().ref('users/testUser/userVideo/').get({
                videoUrl:  videoUrl,
            })
        },
    },
    
    mounted: function () {
        this.writeData(this.idVideo, this.videos.id)
    },
    
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