<template>
    <div class="nav-blackout">
        <div
            class="blackout"
            v-if="$store.state.navbarIsActive == true"
            type="button" @click="$store.dispatch('setNavbarIsActive', false)"
            >
        </div>
        <nav class="navbar" :class="{activeNavbar: $store.state.navbarIsActive}">
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
                <div class="info-for-anon" v-show="$store.state.navbarIsActive">
                    <div class="text-block">
                        To get more features, you need to create a new one or log into your account.
                    </div>
                </div>  
            </div>
            <SignIn v-if="$store.state.Logged == false" @click.native="$store.dispatch('setOpenDialogWindow', 'login')"></SignIn>
            <Exit v-if="$store.state.Logged == true" @click.native="outAccount"></Exit>
        </nav>
    </div>
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
        },
        actionNavbar() {
            return 'width: 370';
        },
    }
}
</script>

<style>
.blackout {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.075);
    width: 100%;
    height: 100%;
    z-index: 200;
}
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
    transition: all .15s ease-in-out;
}
.activeNavbar {
    width: 370px;
    transition: all .15s ease-in-out;
}
.icons {
    width: 95%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.info-for-anon {
    animation: infoAction .2s;
    background-color: #F0F0F0;
    font-size: 24px;
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
}
@keyframes infoAction{
    0% {
        opacity: 0;
        transform: translate(-400px);
    }
    100% {
        opacity: 1;
    }
}
.text-block {
    width: 240px;
    height: 150px;
    color: #505050;
    text-align: center;
    letter-spacing: 2px;
    line-height: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
}
.activeIcons {
    align-items: flex-start;
}
a {
    text-decoration: none;
    color: black;
}
</style>
