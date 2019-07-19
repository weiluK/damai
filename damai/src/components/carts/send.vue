<template>
  <div>
    <div class="send-top">
      <div class="s-div-class01">
        <span class="s-t-01">配送方式</span>
        <span class="s-t-02">快递</span>
      </div>
      <div class="s-div-class02">
        <div class="send-center">下单后预计3-5个工作日进行配送</div>
      </div>
      <div class="s-div-class03" @click="NewAddress">
        <!-- 无地址时显示新增收货地址 -->
        <div class="send-center-01" v-if="udlen">
          <span class="s-01">新增收货地址</span>
        </div>
        <!-- 有地址时显示具体地址 -->
        <div class="s-div-class03" v-else>
          <resolveinfo></resolveinfo>
        </div>
        <span class="s-02">
          <i class="el-icon-arrow-right arrow-r"></i>
        </span>
      </div>
    </div>
    <div class="s-fapiao">
      <div class="s-fapiao-left">
        <span>发票</span>
      </div>
      <div class="s-fapiao-right">
        <span>如需发票,请支付完成后在订单页面索取(发票金额仅限商品金额,所有配送费用暂时无法开具发票)</span>
      </div>
    </div>
    <div>
      <transition name="pull">
        <addaddress :showNewAddress.sync="showNewAddress" v-if="showNewAddress"></addaddress>
      </transition>
    </div>
  </div>
</template>

<script>
import resolveinfo from "./resolveinfo.vue";
import addaddress from "./addaddress.vue";

export default {
  data() {
    return {
      userAddressLIst: "",
      showaddress: true,
      showNewAddress: false,
      udlen: false
    };
  },

  components: {
    resolveinfo,
    addaddress
  },
  methods: {
    NewAddress() {
      this.showNewAddress = true;
    }
  },
  created() {
    let { commit, state } = this.$store;
    let adlist = state.userAddress;

    adlist.forEach(element => {
      if (element.selecred) {
        this.userAddressLIst = element;
      }
    });
  }
};
</script>

<style scoped>
.pull-enter-active,
.pull-leave-active {
  transition: all 0.2s ease;
}
.pull-enter, .pull-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(450px);
}
.send-top {
  border: 0px solid black;
  position: relative;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
}
.s-div-class01 {
  position: relative;
  display: flex;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  width: 375px;
  margin-top: 9px;
  height: auto;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
.s-t-01 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  margin: 18px 15px 14px;
  width: 345px;
  max-width: calc((100% - 15px) - 15px);
  height: 19px;
  place-self: flex-start;

  display: flex;
  font-size: 16px;
  left: 0px;
  top: 0px;
  font-weight: bold;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
}
.s-t-02 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 13px;
  width: -webkit-fit-content;
  color: rgb(0, 0, 0);
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
  position: absolute;
  display: flex;
  overflow: hidden;
  right: 17px;
  top: 14.5px;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
.s-div-class02 {
  position: relative;
  display: flex;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  padding-bottom: 5px;
  width: 375px;
  padding-top: 5px;
  height: auto;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
.send-center {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 15px;
  font-size: 12px;
  margin-left: 15px;
  width: -webkit-fit-content;
  overflow: hidden;
  color: rgb(102, 102, 102);
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  max-width: none;
}
.s-div-class03 {
  position: relative;
  display: flex;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  width: 375px;
  height: auto;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
.send-center-01 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  -webkit-box-orient: vertical;
  flex-direction: row;
  margin-left: 15px;
  width: 340px;
  height: 60px;
}
.send-center-01 .s-01 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 13px;
  place-self: center flex-start;
  width: -webkit-fit-content;
  color: rgb(0, 0, 0);
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
}
.s-02 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  place-self: center;
  width: 15px;
  height: 15px;
}
.arrow-r {
  font-size: 12px;
  font-weight: 900;
}
.s-fapiao {
  border: 0px solid black;
  position: relative;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: row;
  align-content: flex-start;
  flex-shrink: 0;
  background-color: #ffffff;
  margin-top: 8px;
}
.s-fapiao-left span {
  padding-top: 18px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 16px;
  place-self: flex-start;
  margin-left: 15px;
  padding-bottom: 18px;
  width: 64px;
  font-weight: bold;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
}
.s-fapiao-right span {
  padding-top: 18px;
  padding-bottom: 18px;
  position: relative;
  display: flex;
  flex-shrink: 1;
  flex-grow: 0;
  margin-right: 15px;
  font-size: 13px;
  place-self: flex-start flex-end;
  overflow: hidden;
  color: rgb(102, 102, 102);
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  max-width: none;
}
</style>