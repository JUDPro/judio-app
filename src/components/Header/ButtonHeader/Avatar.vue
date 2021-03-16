<template>
    <div class="avatar-button">
        <div class="avatar">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
            </svg>
        </div>
        <transition name="textActive">
            <div class="text-avatar" v-if="$store.state.navbarIsActive">
                Anon
            </div>
        </transition>
    </div>
</template>

<script>
export default {}
</script>
<style>
.avatar-button {
    display: flex;
    align-items: center;
}
.avatar {
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin: 20px;
}
.avatar > svg {
    fill: #505050;
}
.text-avatar {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    font-size: 24px;
    color: #505050;
    padding: 20px 20px 20px 20px;
    cursor: pointer;
    opacity: 1;
}
.textActive-enter-active {
    transition: .5s;
}
.textActive-enter {
  opacity: 0;
}
</style>