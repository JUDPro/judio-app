<template>
    <div class="sign-up">
        {{$store.state.user.email}}
    </div>
</template>

<script>
export default {
    name: 'sign-up',
}
</script>

<style>
.sign-up {
    width: 40px;
    margin-right: 30px;
    padding: 8px;
}
</style>