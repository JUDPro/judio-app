<template>
    <div class="exit">
        <div class="exit-icon"></div>    
    </div>
</template>

<script>
export default {}
</script>

<style>
.exit {
    width: 40px;
    height: 40px;
    padding: 15px 20px 15px 20px;
    border-top: 1px solid #505050;
    cursor: pointer;

}

.exit-icon {
    height: 100%;
    width: 100%;
    background-color: #505050;
    mask-size: 100%;
    transform: rotate(180deg);
    mask-image: url('../../../../public/icons/svg/exit.svg');
}
</style>