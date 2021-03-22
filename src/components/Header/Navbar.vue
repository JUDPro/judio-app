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
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
                <span slot="text">Menu</span>
            </ButtonComponent>
            <div class="icons" :class="{activeIcons: $store.state.navbarIsActive}">
                <ButtonComponent
					class="avatar-btn"
                    v-if="$store.state.Logged == false"
                    @click.native="$store.dispatch('setOpenDialogWindow', 'regist')"
                    >
					    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                			<path d="M0 0h24v24H0V0z" fill="none"/>
                			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
            			</svg>
						<span slot="text">Anon</span>
                </ButtonComponent>
				<ButtonComponent
					class="avatar-btn"
                    v-if="$store.state.Logged == true"
                    @click.native="$router.push('Profile')"
                    >
					    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                			<path d="M0 0h24v24H0V0z" fill="none"/>
                			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
            			</svg>
						<span slot="text">{{$store.state.user.email}}</span>
                </ButtonComponent>
                <router-link to="/Home">
                    <ButtonComponent class="home-btn">
						<svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                			<path d="M0 0h24v24H0V0z" fill="none"/>
                			<path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
            			</svg>
						<span slot="text">Home</span>
					</ButtonComponent>
                </router-link>
                <ButtonComponent
                    class="user-btn" 
                    v-if="$store.state.Logged == false"
                    fontSize="24px"
                    @click.native="$store.dispatch('setOpenDialogWindow', 'regist')"
                    >
					    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                			<path d="M0 0h24v24H0V0z" fill="none"/>
                			<path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"/>
            			</svg>
						<span slot="text">Registration</span>
                </ButtonComponent>
                <ButtonComponent
                    class="user-btn" 
                    v-if="$store.state.Logged == true"
                    @click.native="$router.push('Profile')"
                    >
					    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                			<path d="M0 0h24v24H0V0z" fill="none"/>
                			<path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"/>
            			</svg>
						<span slot="text">Registration</span>
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
				<svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                	<path d="M0 0h24v24H0V0z" fill="none"/>
                	<path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            	</svg>
				<span slot="text">Sign&#8209;in</span>
			</ButtonComponent>
            <ButtonComponent
				class="exit-btn"
				v-if="$store.state.Logged == true"
				@click.native="outAccount"
			>
				<svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="40px" height="40px">
					<path d="M0 0h24v24H0z" fill="none"/>
					<path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
				</svg>
				<span slot="text">Exit</span>
			</ButtonComponent>
        </nav>
    </div>
</template>

<script>
import ButtonComponent from './Button-component'
import { firebase } from '../../plugins/firebase'

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