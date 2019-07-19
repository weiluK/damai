<template>
    <div class="banner-main">
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,i) in banner" :key="i" :style="{'background':'url(' + item + ')','background-size': 'cover'}"></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {
            banner:[
                "/banner1.jpg",
                "/banner2.jpg",
                "/banner3.jpg",
                "/banner4.jpg",
                "/banner5.jpg",
                "/banner6.jpg",
            ]
        }
    },
    beforeUpdated(){
        // this.$axios.get("")
    },
    created(){
        this.banner.forEach((item,i)=>{
            this.banner[i] = require("../../assets/img" + item);
        })
    }
};
</script>

<style>
.banner-main{
    display: block;
    width: 100%;
    height: 3.76rem;
    margin-top: 1.333333rem;
}
</style>
