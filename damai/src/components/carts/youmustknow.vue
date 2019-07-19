<template>
  <div class="mustknow-box">
    <div class="m-black"></div>
    <div class="container">
      <div class="mustknow-top">
        <div class="headerBorder">
          <div class="tabs">
            <p
              class="tabsText"
              :class="{active:isshowknow=='left01'}"
              @click="changetitle('left01')"
            >购票须知</p>
            <p
              class="tabsText"
              :class="{active:isshowknow=='left02'}"
              @click="changetitle('left02')"
            >温馨提示</p>
          </div>
          <div>
            <i class="el-icon-close close" @click="close"></i>
          </div>
        </div>
      </div>

      <div class="titlebox">
        <xuzhi v-if="isshowknow=='left01'"></xuzhi>
        <tishi v-else></tishi>
      </div>
    </div>
  </div>
</template>

<script>
import xuzhi from "./youmustxuzhi.vue";
import tishi from "./youmusttishi.vue";
export default {
  data() {
    return {
      isshowknow: "left01"
    };
  },
  components: {
    xuzhi,
    tishi
  },
  methods: {
    close() {
      this.$emit("update:isshowyoukonw", false);
    },
    changetitle(name) {
      console.log("改变");

      this.isshowknow = name;
    }
  },
  props: ["isclose"]
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
.titlebox {
  position: absolute;
  top: 60px;
  left: 0px;
  overflow: auto;
  /* overflow-y: scroll; */
}
.mustknow-box {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background-color: aquamarine; */
  z-index: 9999;
}
.container {
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100vw;
  min-height: 450px;
  z-index: 8888;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
.mustknow-top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999999999999;
}
.headerBorder {
  margin: 0 15px;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid #eee;
}
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  text-align: center;
  /* margin-left: 30px; */
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.tabs .tabsText {
  font-size: 16px;
  width: auto;
  padding: 0 15px;
  text-align: center;
  color: #999;
}
.close {
  font-size: 20px;
  color: #999;
  font-weight: 999;
}
.active {
  color: black !important;
}
.m-black {
  height: 217px;
  opacity: 0.6;
  width: 100%;
  background-color: rgb(77, 77, 77);
}
</style>