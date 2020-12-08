<template>
    <div v-if="showDialog" class="auth">
        <div class="close">
            <img src="../../public/icons/svg/plus.svg" alt="">
        </div>
    </div> 
</template>

<script>
export default {
    name: 'auth',
    data: () => ({
        showD: false
    }),
    props: {
        showDialog: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style>
.auth {
    position: fixed;
    background-color: #fff;
    width: 560px;
    height: 380px;
    border: 2px solid #000;
    border-radius: 12px;
    align-self: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.close {
    position: absolute;
    width: 30px;
    top: 10px;
    right: 15px;
    transform: rotate(45deg);
}
</style>