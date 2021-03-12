<template>
    <div class="menu">
        <div class="menu-icon"></div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.menu {
    height: 40px;
    width: 40px;
    cursor: pointer;
    padding: 15px 20px 15px 20px;
    border-bottom: 1px solid #505050;
}

.menu-icon {
    width: 100%;
    height: 100%;
    background-color: #505050;
    mask-size: 100%;
    mask-image: url('../../../../public/icons/svg/menu.svg');
}
</style>