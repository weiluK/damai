<template>
    <div class="hs">
        <div class="hs-head">
            <div class="hs-searchbox">
                <i class="hs-icon"></i>
                <input type="text" class="hs-search" v-model="hssearch" placeholder="搜索明星、演出比赛、场馆" @change="hsgetmsg">
            </div>
            <span class="hs-cancle" @click="goback">取消</span>
        </div>
        <div class="hs-content">
            <div class="hs-keyword">
                <div class="hs-keyword-title">搜索历史</div>
                <ul class="keyword-list">
                    <li class="keyword-list-item" v-for="(item,i) in history" :key="i">{{item.name}}</li>
                </ul>
                <i class="hs-icon mui-icon mui-icon-trash" @click="cancle"></i>
            </div>
            <div class="hs-keyword">
                <div class="hs-keyword-title">热搜</div>
                <ul class="keyword-list">
                    <li class="keyword-list-item" v-for="(item,i) in hot" :key="i" @click="searchhistory(item)">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            history:[

            ],
            hot:[
                {
                    index:1,
                    name:"周杰伦",
                },
                {
                    index:2,
                    name:"林俊杰",
                },
                {
                    index:3,
                    name:"田馥甄",
                },
                {
                    index:8,
                    name:"张杰",
                },
                {
                    index:22,
                    name:"张信哲",
                },
            ],
            hssearch:"",
        }
    },
    methods:{
        goback(){
            this.$router.push("/home");
        },
        cancle(){
            localStorage.clear();
            this.history = [];
        },
        searchhistory(val){
            let arr = JSON.parse(localStorage.getItem("history")) || [];
            for(var i = 0,len = arr.length;i < len;i++){
                if(arr[i].name == val.name){break}
            }
            if(i >= len){
                arr.push(val);
            }
            this.history = arr;
            localStorage.setItem("history",JSON.stringify(arr));
            this.hssearch = val.name;
        },
        hsgetmsg(){
            setTimeout(()=>{
                // Axios.get("",)
            },500)
        }
    },
    created(){
        let arr = JSON.parse(localStorage.getItem("history")) || [];
        this.history = arr;
    }
}
</script>

<style>
    .hs{
        max-width: 10rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background: white;
        height: 100%;
    }
    .hs-head{
        height: 1.17333rem;
        line-height: 1.17333rem;
        display: flex;
        justify-content: space-between;
        -webkit-box-pack: justify;
        margin: 0 .48rem;
        margin-top: .24rem;
    }
    .hs-searchbox{
        position: relative;
        flex: 1;
        margin-right: .26667rem;
        -webkit-box-flex: 1;
    }
    .hs-searchbox .hs-icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: .42667rem;
        font-size: .4rem;
        color: #ccc;
    }
    .hs-searchbox .hs-search{
        display: inline-block;
        text-indent: .98667rem;
        width: 100%;
        height: .72rem;
        background: #fff;
        border-radius: .4rem;
        background: #f2f3f4;
        border: none;
        -webkit-appearance: none;
    }
    
    .hs-cancle{
        margin-left: .21333rem;
        font-size: .37333rem;
        color: #222;
    }
    .hs-content{
        margin: 0 .48rem;
        margin-top: .24rem;
    }
    .hs-keyword{
        position: relative;
        margin-top: .26667rem;
        margin-bottom: .53333rem;
        font-size: .32rem;
    }
    .hs-keyword-title{
        color: #999;
    }
    .keyword-list{
        margin-top: .4rem;
        zoom: 1;
        overflow: hidden;
    }
    .keyword-list-item{
        float: left;
        border-radius: .68rem;
        border: 1px solid #e7e7e7;
        padding: .18667rem .4rem;
        margin-right: .26667rem;
        margin-bottom: .24rem;
        color: #222;
    }
    .hs-icon{
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
