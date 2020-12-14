<template>
    <div class="close">
        <div class="blur" type="button" @click="$store.dispatch('setOpenDialogWindow', false)"></div>

    </div>
</template>

<script>
export default {}
</script>

<style>
.close {
    width: 100%;
    height: 100%;
    position: absolute;
}

</style>