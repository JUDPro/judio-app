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
                >
                </SignUp>
            </div>
            <div class="user-menu">

            </div>
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

.content-header {
    width: 80%;
    height: 100%;
    border-bottom: 3px solid #505050;
    display: flex;
    justify-content: space-between;
}

.user-info {
    display: flex;
    justify-content: start;
    align-items: center;
}
</style>