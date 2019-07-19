<template>
    <div :style="{'background-image':'url(' + url + ')','background-size':'cover'}" class="join-now"></div>
</template>

<script>
export default {
    data(){
        return {
            url:"",
        }
    },
    mounted(){
        this.url = require('../../assets/img/join-now.jpg');
    }
}
</script>

<style>
    .join-now{
        display: block;
        width: 100%;
        height: 3.2rem;
        background-size: 100% 100%;
        background-position: top center;
        background-repeat: no-repeat;
    }
</style>
