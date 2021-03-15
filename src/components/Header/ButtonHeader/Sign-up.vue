<template>
    <div class="sign-up">
        <div class="person-add-icon"></div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.sign-up {
    width: 40px;
    height: 40px;
    margin: 20px;
    cursor: pointer;
}
.person-add-icon {
    height: 100%;
    width: 100%;
    background-color: #505050;
    mask-size: 100%;
    mask-image: url('../../../../public/icons/svg/person_add.svg');
}
</style>