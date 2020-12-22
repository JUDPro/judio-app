<template>
    <div class="avatar" :style="style()">
        <img src="../../../../public/icons/svg/user-3.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'Avatar',
    props: {
        width: String,
    },
    methods: {
        style () {
            return 'width: ' + this.width; 
        }
    }
}
</script>

<style>
.avatar {
    margin-left: 30px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
}
</style>