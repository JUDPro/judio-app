<template>
    <div class="container" :style="{ width: width, height: height }">
        <video class="video" :src="url_video" controls></video>
    </div>
</template>

<script>
export default {
    props: {
        url_video: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '730px'
        },
        height: {
            type: String,
            default: '415px'
        }
    },
    data: () => ({
        isActive: true
    }),
}
</script>

<style scoped>
.container {
    position: relative;
    border: solid 1px #000;
}
.video {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>