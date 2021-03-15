<template>
    <div class="home">
        <div class="home-icon"></div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.home {
    height: 40px;
    width: 40px;
    margin: 20px;
    cursor: pointer;
}
.home-icon {
    width: 100%;
    height: 100%;
    background-color: #505050;
    mask-size: 100%;
    mask-image: url('../../../../public/icons/svg/home.svg');
}
</style>