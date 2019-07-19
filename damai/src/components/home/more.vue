<template>
  <div>
    <div class="more-top">更多演出</div>
    <div class="more">
      <div class="more-head">
        <ul class="more-list-scroll">
          <li class="more-item-scroll" @click="moretolist">
            全部分类
            <i class="more-item-scroll-icon mui-icon mui-icon-arrowdown"></i>
          </li>
          <li class="more-item-scroll" @click="moretolist">
            全部时间
            <i class="more-item-scroll-icon mui-icon mui-icon-arrowdown"></i>
          </li>
          <li class="more-item-scroll-suv more-item-scroll" @click="moretolist">推荐排序</li>
          <li class="more-item-scroll-location more-item-scroll">距离最近</li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="(item,i) in morelist" :key="i"></li>
        </ul>
      </div>
      <ul class="more-content">
        <li v-for="(item,i) in morelist" :key="i" @click="todetail('/detail',item._id)">
          <div class="more-content-list">
            <div class="more-content-imgbox">
              <img :src="item.icon" alt class="more-content-img" />
            </div>
            <div class="more-content-right">
              <div class="more-content-title">{{item.name}}</div>
              <div class="more-content-adress">{{item.venueName}}</div>
              <div class="more-content-has"></div>
              <div class="more-content-pricebox">
                <span class="more-content-price">{{item.price}}</span>
              </div>
            </div>
          </div>
        </li>
        <div class="more-content-footer">-我也是有底线的-</div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      morelist: [],
      moreimg: []
    };
  },
  methods: {
    moretolist() {
      this.$router.push("/goodsList");
    },
    todetail(name, id) {
      console.log(id);

      this.$router.push({ path: name, query: { id: id } });
    }
  },
  mounted() {
    this.moreimg.forEach((item, i) => {
      item.moreurl = require("../../assets/img/moreimg1.jpg");
    });
    this.$axios
      .get("http://localhost:9001/admin/api/getgoodslist")
      .then(({ data }) => {
        console.log(data);

        this.morelist = data;
      })
      .catch(() => {});
  }
};
</script>

<style>
.more-top {
  font-weight: 700;
  padding-left: 0.48rem;
  margin-top: 1.2rem;
  font-size: 0.45333rem;
  color: #111;
}
.more {
  padding-top: 0.21333rem;
}
.more-head {
  position: relative;
  color: #111;
  background: #fff;
}
.more-list-scroll {
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 0 0.18667rem;
  width: 100%;
  z-index: 1002;
  background: #fff;
}
.more-item-scroll {
  flex: 1;
  height: 1.38667rem;
  text-align: center;
  line-height: 1.38667rem;
  font-size: 0.37333rem;
}
.more-item-scroll .more-item-scroll-icon {
  color: #ddd;
  font-size: 0.10667rem;
  vertical-align: middle;
}
.more-list-scroll .more-item-scroll-suv {
  color: #ff1268;
}
.more-item-scroll-location {
  color: #aaa;
}
#more-content {
  min-height: 15.066667rem;
}
.more-content-list {
  margin: 0.48rem;
  margin-bottom: 0.96rem;
  display: flex;
}
.more-content-list::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0.4rem;
}
.more-content-imgbox {
  font-size: 0;
  height: 3.2rem;
  position: relative;
}
.more-content-img {
  width: 2.4rem;
  height: 3.2rem;
  border-radius: 0.08rem;
  border: 0.013333rem solid rgba(0, 0, 0, 0.06);
}
.more-content-right {
  margin-left: 0.32rem;
  padding-bottom: 0;
  position: relative;
  flex: 1;
}
.more-content-title {
  width: 6.32rem;
  font-size: 0.42667rem;
  color: #111;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
}
.more-content-adress {
  width: 6.32rem;
  font-size: 0.32rem;
  color: #aaa;
  padding-top: 0.16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.more-content-has {
  padding: 0.01333rem 0.08rem 0.04rem;
  font-size: 0.29333rem;
  border-radius: 0.08rem 0.08rem 0.21333rem 0.08rem;
  line-height: normal;
  border: none;
  display: inline-block;
  box-sizing: border-box;
  letter-spacing: 0.01333rem;
  background: #eee;
  color: #111;
}
.more-content-pricebox {
  position: absolute;
  bottom: 0;
  width: 98%;
  margin-top: 0.26667rem;
  font-size: 0;
}
.more-content-price {
  font-size: 0.37333rem;
  color: #ff1268;
  display: inline-block;
  box-sizing: border-box;
  line-height: 0.42667rem;
}
.more-content-footer {
  margin: 1.2rem 0;
  text-align: center;
  font-size: 0.32rem;
  color: #888;
  font-weight: 100;
}
</style>
