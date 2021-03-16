<template>
    <div class="line-top">
        <div class="sign-in">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </svg>
        </div>
        <transition name="textActive">
            <div class="text-sign-in" v-if="$store.state.navbarIsActive">
                Sign&#8209;in
            </div>
        </transition>  
    </div>
</template>

<script>
export default {}
</script>

<style>
.line-top {
    width: 95%;
    border-top: 1px solid #505050;
    display: flex;
    align-items: center;
}
.sign-in {
    width: 40px;
    height: 40px;
    padding: 15px 20px 15px 20px;
    cursor: pointer;
}
.sign-in > svg{
    fill: #505050;
}
.text-sign-in {
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