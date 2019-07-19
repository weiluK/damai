<template>
    <div>
        <div class="hometop-top">
        <div class="hometop-header">
            <div class="hometop-city" @click="goto('/city')">
                <i class="mui-icon mui-icon-location hometop-icon"></i>
                <span>{{hometopcity}}</span>
            </div>
            <div class="hometop-search" @click="goto('/search')">
                <i class="mui-icon mui-icon-search hometop-search-icon"></i>
                <span>搜索明星、演出比赛、场馆</span>
            </div>
            <i class="mui-icon mui-icon-contact hometop-mine" @click="goto('/mine')"></i>
        </div>
    </div>
    <router-view/>
    </div>
</template>

<script>
export default {
  data(){
        return {
            hometopcity:"广州",
        }
    },
    methods:{
        goto(val){
          this.$router.push(val);
        }
    }
}
</script>

<style>
.hometop-top{
        position: fixed;
        top:0;
        left: 0;
        z-index: 9999;
        height: 1.33333rem;
        background: #fff;
        width: 100%;
        max-width: 10rem;
        margin: 0 auto;
    }
    .hometop-header{
        display: flex;
        align-items: center;
        height: 1.33333rem;
        background-color: #f5f5f5;
    }
    .hometop-city{
        font-size: .42667rem;
        margin: 0 .48rem;
        color: #222;
    }
    .hometop-city .hometop-icon{
        font-size: .42667rem;
    }
    .hometop-search{
        display: flex;
        flex: 1;
        padding-left: .48rem;
        font-size: .37333rem;
        justify-content: center;
        align-items: center;
        height: .72rem;
        border-radius: .4rem;
        background: #fff;
        color: #999;
    }
    .hometop-search .hometop-search-icon{
        margin-right: .24rem;
        color: #888;
        font-size: .4rem;
    }
    .hometop-mine{
        font-size: .64rem;
        margin: 0 .48rem 0 .32rem;
    }
</style>
