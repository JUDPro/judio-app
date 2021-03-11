<template>
    <div class="content-home">
        <div class="video" v-for="video in userData.videos" :key="video.id">
            <video 
            :src="idVideo"
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
        idVideo: 'gs://judio-10aa1.appspot.com/15788215775460.webm',
        userData: { 
            id: 0,
            uid: '',
            userEmail: '',
            userAvatar: '',
            videos: {
                url: 'gs://judio-10aa1.appspot.com/16086600287720.webm'
            }
        },
    }),

    methods: {
        writeData() {
            return firebase.database().ref('users/testUser/userVideo/').get()
        }
    },
    
    mounted: function () {
        this.writeData();
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