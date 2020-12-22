<template>
    <div class="AppHeader">
        <div class="content">
            
        </div>
    </div>
</template>

<script>
import Avatar from './ButtonHeader/Avatar'
import SignUp from './ButtonHeader/Sign-up'

export default {
    name: 'AppHeader',
    components: {
        Avatar,
        SignUp
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

.content {
    width: 80%;
    height: 100%;
    border-bottom: 3px solid #505050;
    display: flex;
    justify-content: space-around;
}

.content > div {
    width: 300px;
    height: 60px;
}
</style>