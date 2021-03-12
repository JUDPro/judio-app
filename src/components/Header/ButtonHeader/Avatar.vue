<template>
    <div class="avatar" :style="style()">
        <div class="some-class"></div>
    </div>
</template>

<script>
export default {
    name: 'Avatar',
    props: {
        width: String,
        height: String,
    },
    methods: {
        style () {
            return 'width: ' + this.width, 'height: ' + this.height; 
        }
    }
}
</script>
<style>
.avatar {
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin: 20px;
}

.some-class{
    width: 100%;
    height: 100%;
    background-color: #505050;
    mask-size: 100%;
    mask-image: url("../../../../public/icons/svg/account.svg");
}
</style>