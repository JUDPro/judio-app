<template>
    <header class="header">
        <div class="line-header">
            <Avatar></Avatar>
            <div class="user-name">User name</div>
            <!--Exit></Exit-->
            <SignIn @click.native="showDialog = true"></SignIn>
            <AuthForm :showDialog=showDialog />
        </div>
    </header>
</template>

<script>
import Avatar from './ButtonHeader/Avatar'
import Exit from './ButtonHeader/Exit'
import SignIn from './ButtonHeader/Sign-in'
import AuthForm from '../AuthForm'

export default {
    name: 'Header',
    components: {
        Avatar,
        Exit,
        SignIn,
        AuthForm,
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
    width: 85%;
    height: 100%;
    border-bottom: 2px solid #505050;
}

.user-name {
    flex-grow: 1;
    margin-left: 20px;
}
</style>
