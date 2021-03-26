<template>
    <header class="profile-header">
        <div class="user-avatar">
            <img src="https://sun9-76.userapi.com/impf/NxH11vMrZ8oiFCGfPhfu31HNxrHwEgbc2BK86A/WeNZs2ReS7U.jpg?size=1080x926&quality=96&sign=257877d30d170bcc5fdb46dc186f150c&type=album" alt="">
        </div>
        <div class="user-info">
            <div class="user-nickname">{{$store.state.user.email}}</div>
            <div class="user-subscribers">
                <span>232301 subscribers</span>
            </div>
        </div>
        <div class="user-action">
            <div class="user-setting"></div>
            <div class="subscribe-btn">New video</div>
        </div>
    </header>
</template>

<script>
import { firebase } from '../plugins/firebase'

export default {
    name: 'AppHeader',

    data: () => ({
        urlVideo: '',
    }),

    methods: {
        addVideo() {
            let post = {
                urlVideo: this.urlVideo,
            }
            firebase.database().ref('users/testUser/userVideo/').push(post)
        },
    },
}
</script>

<style>
.profile-header {
    width: 1600px;
    height: 230px;
    border-bottom: solid 2px #000;
}
.user-avatar {
    width: 150px;
    height: 150px;
    margin: 40px;
    cursor: pointer;
}
.user-avatar > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    left: 0;
}
.user-info {
}
.user-nickname {
    width: auto;
    font-size: 36px;
}
.user-subscribers {
    width: 220px;
    font-size: 20px;
    display: flex;
    justify-content: center;
}
.user-action{
    right: 0;
}
</style>