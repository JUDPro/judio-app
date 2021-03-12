<template>
    <div class="sign-up">
        <div class="person-add-icon"></div>
        <!--slot></slot-->
    </div>
</template>

<script>
export default {
    name: 'sign-up',
    props: {
        fontSize: String,
    },
    methods: {
        style() {
            return 'font-size: ' + this.fontSize;
        }
    }
}
</script>

<style>
.sign-up {
    width: 35px;
    height: 35px;
    margin: 20px;
    cursor: pointer;
}

.person-add-icon {
    height: 100%;
    width: 100%;
    background-color: #505050;
    mask-size: 100%;
    mask-image: url('../../../../public/icons/svg/person_add.svg');
}
</style>