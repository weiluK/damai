<template>
    <div class="mine">
        <div class="mine-hd" v-show="minelgtop">
            <div class="mine-pic"></div>
            <p class="mine-name" @click="goto('/login')">登录/注册</p>
        </div>
        <div class="mine-hd" v-show="!minelgtop">
            <div class="mine-pic2"></div>
            <p class="mine-name">麦子1ZXHX</p>
        </div>
        <div class="mine-content">
            <ul class="mine-top">
                <li class="mine-list" v-for="(item,i) in top" :key="i" :class="{'list-border':item.index != i}">
                    <div class="mine-listbox">
                        <span :class="item.icon" class="mine-list-icon"></span>
                        <div class="mine-title">{{item.title}}</div>
                    </div>
                    <div class="mine-iconbox">
                        <i class="mine-icon mui-icon mui-icon-arrowright"></i>
                    </div>
                </li>
            </ul>
            <ul class="mine-middle">
                <li class="mine-list" v-for="(item,i) in middle" :key="i"  :class="{'list-border':item.index != i}">
                    <div class="mine-listbox">
                        <span :class="item.icon" class="mine-list-icon"></span>
                        <div class="mine-title">{{item.title}}</div>
                    </div>
                    <div class="mine-iconbox">
                        <i class="mine-icon mui-icon mui-icon-arrowright"></i>
                    </div>
                </li>
            </ul>
            <ul class="mine-middle">
                <li class="mine-list" v-for="(item,i) in bottom" :key="i"  :class="{'list-border':item.index != i}">
                    <div class="mine-listbox">
                        <span :class="item.icon" class="mine-list-icon"></span>
                        <div class="mine-title">{{item.title}}</div>
                    </div>
                    <div class="mine-iconbox">
                        <i class="mine-icon mui-icon mui-icon-arrowright"  :class="{'mine-tel':i == item.index}"></i>
                    </div>
                </li>
            </ul>
            <div class="mine-lgout" v-show="!minelgtop" @click="minetoout">退出登录</div>
            <div class="mine-bottom">
                <div class="mine-link">关于大麦</div>
                <div class="mine-line">|</div>
                <div class="mine-link">联系我们</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      top: [
        {
          icon: "mui-icon mui-icon-bars",
          title: "我的订单",
          index:3,
        },
        {
          icon: "mui-icon mui-icon-star",
          title: "优惠券",
          index:3,
        },
        {
          icon: "mui-icon mui-icon-paperclip",
          title: "我的票",
          index:3,
        }
      ],
      middle: [
        {
          icon: "mui-icon mui-icon-spinner-cycle mui-spin",
          title: "我的关注",
          index:1,
        }
      ],
        bottom:[{
            icon:"mui-icon mui-icon-location",
            title:"收货地址",
            index:5,
        },
        {
            icon:"mui-icon mui-icon-contact",
            title:"常用购票人",
            index:5,
        },
        {
            icon:"mui-icon mui-icon-flag",
            title:"实名认证",
            index:5,
        },
        {
            icon:"mui-icon mui-icon-compose",
            title:"意见反馈",
            index:5,
        },
        {
            icon:"mui-icon mui-icon-help",
            title:"客服电话",
            index:5,
        }],
        minelgtop:true,
    };
  },
  created(){
      let minelg = localStorage.getItem("loginstatus");
      if(minelg == "login"){
          this.minelgtop = false;
      }else{this.minelgtop = true}
  },
  methods:{
      goto(val){
          this.$router.push(val);
      },
      minetoout(){
          localStorage.removeItem('loginstatus');
          let minelg = localStorage.getItem("loginstatus");
        if(minelg == "login"){
            this.minelgtop = false;
        }else{this.minelgtop = true}
      }
  }
};
</script>
    
<style>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .mine{
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 10rem;
        margin: 0 auto;
        background: #f2f3f4;
        flex: 1;
    }
    .mine-hd{
        align-items: center;
        height: 2.66667rem;
        background: #ff1268;
        display: flex;
    }
    .mine-pic{
        display: block;
        margin: 0 .33333rem 0 .32rem;
        width: 1.6rem;
        height: 1.6rem;
        background-size: 100% auto;
        background-position: top center;
        border-radius: 100%;
        border: .04rem solid #fff;
        background: url("../../assets/img/mine-hd.png");
        background-size: cover;
    }
    .mine-pic2{
        display: block;
        margin: 0 .33333rem 0 .32rem;
        width: 1.6rem;
        height: 1.6rem;
        background-size: 100% auto;
        background-position: top center;
        border-radius: 100%;
        border: .04rem solid #fff;
        background: url("../../assets/img/mine-lgname.png");
        background-size: cover;
    }
    .mine-name{
    flex: 1;
    font-size: .4rem;
    color: #fff;
    padding-right: .8rem;
    word-break: break-all;
    height: .50667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    }
    .mine-content{
        overflow-y: auto;
        overflow-x: hidden;
    }
    .mine-top{
        padding-left: .33333rem;
        background: #fff;
        border-top: .013333rem solid #e7e7e7;
        border-bottom: .013333rem solid #e7e7e7;
        margin: .26667rem 0;
    }
    .list-border{
        border-bottom: .013333rem solid #e7e7e7;
    }
    .mine-list{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: .33333rem .32rem;
        text-decoration: none;
        font-size: inherit;
        color: inherit;
        align-items: center;
        line-height: 1.46667rem;
        padding: 0 .32rem 0 0;
    }
    .mine-listbox{
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .mine-listbox .mine-list-icon{
        float: left;
        width: .66667rem;
        text-align: left;
        font-size: .37333rem;
        line-height: 1.46667rem;
        color: #ff1268;
    }
    .mine-title{
        float: right;
        font-size: .37333rem;
    }
    .mine-iconbox{
        flex: 1;
        margin-left: .13333rem;
        text-align: right;
    }
    .mine-iconbox .mine-icon{
        font-size: .24rem;
        color: #999;
        font-weight: 400;
    }
    .mine-middle{
        margin-bottom: .26667rem;
        padding-left: .33333rem;
        background: #fff;
        border-top: .013333rem solid #e7e7e7;
        border-bottom: .013333rem solid #e7e7e7;
    }
    
    .mine-tel::after{
        content: "1010-3721";
        position: absolute;
        right: 0;
        font-size: .32rem;
        color: #999;
    }
    .mine-lgout{
        width: 100%;
        height: 1.17333rem;
        line-height: 1.17333rem;
        text-align: center;
        border: 1px solid #e7e7e7;
        background-color: #fff;
        font-size: .42667rem;
        color: #666;
    }
    .mine-bottom{
        font-size: .32rem;
        color: #999;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: .53333rem;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-box-pack: center;
    }
    .mine-link{
        height: 1.06667rem;
        margin: 0 .10667rem;
    }
</style>
