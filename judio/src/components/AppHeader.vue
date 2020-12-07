<template>
    <header class="header">
        <div class="line-header">
            <div class="avatar"></div>
            <div class="user-name">User name</div>
        </div>
    </header>
</template>

<style>

.header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
}

.line-header {
    display: flex;
    align-items: center;
    width: 85%;
    height: 100%;
    border-bottom: 2px solid #505050;
}

.avatar {
    background-color: #505050;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 30px;
}

.user-name {

}

</style>

<script>
export default {}
</script>