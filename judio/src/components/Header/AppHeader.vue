<template>
    <header class="header">
        <div class="line-header">
            <div class="reg-position">
                <Avatar 
                    v-if="$store.state.Logged == false"  
                    @click.native="$store.dispatch('setOpenSignIn', true)"
                    >
                </Avatar>
                <div 
                    class="user-name" 
                    v-if="$store.state.Logged == false"
                    @click="$store.dispatch('setOpenSignIn', true)"
                    >{{$store.state.user.email}}
                </div>
            </div>
            <div>
                <SignIn v-if="$store.state.Logged == false" @click.native="$store.dispatch('setOpenSignIn', true)"></SignIn>
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
        showDialog: false
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
</style>
