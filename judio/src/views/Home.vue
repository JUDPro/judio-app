<template>
    <div class="content-home">
        <div class="video">
            <video 
                src="https://firebasestorage.googleapis.com/v0/b/judio-10aa1.appspot.com/o/16039715690370.webm?alt=media&token=7223f140-e884-4797-ae4d-955bec7e6fc2" 
                controls="controls"
                autoplay="autoplay"
                loop="loop" 
                poster=""> 
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
.content-home {
    position: relative;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-flow: wrap;
}

.video {
    background-color: grey;
    width: 380px;
    height: 220px;
    margin: 40px 0 0 0;
}

video {
    width: 100%;
    height: 100%;
}
</style>