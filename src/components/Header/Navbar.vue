<template>
    <header class="navbar">
        <div class="menu">
            <div class="menu-icon"></div>
        </div>

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

            <div class="home">
                <router-link to="/Home">
                    <div class="home-icon"></div>
                </router-link>
            </div>

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
import { firebase } from '../../plugins/firebase'

export default {
    name: 'Navbar',
    components: {
        Avatar,
        Exit,
        SignIn,
        SignUp
    },
    data: () => ({
        
    }),
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
    position: fixed;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90px;
    height: 100%;
    border-right: 1px solid #505050;
}

.menu {
    height: 40px;
    width: 40px;
    cursor: pointer;
    padding: 15px 20px 15px 20px;
    border-bottom: 1px solid #505050;
}

.menu-icon {
    width: 100%;
    height: 100%;
    background-color: #505050;
    mask-size: 100%;
    mask-image: url('../../../public/icons/svg/menu.svg');
}

.icons {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home {
    height: 35px;
    width: 35px;
    margin: 20px;
}

.home-icon {
    width: 100%;
    height: 100%;
    background-color: #505050;
    mask-size: 100%;
    mask-image: url('../../../public/icons/svg/home.svg');
}

a {
    text-decoration: none;
    color: black;
}
</style>
