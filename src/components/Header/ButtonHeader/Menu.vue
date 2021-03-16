<template>
    <div class="line-bot">
        <div class="menu">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
        </div>
        <transition name="textActive">
            <div class="text" v-if="$store.state.navbarIsActive">
                Menu
            </div>
        </transition>
    </div>
</template>

<script>
export default {}
</script>

<style>
.line-bot {
    width: 95%;
    border-bottom: 1px solid #505050;
    display: flex;
    align-items: center;
}
.menu {
    height: 40px;
    width: 40px;
    cursor: pointer;
    padding: 15px 20px 15px 20px;
}
.menu > svg {
    fill: #505050;
}
.text {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    font-size: 24px;
    font-weight: 600;
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