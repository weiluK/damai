<template>
    <div class="city">
        <div class="city-content">
            <div>
                <div class="city-position city-title">定位城市</div>
                <div class="city-location">
                    <div class="city-status city-smallbox">{{citydir}}</div>
                </div>
            </div>
            <div class="city-hot">
                <div class="city-hot-title city-title">热门城市/区域</div>
                <ul class="city-hotbox">
                    <li @click="chosecity(item)" class="city-hotname  city-smallbox" v-for="(item,i) in hotcityname" :key="i">{{item}}</li>
                </ul>
            </div>
            <ul class="city-all" v-for="(itembig,imba,name) in letter" :key="name">
                <li class="city-title">{{imba}}</li>
                <li @click="chosecity(itemsmall)" v-for="(itemsmall,i) in itembig" :key="i" class="city-all-list">{{itemsmall}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            citydir:"",
            hotcityname:["全国","境外","北京","上海","深圳","广州","杭州","天津","重庆","成都","西安","香港"],
            letter:{
                A:["阿坝","安庆","鞍山","澳门"],
                B:["巴彦绰尔","保定","包头","北海","北京","本溪","蚌埠","滨州"],
                C:["长春","长沙","常州","承德","成都","赤峰","重庆"],
            },
        }
    },
    methods:{
        chosecity(val){
            console.log(val);
        }
    },
    created(){
        this.citydir = "定位中..";
    },
    mounted(){
        setTimeout(()=>{
            this.citydir = "定位失败";
        },2000)
    }
}
</script>

<style>
    .city{
        height: 100%;
        box-sizing: border-box;
        background: #fff;
        position: relative;
        font-size: .34667rem;
        color: #333;
    }
    .city-content{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
    .city-title{
        height: .66667rem;
        line-height: .66667rem;
        background: #f2f3f4;
        padding-left: .26667rem;
    }
    .city-smallbox{
        display: inline-block;
        box-sizing: border-box;
        width: 2.8rem;
        height: .96rem;
        text-align: center;
        line-height: .96rem;
        border: 1px solid #e7e7e7;
        border-radius: .08rem;
        margin: .21333rem 0 .21333rem .4rem;
    }
    .city-hotbox{
        display: flex;
        flex-flow: wrap;
    }
    .city-all-list{
        padding-left: .32rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border-bottom: .013333rem solid #e7e7e7;
    }
</style>
