<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="openDialogAnimation">
      <AuthForm v-if="$store.state.isOpenDialogWindow == 'login'"/>
      <Regist v-if="$store.state.isOpenDialogWindow == 'regist'"></Regist>
    </transition>
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Header/Navbar'
import AuthForm from './components/AuthForm'
import Regist from './components/RegistForm'
import AppHeader from './components/Header/AppHeader'

export default {
  name: 'app',
  components: {
    Navbar,
    AuthForm,
    Regist,
    AppHeader
  }
}
</script>

<style>
@font-face {
	font-family: 'Roboto Regular';
	font-style: normal;
  font-weight: regular;
	src: url('../public/font/Roboto/Roboto-Regular.ttf');
}

#app {
  font-family: 'Roboto Regular';
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.openDialogAnimation-enter-active {
  transition: all .3s ease;
}
.openDialogAnimation-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.openDialogAnimation-enter, .openDialogAnimation-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translate3d(10px);
  opacity: 0;
}

</style>

