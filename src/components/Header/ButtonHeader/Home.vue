<template>
    <div class="home-button">
        <div class="home">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
            </svg>
        </div>
        <transition name="textActive">
            <div class="text-home" v-if="$store.state.navbarIsActive">
                Home
            </div>
        </transition>
    </div>
</template>

<script>
export default {}
</script>

<style>
.home-button {
    display: flex;
    align-items: center;
}
.home {
    height: 40px;
    width: 40px;
    margin: 20px;
    cursor: pointer;
}
.home > svg {
    fill: #505050;
}
.text-home {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    font-size: 24px;
    color: #505050;
    padding: 20px 20px 20px 20px;
    cursor: pointer;
    opacity: 1;
}
.textActive-enter-active {
    transition: .5s;
}
.textActive-enter {
  opacity: 0;
}
</style>