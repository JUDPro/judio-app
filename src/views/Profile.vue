<template>
    <div class="content-profile">
        <ProfileHeader></ProfileHeader>
    </div>
</template>

<script>
import ProfileHeader from '../components/ProfileHeader'
export default {
    name: 'Profile',
    components: {
        ProfileHeader,
    }
}
</script>

<style>
.content-profile {
    position: relative;
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
}
</style>