<template>
    <div class="sign-in">
        <div class="sign-in-icon"></div>
    </div>
</template>

<script>
export default {
    name: 'sign-in',
}
</script>

<style>
.sign-in {
    width: 40px;
    height: 40px;
    padding: 15px 20px 15px 20px;
    border-top: 1px solid #505050;
    cursor: pointer;
}
.sign-in-icon {
    height: 100%;
    width: 100%;
    background-color: #505050;
    mask-size: 100%;
    mask-image: url('../../../../public/icons/svg/exit.svg');
}
</style>