<template>
    <header class="header">
        <div class="line-header">
            <div class="reg-position">
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
                <div
                    class="user-name" 
                    v-if="$store.state.Logged == false"
                    @click="$store.dispatch('setOpenDialogWindow', 'regist')"
                    >{{$store.state.user.email}}
                </div>
                <div
                    class="user-name" 
                    v-if="$store.state.Logged == true"
                    @click="$router.push('Profile')"
                    >{{$store.state.user.email}}
                </div>
            </div>
            <div class="navigation">
                    <div class="home-btn">
                        <router-link to="/Home">
                            Home
                        </router-link>
                    </div>
            </div>
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
import { firebase } from '../../plugins/firebase'

export default {
    name: 'Header',
    components: {
        Avatar,
        Exit,
        SignIn
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
.header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
}

.line-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    border-bottom: 3px solid #505050;
}

.user-name {
    margin-left: 20px;
    font-size: 20pt;
    cursor: pointer;
}

.reg-position {
    display: flex;
    align-items: center;
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
