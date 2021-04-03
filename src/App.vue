<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="openDialogAnimation">
      <AuthForm v-if="$store.state.isOpenDialogWindow == 'login'"/>
      <Regist v-if="$store.state.isOpenDialogWindow == 'regist'"></Regist>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AuthForm from './components/AuthForm'
import Regist from './components/RegistForm'

export default {
  name: 'app',
  components: {
    Navbar,
    AuthForm,
    Regist,
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
  width: 100%;
  height: 100%;
}

.openDialogAnimation-enter-active {
  transition: all .3s ease-in-out;
}
.openDialogAnimation-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.openDialogAnimation-enter, .openDialogAnimation-leave-to {
  transform: translate3d(10px);
  opacity: 0;
}
</style>
  