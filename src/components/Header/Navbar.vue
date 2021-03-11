<template>
    <header class="navbar">
        <div class="content-navbar">
            <div class="reg-position">
                <div class="menu"></div>
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

                <!--SignUp
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
                </SignUp-->

            </div>
            <!--div class="navigation">
                    <div class="home-btn">
                        <router-link to="/Home">
                            Home
                        </router-link>
                    </div>
            </div-->
            <div>
                <SignIn v-if="$store.state.Logged == false" @click.native="$store.dispatch('setOpenDialogWindow', 'login')"></SignIn>
                <Exit v-if="$store.state.Logged == true" @click.native="outAccount"></Exit>
            </div>
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
    width: 90px;
    height: 100%;
    border-right: 1px solid black;
}

.content-navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
}

.reg-position {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menu {
    background-image: url('../../../public/icons/svg/menu.svg');
    background-size: 40px 40px;
    height: 40px;
    width: 40px;
}

.navigation {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20pt;

}

.navigation > div{
    padding: 10px;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: black;
}

.navigation > div:hover {
    background-color: rgb(238, 238, 238);
}
</style>
