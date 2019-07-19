<template>
    <div class="hof-top">
        <div class="hof-head">
            大咖在大麦
            <span class="hof-more">
                查看更多
                <i class="hof-more-icon mui-icon mui-icon-arrowright"></i>
            </span>
        </div>
        <div class="hof-scroll">
            <div class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <ul class="hof-list">
                        <li v-for="(item,i) in hof" :key="i" class="hof-item">
                            <div class="hof-item-head">
                                <div :style="{'background-image':'url(' + item.hofimg +')'}" class="hof-img"></div>
                                <div class="hof-middle">
                                    <p class="hof-name">{{item.person}}</p>
                                    <p class="hof-fans">{{item.fans}}万粉丝</p>
                                </div>
                                <div class="hof-add">+关注</div>
                            </div>
                            <div class="hof-show">
                                <div class="hof-show-num">最近{{item.show}}场演出</div>
                                <i class="mui-icon mui-icon-arrowright hof-show-icon"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hof:[
                {
                    person:"周杰伦",
                    fans:"158.7",
                    hofimg:"/hof1.jpg",
                    show:"5",
                },
                {
                    person:"林俊杰",
                    fans:"108.2",
                    hofimg:"/hof2.jpg",
                    show:"3",
                },
                {
                    person:"薛之谦",
                    fans:"58.7",
                    hofimg:"/hof3.jpg",
                    show:"1",
                },
                {
                    person:"陈奕迅",
                    fans:"41.1",
                    hofimg:"/hof4.jpg",
                    show:"1",
                }
            ],
        }
    },
    mounted(){
        this.hof.forEach((item,i)=>{
            // console.log(item,i,this.hof[i])
            this.hof[i].hofimg = require('../../assets/img' + item.hofimg);
        })
    },
    // updated(){
    //     mui('.mui-scroll-wrapper').scroll({
    //         scrollY: false, //是否竖向滚动
    //         scrollX: true, //是否横向滚动
    //         startX: 0, //初始化时滚动至x
    //         startY: 0, //初始化时滚动至y
    //         indicators: false, //是否显示滚动条
    //         deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
    //         bounce: true //是否启用回弹
    //     })
    // }
}
</script>

<style>
    .hof-top{
        margin-top: .56rem;
    }
    .hof-head{
        position: relative;
        height: .58667rem;
        font-weight: 700;
        padding-left: .48rem;
        font-size: .45333rem;
        color: #111;
        margin-bottom: .42667rem;
        text-align: left;
    }
    .hof-more{
        position: absolute;
        display: flex;
        align-items: center;
        font-size: .32rem;
        line-height: .32rem;
        color: #999;
        right: .48rem;
        bottom: 0;
        font-weight: 400;
    }
    .hof-more .hof-more-icon{
        font-size: .24rem;
        margin-top: .01333rem;
        margin-left: .08rem;
    }
    .hof-scroll{
        position: relative;
        z-index: 1010;
        height: 3.4rem;
        margin-left: .48rem;
        overflow: hidden;
    }
    .hof-list{
        height: 3.6rem;
        overflow-x: scroll; 
        overflow-y: hidden;
        white-space: nowrap;
    }
    .hof-item{
        display: inline-block;
        box-sizing: border-box;
        width: 6.08rem;
        padding: 0 .32rem;
        margin-right: .4rem;
        border: .013333rem solid #eee;
        border-radius: .08rem;
        box-shadow: 0 0.08rem 0.4rem 0 rgba(0,0,0,.05);
    }
    .hof-item-head{
        display: flex;
        align-items: center;
    }
    .hof-img{
        width: 1.33333rem;
        height: 1.33333rem;
        margin: .37333rem .24rem .37333rem 0;
        border-radius: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .hof-middle{
        flex: 1;
        text-align: left;
    }
    .hof-name{
        font-size: .42667rem;
        color: #111;
    }
    .hof-fans{
        font-size: .26667rem;
        color: #888;
    }
    .hof-add{
        padding: 0 .24rem;
        width: 1.52rem;
        height: .69333rem;
        box-sizing: border-box;
        line-height: .69333rem;
        font-size: .32rem;
        text-align: center;
        color: #ff1268;
        border: .026667rem solid #ff1268;
        border-radius: 1.33333rem;
    }
    .hof-show{
        height: 1.02667rem;
        display: flex;
        align-items: center;
    }
    .hof-show-num{
        flex: 1;
        text-align: left;
        font-size: .32rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .hof-show .hof-show-icon{
        font-size: .24rem;
    }
</style>
