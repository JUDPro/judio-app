<template>
    <header class="navbar" :class="{activeNavbar: $store.state.navbarIsActive}">
        <Menu
            @click.native="$store.dispatch('setNavbarIsActive', !$store.state.navbarIsActive)"
        >
        </Menu>
        <div class="icons" :class="{activeIcons: $store.state.navbarIsActive}">
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
            <router-link to="/Home">
                <Home></Home>
            </router-link>
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
            <ButtonComponent></ButtonComponent>
        </div>
        <SignIn v-if="$store.state.Logged == false" @click.native="$store.dispatch('setOpenDialogWindow', 'login')"></SignIn>
        <Exit v-if="$store.state.Logged == true" @click.native="outAccount"></Exit>
    </header>
</template>

<script>
import Avatar from './ButtonHeader/Avatar'
import Exit from './ButtonHeader/Exit'
import SignIn from './ButtonHeader/Sign-in'
import SignUp from './ButtonHeader/Sign-up'
import Menu from './ButtonHeader/Menu'
import Home from './ButtonHeader/Home'
import ButtonComponent from './ButtonHeader/Button-component'
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
        ButtonComponent
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
        },
        actionNavbar() {
            return 'width: 370';
        },
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
    transition: all .2s ease-in-out;
}
.activeNavbar {
    width: 370px;
    transition: all .2s ease-in-out;
}
.icons {
    width: 95%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.activeIcons {
    align-items: flex-start;
}
a {
    text-decoration: none;
    color: black;
}
</style>
