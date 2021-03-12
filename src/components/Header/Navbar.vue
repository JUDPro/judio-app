<template>
    <header class="navbar">
        <Menu></Menu>
        <div class="icons">
            <Avatar
                v-if="$store.state.Logged == false"
                @click.native="$store.dispatch('setOpenDialogWindow', 'regist')"
                >
            </Avatar>
            <Avatar 
                v-if="$store.state.Logged == true"
                @click.native="$router.push('Profile')"
                >
            </Avatar>
            <Home></Home>
            <SignUp
                class="user-name" 
                v-if="$store.state.Logged == false"
                fontSize="24px"
                @click.native="$store.dispatch('setOpenDialogWindow', 'regist')"
                >{{$store.state.user.email}}
            </SignUp>
            <SignUp
                class="user-name" 
                v-if="$store.state.Logged == true"
                @click.native="$router.push('Profile')"
                >{{$store.state.user.email}}
            </SignUp>
        </div>
        <div>
            <SignIn v-if="$store.state.Logged == false" @click.native="$store.dispatch('setOpenDialogWindow', 'login')"></SignIn>
            <Exit v-if="$store.state.Logged == true" @click.native="outAccount"></Exit>
        </div>
    </header>
</template>

<script>
import Avatar from './ButtonHeader/Avatar'
import Exit from './ButtonHeader/Exit'
import SignIn from './ButtonHeader/Sign-in'
import SignUp from './ButtonHeader/Sign-up'
import Menu from './ButtonHeader/Menu'
import Home from './ButtonHeader/Home'
import { firebase } from '../../plugins/firebase'

export default {
    name: 'Navbar',
    components: {
        Avatar,
        Exit,
        SignIn,
        SignUp,
        Menu,
        Home,
    },
    data: () => ({}),
    methods: {
        outAccount() {
            firebase.auth().signOut()
            .then(() => {
                let userInfo = {
                    email: 'Anon',
                    userId: ''
                }
                this.$store.dispatch('setUser', userInfo)
                this.$store.dispatch('setLogged', false)
            })
            .catch((error) => {
                console.log('error')
            })
        }
    }
}
</script>

<style>
.navbar {
    background-color: white;
    position: fixed;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90px;
    height: 100%;
    border-right: 1px solid #505050;
    z-index: 200;
}
.icons {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
a {
    text-decoration: none;
    color: black;
}
</style>
