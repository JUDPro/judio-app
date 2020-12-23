<template>
    <div class="AppHeader">
        <div class="content-header">
            <div class="user-info">
                <Avatar 
                    width="150px"
                >
                </Avatar>

                <SignUp
                    fontSize="36px"
                >{{$store.state.user.email}}
                </SignUp>
            </div>
            <div class="user-menu">
                <div 
                    v-if="$store.state.Logged == true" 
                    @click="addVideo()"
                    class="newVideo"
                    >Add video
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from './ButtonHeader/Avatar'
import SignUp from './ButtonHeader/Sign-up'
import { firebase } from '../../plugins/firebase'

export default {
    name: 'AppHeader',
    components: {
        Avatar,
        SignUp
    },
    methods: {
        addVideo() {

        },
    },
}
</script>

<style>
.AppHeader {
    position: relative;
    display: flex;
    justify-content: center;
    height: 230px;
    width: 100%;
}

.content-header {
    width: 80%;
    height: 100%;
    border-bottom: 3px solid #505050;
    display: flex;
    justify-content: space-between;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-menu {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.newVideo {
    width: 120px;
    height: 30px;
    font-size: 20pt;
    text-align: center;
    border: 1px solid black;
    cursor: pointer;
    margin-right: 20px;
}
</style>