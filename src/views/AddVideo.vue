<template>
    <div class="add-video">
        <div class="container">
            <div class="uploading-video"></div>
            <div class="info-of-video">
                <div class="name-video"></div>
                <div class="description-video"></div>
            </div>
            <div class="video-editing"></div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.add-video {
    width: 95%;
    height: 100%;
    margin-left: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    width: auto;
    height: 830px;
    display: flex;
    flex-wrap: wrap;
}
.uploading-video {
    width: 730px;
    height: 415px;
    border: solid 1px #000;
    margin-right: 30px;
}
.info-of-video {
    width: 860px;
    height: 415px;
}
.name-video {
    width: 100%;
    height: 50px;
    border: solid 1px #000;
}
.description-video {
    width: 100%;
    height: 345px;
    border: solid 1px #000;
    margin-top: 20px;
}
.video-editing {
    width: 100%;
    height: 200px;
    border: solid 1px #000;
    align-self: flex-start;
}
</style>