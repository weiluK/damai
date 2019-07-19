<template>
  <div id="app">
    <div class="box">
      <div class="bgimg">
        <div class="pic_l">
          <img v-bind:src="jumps.icon" class="pic_l1" />
        </div>
        <div class="text_r">
          <div class="text_name">{{jumps.name}}</div>
          <div class="text_price">{{jumps.price}}</div>
        </div>
      </div>
    </div>
    <div class="notice" @click="show">
      <!-- 给最大的盒子添加点击事件就可以 激活service-bar -->
      <span class="notice-one">支持选座</span>
      <span>快递票</span>
      <span>纸质发票</span>
    </div>

    <div class="detail-service-info" v-show="msg" style="padding-bottom: 2.916667rem;">
      <h4>
        服务说明
        <span @click="hide"></span>
      </h4>
      <dl class="info-item">
        <dt class="info-item-no">支持选座</dt>
        <dd>
          本项目支持选座
          <br />1. 选择演出时间，并点击“选座购票”进入选座页面
          <br />2. 选座后，在15分钟内支付成功，选座生效
          *先付后选的项目需要先付款，到开放选座的日期我们会短信通知，请注意查收
          快递票
        </dd>
      </dl>
      <dl class="info-item">
        <dt>快递票</dt>
        <dd>快递票：纸质票会在开票后快递到您留下的收货地址，需您承担邮寄费用。注：离开演时间仅剩4天时，不再寄送快递票，支持在指定取票地点取票（具体以下单后票夹信息点为准）</dd>
      </dl>
      <dl class="info-item">
        <dt>纸质发票</dt>
        <dd>该项目支持开具纸质发票，请您在开始演出前通过订单页补开，发票将在演出结束1个月后，统一由主办方提供</dd>
      </dl>
    </div>
    <!-- 时间信息 -->
    <div class="detail-time-info" @click="show1">
      <div class="left">
        <div class="time">
          <span class="time-str">{{jumps.venueName}}</span>
          <i class="j"></i>
        </div>
        <div class="time-desc single-line">演出时长约90分钟（以现场为准）</div>
      </div>
    </div>
    <!-- 点击时间信息栏弹出时间选项，并购买 -->
    <div class="time-buy-info" v-show="msg1">
      <p>
        <span @click="hide1"></span>
      </p>
      <div class="time-info">
        <h4>
          场次
          <span>场次时间均为演出当地时间</span>
        </h4>
        <mt-button
          type="danger"
          style="background:pink; color:red; margin-top:15px;"
        >2019-08-04 周日 19：00</mt-button>
      </div>
      <div class="ticket-level">
        <h4>票档</h4>
        <div class="ticket-btn">
          <mt-button
            type="danger"
            :class="{show:activecolor}"
            @click="choose(380)"
            style=" margin-bottom:15px; margin-left:10px;"
          >看&nbsp;台&nbsp;380</mt-button>&nbsp;&nbsp;&nbsp;
          <mt-button type="danger" @click="choose(580)">看&nbsp;台&nbsp;580</mt-button>&nbsp;&nbsp;&nbsp;
          <mt-button type="danger" @click="choose(880)">看&nbsp;台&nbsp;880</mt-button>&nbsp;&nbsp;&nbsp;
          <mt-button type="danger" style=" margin-left:10px;" @click="choose(1280)">看台1280</mt-button>&nbsp;&nbsp;&nbsp;
          <mt-button type="danger" @click="choose(1680)">看台1680</mt-button>&nbsp;&nbsp;&nbsp;
          <mt-button type="danger" @click="choose(2019)">场地2019</mt-button>
        </div>
      </div>

      <div class="sku-bottom">
        <div class="price-button">
          <div class="price-container">
            <div class="price-top">
              <span class="price-text">更多信息请前往选座页</span>
            </div>
          </div>
          <div class="button button common normal" @click="turnTo">确定</div>
        </div>
        <!---->
      </div>
    </div>
    <!----------- 地理位置信息----------- -->
    <div class="detail-localtion-info">
      <div class="location-left">
        <p class="location-left-city single-line">{{jumps.logicAddress}}</p>
        <p class="location-left-address single-line">{{playear}}</p>
      </div>
      <div class="location-right">
        <div class="location-right-icon"></div>
      </div>
    </div>
    <navd></navd>
    <!----------- 最底部固定部分----------- -->

    <div class="bottom">
      <div class="detail-bar">
        <!---->
        <div class="button-outline" style="display:flex;
    justify-content:span-around;">
          <div class="left1">
            <i class="left__icon2 icon-home"></i>
            <p class="left__msg">大麦首页</p>
          </div>
          <div class="left1">
            <i class="left__icon left__icon-disfavor"></i>
            <p class="left__msg">想看</p>
          </div>
          <!---->
          <div class="detail-button">
            <div class="button button-primary">
              <div class="buy" @click="show1">
                <!---->
                <div class="buy__button">
                  <p class="buy__button__text">选座买票</p>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <!---->
        <!---->
        <div class="dm-dialog point-auth" style="display: none;">
          <div class="dm-dialog__box">
            <!---->
            <div class="dm-dialog__bd">由于未获得您的支付宝积分授权，本次交易无法享受支付宝积分优惠。</div>
            <div class="dm-dialog__ft">
              <!---->
              <div class="dm-dialog__confirm">
                <span class="dm-dialog__ft__item dm-dialog__confirm_cancel">确定</span>
                <span class="dm-dialog__ft__item dm-dialog__confirm_true">重新授权</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dm-dialog point-auth" style="display: none;">
          <div class="dm-dialog__box">
            <!---->
            <div class="dm-dialog__bd">抱歉，您当前剩余支付宝积分或等级暂不满足享受积分优惠的条件。</div>
            <div class="dm-dialog__ft">
              <span class="dm-dialog__ft__item">知道了</span>
              <!---->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入

import navd from "./navd.vue";
export default {
  data() {
    return {
      msg: false,
      msg1: false,
      activecolor: false,
      jumps: "",
      playear: "",
      choosed: ""
    };
  },
  // 注册
  components: {
    navd
  },
  methods: {
    show() {
      this.msg = true;
    },
    hide() {
      this.msg = false;
    },
    show1() {
      this.msg1 = true;
    },
    hide1() {
      this.msg1 = false;
    },
    choose(cprice) {
      this.choosed = cprice;
    },
    turnTo() {
      let junpsID = this.$route.query.id;
      this.$router.push({
        path: "/carts",
        query: { chooseOne: this.choosed, id: junpsID }
      });
    }
  },
  async created() {
    // document.body.scrollTop = 0;
    console.log(document.body.scrollTop);

    let junpsId = this.$route.query.id;

    let { data } = await this.$axios.get(
      "http://localhost:9001/admin/api/getgoodslist"
    );
    data.forEach(item => {
      if (item._id == junpsId) {
        let aae = item.venueName.trim().split(" ");

        this.playear = aae[4];
        this.jumps = item;
      }
    });
  }
};
</script>

<style scoped>
.show {
  background-color: red !important;
}
#app {
  /* height: 100%; */
  /* overflow-y: scroll; */
}

/* -------最顶部  ---- */
.box {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding-bottom: 0.48rem;
  height: 5.152778rem;
}

.bgimg {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-image: url(../../assets/img1/cover.jpg);
  background-color: rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0.5rem 0.388889rem 0.361111rem 0.361111rem;
}

/*---- 左边图片 ----*/
.pic_l {
  height: 4.291667rem;
  width: 3.166667rem;
}

.pic_l .pic_l1 {
  height: 4.291667rem;
  width: 3.166667rem;
  border-radius: 0.169444rem;
}

.text_r {
  margin-left: 0.377778rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text_name,
.text_price {
  color: white;
  font-size: 0.416667rem;
  font-weight: 700;
}

.notice {
  display: flex;
  align-items: center;
  height: 0.972222rem;
  width: 100%;
  background-color: #f8f8f8;
}

.notice span {
  color: #000000;
  font-size: 0.416667rem;
  margin-left: 0.416667rem;
  padding-left: 0.516667rem;
  background: url(../../assets/img1/gou.png) no-repeat left center;
}

/* 服务信息隐藏显示 */
.detail-service-info {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: #fff;
  padding: 0.208333rem;

  /* display: none; */
}

.detail-service-info h4 {
  position: relative;
  height: 0.902778rem;
  line-height: 0.902778rem;
  text-align: center;
  font-weight: 700;
  border-bottom: 0.013889rem solid #ccc;
}

.detail-service-info h4 span {
  position: absolute;
  right: 0.138889rem;
  top: 0.238889rem;
  display: inline-block;
  height: 0.25rem;
  width: 2.319444rem;
  background: url(../../assets/img1/cha1.png) no-repeat right center;
}

.info-item {
  margin-top: 0.416667rem;
}

.info-item dt {
  color: #000000;
  font-size: 0.416667rem;
  margin-left: 0.416667rem;
  padding-left: 0.516667rem;
  background: url(../../assets/img1/gou.png) no-repeat left center;
}

.info-item dd {
  padding-left: 1.016667rem;
  margin-top: 0.416667rem;
  font-size: 0.366667rem;
  color: #ccc;
}

/* 时间信息 */
.detail-time-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
  min-height: 1.73333rem;
  position: relative;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  flex-direction: row;
  background-color: #fff;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  /* padding-bottom:1.73333rem; */
}

.detail-time-info .left {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
}

.time {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  font-size: 0.42667rem;
  line-height: 0.42667rem;
  color: #000;
  font-weight: 700;
  margin-top: 0.48rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.single-line {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.time-desc {
  height: 0.34667rem;
  font-size: 0.34667rem;
  color: #999;
  margin-top: 0.24rem;
  margin-bottom: 0.48rem;
  line-height: 0.34667rem;
}

.time i {
  display: inline-block;
  background: url(../../assets/img1/arror.png) no-repeat left center;
  height: 0.277778rem;
  width: 2.480556rem;
  font-size: 0.416667rem;
}

/* --------时间弹出购买信息 ----*/
.time-buy-info {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 0.208333rem;
  /* display: none; */
  height: 13.361111rem;
  width: 100%;
  background-color: white;
}

.time-buy-info p {
  position: relative;
  display: flex;
  align-items: center;
  height: 1.15rem;
  width: 100%;
}

.time-buy-info p span {
  position: absolute;
  right: 0;
  text-align: right;
  display: inline-block;
  height: 0.25rem;
  width: 1.319444rem;
  background: url(../../assets/img1/cha1.png) no-repeat 15px center;
}

.time-info {
  margin-bottom: 0.48rem;
}

.time-info h4 span {
  margin-bottom: 0.48rem;
  margin-left: 0.277778rem;
  font-size: 0.25rem;
  color: #ccc;
}

.ticket-btn {
  height: 1.597222rem;
}

.ticket-level {
  height: 3.597222rem;
  padding-bottom: 5.277778rem;
}

.ticket-level h4 {
  height: 0.833333rem;
  line-height: 0.877778rem;
  margin-top: 0.277778rem;
  margin-bottom: 0.277778rem;
}

.sku-bottom {
  margin-top: 2.58rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 -0.04rem 0.24rem 0 rgba(0, 0, 0, 0.06);
}

.sku-bottom,
.sku-content {
  position: relative;
  width: 100%;
}
/* ------按钮--- */
.price-button {
  width: 100%;
  height: 1.6rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.price-container,
.price-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
}

.price-container {
  width: 2.777778rem;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin-left: 0.32rem;
  margin-right: 0.26667rem;
}

.price-container {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.button {
  width: 4.26667rem;
}

.normal {
  opacity: 1;
}

.common {
  background-image: -webkit-linear-gradient(left, #ff7f81, #ff2d79);
  background-image: linear-gradient(90deg, #ff7f81, #ff2d79);
}

.button {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  height: 1.17333rem;
  border-radius: 0.58667rem;
  font-size: 0.42667rem;
  color: #fff;
  line-height: 1.17333rem;
  text-align: center;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  opacity: 1;
}

.ticket-buy {
  height: 1.597222rem;
  width: 5.152778rem;
  border-bottom: 0.027778rem solid red;
}

/*----- 地理位置信息------ */
.detail-localtion-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding-top: 0.48rem;
  padding-bottom: 0.48rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  background: white;
}

.location-left {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  border-right: 1px solid #eee;
}

.location-left-city {
  font-size: 0.42667rem;
  color: #000;
  font-weight: 700;
}

.single-line {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.location-left-address {
  font-size: 0.34667rem;
  color: #999;
  margin-top: 0.24rem;
}

.location-right {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
  padding-left: 0.4rem;
}

.location-right-icon {
  width: 0.53333rem;
  height: 0.53333rem;
  background: url(../../assets/img1/location.jpg) no-repeat right;
  background-size: contain;
  border-radius: 1.138889rem;
}
/*--------- 底部--------- */
.bottom {
  position: fixed;

  bottom: 0;
  left: 0;
  right: 0;
  /* z-index: 2; */
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.detail-bar,
.tips-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
  width: 100%;
}
.detail-bar {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  background-color: #fff;
}
.button-outline,
.left1 {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.button-outline {
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  flex-direction: row;
  width: 100%;
  height: 1.6rem;
  background-color: #fff;
  border-top: 1px solid #eee;
}
.left1 {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 1.73333rem;
  /* border-left: 1px solid #eee; */
}
/*------- 图标----- */
.left1 .icon-home {
  background-image: url(../../assets/img1/home.png);
}

.left__icon2 {
  width: 0.53333rem;
  height: 0.53333rem;
  background-size: 100% 100%;
  line-height: 0.57333rem;
  font-size: 0.57333rem;
  color: #888;
}
.left__icon-disfavor {
  background-image: url(../../assets/img1/heart.png);
}
.left__icon {
  width: 0.53333rem;
  height: 0.53333rem;
  background-size: 100% 100%;
}
.left__msg {
  font-size: 0.24rem;
  color: #000;
  line-height: 0.4rem;
}
.detail-button {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin-right: 0.4rem;
  margin-left: 0;
}
.button-primary {
  opacity: 1;
}
.button-default,
.button {
  opacity: 0.6;
}
.button {
  margin-left: 88px;

  height: 1.17333rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  color: #fff;
  font-size: 0.42667rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 0.58667rem;
  background-image: -webkit-linear-gradient(left, #ff7f81, #ff2d79);
  background-image: linear-gradient(90deg, #ff7f81, #ff2d79);
}
.buy,
.buy__button {
  -webkit-box-flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
  height: 100%;
}
.buy {
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  flex-direction: row;
  width: 100%;
}
.buy__button {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  flex: 1;
}
.buy__button__text {
  font-style: normal;
  font-size: 0.4rem;
  color: #fff;
  line-height: 0.4rem;
}
</style>
