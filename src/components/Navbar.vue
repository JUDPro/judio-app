<template>
    <div class="nav-blackout">
        <div
            class="blackout"
            v-if="$store.state.navbarIsActive == true"
            type="button" @click="$store.dispatch('setNavbarIsActive', false)"
            >
        </div>
        <nav class="navbar" :class="{activeNavbar: $store.state.navbarIsActive}">
            <ButtonComponent
                class="menu-btn"
                @click.native="$store.dispatch('setNavbarIsActive', !$store.state.navbarIsActive)"
                >
                    <span slot="icon" class="material-icons-outlined">menu</span>
                    <span slot="text">Menu</span>
            </ButtonComponent>

            <div class="nav-buttons" :class="{activeIcons: $store.state.navbarIsActive}">
                <ButtonComponent
                    v-for="info in dataOfButton"
                    :key="info.index"
                    :class="info.class"
                    @click.native="info.method"
                >
                    <span slot="icon" class="material-icons-outlined">{{info.icon}}</span>
                    <span slot="text">{{info.text}}</span>
                </ButtonComponent>
                <div class="info-for-anon" v-show="$store.state.navbarIsActive" v-if="$store.state.Logged == false">
                    <div class="text-block">
                        To get more features, you need to create a new one or log into your account.
                    </div>
                </div>
            </div>

            <ButtonComponent
                class="sign-in-btn"
                v-if="$store.state.Logged == false"
                @click.native="$store.dispatch('setOpenDialogWindow', 'login')"
            >
                <span slot="icon" class="material-icons-outlined">login</span>
                <span slot="text">Sign&#8209;in</span>
            </ButtonComponent>
            <ButtonComponent
                class="exit-btn"
                v-if="$store.state.Logged == true"
                @click.native="outAccount"
            >
                <span slot="icon" class="material-icons-outlined">logout</span>
                <span slot="text">Exit</span>
            </ButtonComponent>
        </nav>
    </div>
</template>

<script>
import ButtonComponent from './Button-component'
import { firebase } from '../plugins/firebase'

export default {
    name: 'Navbar',
    components: {
        ButtonComponent,
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
        }
    },
    computed: {
        dataOfButton: {
            get() {
                if(this.$store.state.Logged){
                    return [
                        {
                            class: 'avatar-btn',
                            icon: 'account_circle',
                            text: 'Your profile',
                            method: () => {
                                this.$router.push('Profile');
                            }
                        },
                        {
                            class: 'home-btn',
                            icon: 'home',
                            text: 'Home',
                            method: () => {
                                this.$router.push('Home');
                            }
                        },
                        {
                            class: 'user-add-btn',
                            icon: 'chat',
                            text: 'Messenger',
                            method: () => {
                                console.log('chat!');
                            }
                        },                        {
                            class: 'settings-btn',
                            icon: 'settings',
                            text: 'Settings',
                            method: () => {
                                console.log('Settings!');
                            }
                        },                        {
                            class: 'statistics-btn',
                            icon: 'assessment',
                            text: 'Statistics',
                            method: () => {
                                console.log('Statistics!');
                            }
                        },                        {
                            class: 'new-video-btn',
                            icon: 'add_circle',
                            text: 'Add video',
                            method: () => {
                                console.log('Add video!');
                            }
                        },
                    ]
                }
                if(!this.$store.state.Logged) {
                    return [
                        {
                            class: 'avatar-btn',
                            icon: 'account_circle',
                            text: this.$store.state.user.email,
                            method: () => {
                                this.$store.dispatch('setOpenDialogWindow', 'login');
                            }
                        },
                        {
                            class: 'home-btn',
                            icon: 'home',
                            text: 'Home',
                            method: () => {
                                this.$router.push('Home');
                            }
                        },
                        {
                            class: 'user-add-btn',
                            icon: 'person_add_alt',
                            text: 'Registration',
                            method: () => {
                                this.$store.dispatch('setOpenDialogWindow', 'regist');
                            }
                        },
                    ]
                }
            }
        },
    },
}
</script>

<style>
@import '~material-icons/iconfont/material-icons.css';

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
.nav-buttons {
    width: 95%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.material-icons-outlined, .material-icons {
    color: #505050;
    font-size: 40px;
}
.menu-btn {
	width: 95%;
    border-bottom: 1px solid #505050;
    display: flex;
    align-items: center;
	font-weight: 600;
}
.sign-in-btn, .exit-btn {
	width: 95%;
    border-top: 1px solid #505050;
    display: flex;
    align-items: center;
	font-weight: 600;
}
.info-for-anon {
    animation: infoAction .2s;
    background-color: white;
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
    50% {
        opacity: 0;
        transform: translate(-200px);
    }
    100% {
        opacity: 1;
    }
}
.text-block {
    background-color: #f0f0f0;
    padding: 20px;
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