<template>
    <div>
        <ul class="home-list">
            <li v-for="(item,i) in list" :key="i" class="home-list-pre" @click="hltogoodslist">
                <!-- <span :style="{'background-image':'url(' + item.imgurl + ')'}" class="home-list-img"></span> -->
                <img :src="item.imgurl" class="home-list-img">
                <p class="home-list-title">{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          imgurl: "/home-list1.jpg",
          title: "演唱会",
          path: ""
        },
        {
          imgurl: "/home-list2.jpg",
          title: "话剧歌剧",
          path: ""
        },
        {
          imgurl: "/home-list3.jpg",
          title: "音乐会",
          path: ""
        },
        {
          imgurl: "/home-list4.jpg",
          title: "体育",
          path: ""
        },
        {
          imgurl: "/home-list5.jpg",
          title: "曲苑杂坛",
          path: ""
        },
        {
          imgurl: "/home-list6.jpg",
          title: "亲子",
          path: ""
        },
        {
          imgurl: "/home-list7.jpg",
          title: "展览休闲",
          path: ""
        },
        {
          imgurl: "/home-list8.jpg",
          title: "境外",
          path: ""
        }
      ],
    }
  },
  created(){
    this.list.forEach((item)=>{
      item.imgurl = require("../../assets/img" + item.imgurl)
    })  
  },
  methods:{
    hltogoodslist(){
      this.$router.push("/goodsList");
    }
  }
};
</script>

<style>
ul,li{
    list-style: none;
}
.home-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  padding: .48rem 0 .24rem;
}
.home-list .home-list-pre {
  display: block;
  width: 25%;
  margin-bottom: 0.4rem;
  text-align: center;
  box-sizing: border-box;
}
.home-list .home-list-img {
  text-align: center;
  width: .85333rem;
  height: .85333rem;
  margin: 0 auto;
  display: block;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.home-list .home-list-title {
  padding-top: .08rem;
  font-size: .32rem;
  color: #222;
}
</style>
