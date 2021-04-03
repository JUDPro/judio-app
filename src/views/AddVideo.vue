<template>
    <div class="add-video">
        <div class="container">
            <div class="uploading-video">
                <div class="upl-video-btn">Select a file</div>
                <div class="upl-video-drag">or drag it here</div>
            </div>
            <div class="info-of-video">
                <div class="name-video">
                    <input
                        class="info-inp"
                        type="text"
                        placeholder="Title of the video"
                        maxlength="100"
                        >
                    <span class="material-icons-outlined">create</span>
                </div>
                <div class="description-video">
                    <textarea
                        class="info-inp"
                        type="text"
                        placeholder="Description"
                        maxlength="1000"
                        size="100px"
                        >
                    </textarea>
                    <span class="material-icons-outlined">create</span>
                </div>
            </div>
            <div class="video-editing">
                <div class="tools">qw</div>
                <div class="track">qweqwe</div>
            </div>
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
    background-color: #EDEDED;
    width: 730px;
    height: 415px;
    border: solid 1px #000;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
}
.upl-video-btn {
    width: 170px;
    height: 40px;
    border-radius: 7px;
    font-size: 24px;
    background-color: #009FC2;
    border: solid 1px #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.upl-video-drag {
    font-size: 18px;
    margin-top: 8px;
}
.info-of-video {
    width: 860px;
    height: 415px;
}
.name-video {
    width: 100%;
    height: 50px;
    border: solid 1px #000;
    display: flex;
    align-items: center;
}
.material-icons-outlined {
    color: #505050;
    font-size: 35px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    padding: 5px;
}
.description-video {
    width: 100%;
    height: 345px;
    border: solid 1px #000;
    margin-top: 20px;
    display: flex;
}
.info-inp {
    font-size: 24px;
    font-family: 'Roboto Regular';
    padding: 0 20px 0 20px;
    margin: 0;
    width: 95%;
    height: 100%;
    border-width: 0;
    outline: none;
}
.description-video > textarea {
    padding: 15px 20px 15px 20px;
    height: 90%;
    resize: none;
}
.video-editing {
    position: relative;
    width: 100%;
    height: 200px;
    border: solid 1px #000;
    align-self: flex-start;
    display: flex;
}
.tools {
    position: fixed;
    width: 60px;
    height: 200px;
    border-right: solid 1px #000;
}
.track {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-left: 60px;
}
</style>