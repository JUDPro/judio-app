<template>
    <div class="close">
        <div class="blur" type="button" @click="$store.dispatch('setOpenDialogWindow', false)"></div>
        <div class="regist">
            <div class="textRegist">
                Registration
            </div>
            <div class="userInput">
                <input type="email" v-model="user.email" placeholder="email" autofocus>
                <input type="password" v-model="user.password" placeholder="password">
                <input type="password" v-model="user.repeatPassword" placeholder="repeat password">
            </div>
            <div class="btnUser">
                <div @click="$store.dispatch('setOpenDialogWindow', false)" class="btnForm">Close</div>
                <div class="btnForm" @click="CreateNewAccount">Registration</div>
            </div>
        </div>
    </div>
</template>

<script>
import { firebase } from '../plugins/firebase'

export default {
    name: 'regist',

    data: () => ({
        user: {
            email: '',
            password: '',
            repeatPassword: '',
        }
    }),

    methods: {
        CreateNewAccount() {
            if( this.user.password == this.user.repeatPassword ){
                firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
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
            
            else {
                console.log('error! пароли не совпадают, бака T//_//T')
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
}

.regist {
    position: fixed;
    background-color: #fff;
    width: 560px;
    height: 440px;
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

.textRegist {
    position: absolute;
    font-size: 24px;
    top: 30px;
    left: 50px;
}

.textRegist::after {
    content: "";
    position: absolute;
    left: -20px;
    top: -30px;
    width: 500px;
    height: 70px;
    border-bottom: 2px solid #505050;
}

.userInput {
    height: 220px;
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