<template>
  <div class="carts-box">
    <div class="carts-main">
      <cartsmaintop></cartsmaintop>
      <send></send>
      <paymethod></paymethod>
      <transition name="pull">
        <laststep v-if="showlaststep" v-bind:showlaststep.sync="showlaststep"></laststep>
      </transition>
    </div>
    <div class="carts-foot">
      <div class="footitem-top">
        <div class="c-dagou">
          <i class="el-icon-circle-check c-dagou02"></i>
        </div>
        <div class="c-agree">
          <span class="c-agree-span">同意</span>
        </div>
        <div>
          <div class="c-explain">
            <div class="c-agree-span">
              <el-link type="danger">《大麦产品协议说明》</el-link>
            </div>
          </div>
        </div>
      </div>
      <div class="c-bottom">
        <div class="c-bottom-item">
          <div class="c-price">￥{{playprice}}</div>
          <div class="c-mingxi">
            <div class="c-mingxi-item" @click="stepactive">明细</div>
            <div>
              <i class="el-icon-arrow-down el-iconcolor"></i>
            </div>
          </div>
          <div class="c-buttton">
            <el-button type="danger c-button-item " round>提交订单</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartsmaintop from "./cartsMainTop.vue";
import send from "./send.vue";
import paymethod from "./paymethod.vue";
import laststep from "./laststep.vue";
export default {
  data() {
    return {
      showlaststep: false,
      playprice: ""
    };
  },
  components: {
    cartsmaintop,
    send,

    paymethod,
    laststep
  },
  methods: {
    stepactive() {
      this.showlaststep = !this.showlaststep;
    }
  },
  created() {
    let aGood = this.$route.query;
    this.playprice = aGood.chooseOne;
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.carts-box {
  background-color: #eee;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 677px;
}
.carts-main {
  border: 0px solid black;
  position: relative;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  background-color: #eeeeee;
  flex: 1;
}
.carts-foot {
  border: 0px solid black;
  position: relative;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  position: fixed !important;
  left: 0;
  right: 0;
  bottom: 0;
  height: 95px;
  background-color: #ffffff;
}
.footitem-top {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 375px;
  height: 41px;
}
.c-dagou {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 12px;
  place-self: center flex-start;
  margin-left: 6px;
  width: -webkit-fit-content;
  overflow: hidden;
  color: rgb(153, 153, 153);
  height: auto;
  max-width: 268px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
}
.c-dagou02 {
  color: #ff657e;
  font-size: 17px;
}
.c-agree {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 12px;
  place-self: center flex-start;
  margin-left: 6px;
  width: -webkit-fit-content;
  overflow: hidden;
  color: rgb(153, 153, 153);
  height: auto;
  max-width: 268px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
}
.c-agree-span {
  white-space: pre-wrap;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.c-explain {
  position: relative;
  display: flex;
  flex-shrink: 1;
  flex-grow: 0;
  font-size: 12px;
  visibility: visible;
  place-self: center flex-start;
  margin-left: 6px;
  width: 100%;
  max-width: none;
  overflow: hidden;
  color: rgb(255, 18, 104);
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 14px;
}
.c-bottom {
  position: relative;
  display: flex;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  width: 375px;
  height: 54px;
}
.c-bottom-item {
  position: absolute;
  display: flex;

  margin: 17px 12px;
  width: 100%;
  max-width: calc((100% - 12px) - 12px);
  height: auto;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
.c-price {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 3px;
  font-size: 20px;
  place-self: center flex-start;
  color: rgb(255, 18, 104);
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
}
.c-mingxi {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  left: 100px;
}
.c-mingxi-item {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 13px;
  place-self: center flex-start;
  overflow: hidden;
  color: rgb(153, 153, 153);
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  max-width: none;
}
.c-button-item {
  width: 100px !important;
  /* height: 40px !important; */
  background-color: #ff397a;
}
.c-buttton {
  position: absolute;
  display: flex;
  z-index: 9999;
  right: 10px;
  top: -11px;
}
.el-iconcolor {
  color: #ff657e;
}
.pull-enter-active,
.pull-leave-active {
  transition: all 0.2s ease;
}
.pull-enter, .pull-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(450px);
}
</style>