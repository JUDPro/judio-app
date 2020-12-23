<template>
    <div class="sign-up" :style="style()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'sign-up',
    props: {
        fontSize: String,
    },
    methods: {
        style() {
            return 'font-size: ' + this.fontSize;
        }
    }
}
</script>

<style>
.sign-up {
    margin-left: 20px;
    padding: 8px;
    cursor: pointer;
}
</style>