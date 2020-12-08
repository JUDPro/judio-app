<template>
  <div id="app">
    <AppHeader></AppHeader>
  </div>
</template>

<script>
import AppHeader from './components/Header/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader,
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
</style>

