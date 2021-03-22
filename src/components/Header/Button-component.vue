<template>
    <div class="button-component" type="button">
        <span class="icon">
            <slot name="icon"></slot>
        </span>
        <transition name="textActive">
            <span class="text" v-if="$store.state.navbarIsActive">
                <slot name="text">Button</slot>
            </span>
        </transition>
    </div>
</template>

<script>
export default {
    name: "test",
    props: {
        img: String,
        text: String
    },
}
</script>

<style>
.button-component {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.icon {
    width: 40px;
    height: 40px;
    padding: 15px 20px 15px 20px;
}
.icon > svg {
    fill: #505050;
}
.text {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    font-size: 24px;
    color: #505050;
    padding: 20px 20px 20px 20px;
    opacity: 1;
}
.textActive-enter-active {
    transition: .5s;
}
.textActive-enter {
    opacity: 0;
}
</style>