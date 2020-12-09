<template>
    <header class="header">
        <div class="line-header">
            <Avatar></Avatar>
            <div class="user-name">{{$store.state.user.email}}</div>
            <!--Exit></Exit-->
            <SignIn @click.native="$store.dispatch('setOpenSignIn', true)"></SignIn>
            <!--AuthForm :showDialog=showDialog /-->
        </div>
    </header>
</template>

<script>
import Avatar from './ButtonHeader/Avatar'
import Exit from './ButtonHeader/Exit'
import SignIn from './ButtonHeader/Sign-in'

export default {
    name: 'Header',
    components: {
        Avatar,
        Exit,
        SignIn
    },
    data: () => ({
        showDialog: false
    }),
}
</script>

<style>
.header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
}

.line-header {
    display: flex;
    align-items: center;
    width: 80%;
    height: 100%;
    border-bottom: 3px solid #505050;
}

.user-name {
    flex-grow: 1;
    margin-left: 20px;
    font-size: 20pt;
}
</style>
