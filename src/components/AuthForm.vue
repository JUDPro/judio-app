<template>
<div class="close" @keyup.enter="SignIn">
    <div class="blur" type="button" @click="$store.dispatch('setOpenDialogWindow', false)"></div>
    <div class="auth">
        <div class="textAuth">
            Authorization
        </div>
        <div class="userInput">
            <input type="email" v-model="user.email" placeholder="email" v-focus>
            <input type="password" v-model="user.password" placeholder="password">
        </div>
        <div class="btnUser">
            <div @click="$store.dispatch('setOpenDialogWindow', false)" class="btnForm">Close</div>
            <div class="btnForm" @click="SignIn">Login</div>
        </div>
    </div> 
</div>
</template>

<script>
import { firebase } from '../plugins/firebase'

export default {
    name: 'auth',

    data: () => ({
        user: {
            email: '',
            password: '',
        }
    }),

    methods: {
        SignIn() {
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
            .then((res) => {
                let userInfo = {
                    email: res.user.email,
                    userId: res.user.uid,
                }
                this.$store.dispatch('setUser', userInfo)
                this.$store.dispatch('setOpenDialogWindow', false)
                this.$store.dispatch('setLogged', true)
            })
            .catch((error) => {
                console.log('error')
            })
        }
    },

    directives: {
        focus: {
            inserted: function (el) {
                el.focus();
            }
        }
    }
}
</script>

<style>
.close {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1000;
}
.blur {
	position: fixed;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.075);
    width: 100%;
    height: 100%;
}
.auth {
    position: fixed;
    background-color: #fff;
    width: 560px;
    height: 380px;
    border: 1px solid #505050;
    align-self: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
}
.textAuth {
    position: absolute;
    font-size: 24px;
    top: 30px;
    left: 50px;
}
.textAuth::after {
    content: "";
    position: absolute;
    left: -20px;
    top: -30px;
    width: 500px;
    height: 70px;
    border-bottom: 2px solid #505050;
}
.userInput {
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.btnUser {
    position: absolute;
    bottom: 10px;
    right: 15px;
    cursor: pointer;
    display: flex;
}
.btnForm {
    padding: 10px;
    font-size: 24px;
    margin: 10px;
}
input,
input:active,
input:hover,
input:focus {
  outline: none;
  border-radius: 0;
  border: 0px solid #fff;
  border-bottom: 2px solid #000;
  padding: 10px;
  width: 370px;
  font-size: 24px;
}
</style>