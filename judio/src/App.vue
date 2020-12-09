<template>
  <div id="app">
    <AppHeader></AppHeader>
    <transition name="openDialogAnimation">
      <AuthForm v-if='$store.state.isOpenSignIn'/>
    </transition>
  </div>
</template>

<script>
import AppHeader from './components/Header/AppHeader'
import AuthForm from './components/AuthForm'

export default {
  name: 'app',
  components: {
    AppHeader,
    AuthForm,
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

