<template>
  <div>
    <ul class="getcityandtime">
      <li @click="showthecity('city')" v-bind:class="{activeColor:activate=='city'&&cityactive}">
        广州
        <span></span>
      </li>
      <li @click="showthecity('time')" v-bind:class="{activeColor:activate=='time'&&timeactive}">
        时间
        <span></span>
      </li>
      <li @click="showthecity('best')" v-bind:class="{activeColor:activate=='best' &&bestactive}">
        推荐排序
        <span></span>
      </li>
      <li
        @click="showthecity('lanch')"
        v-bind:class="{activeColor:activate=='lanch' &&lanchactive}"
      >
        最近
        <span></span>
      </li>
    </ul>

    <div class="showallcity" v-if="cityactive||bestactive||lanchactive||timeactive">
      <getcity v-if="cityactive"></getcity>

      <gettime v-if="timeactive"></gettime>
      <getbest v-if="bestactive"></getbest>
      <getdingwei v-if="lanchactive"></getdingwei>
    </div>
  </div>
</template>

<script>
import getcity from "./getcity.vue";
import getdingwei from "./getDingWei.vue";
import getbest from "./getBest.vue";
import gettime from "./gittime.vue";
export default {
  data() {
    return {
      cityactive: false,
      bestactive: false,
      lanchactive: false,
      timeactive: false,
      activate: "city"
    };
  },
  methods: {
    showthecity(name) {
      this.activate = name;

      // document.documentElement.scrollTop = 0;
         console.log(document.documentElement.scrollTop);
      //城市切换
      if (name == "city") {
        this.cityactive = !this.cityactive;

     

        if (this.bestactive == true) {
          this.bestactive = !this.bestactive;
        }
        if (this.lanchactive == true) {
          this.lanchactive = !this.lanchactive;
        }
        if (this.timeactive == true) {
          this.timeactive = !this.timeactive;
        }
      }
      // 推荐排序切换
      else if (name == "best") {
        this.bestactive = !this.bestactive;

        if (this.cityactive == true) {
          this.cityactive = !this.cityactive;
        }
        if (this.lanchactive == true) {
          this.lanchactive = !this.lanchactive;
        }
        if (this.timeactive == true) {
          this.timeactive = !this.timeactive;
        }
      }
      //定位切换
      else if (name == "lanch") {
        this.lanchactive = !this.lanchactive;

        if (this.bestactive == true) {
          this.bestactive = !this.bestactive;
        }
        if (this.cityactive == true) {
          this.cityactive = !this.cityactive;
        }

        if (this.timeactive == true) {
          this.timeactive = !this.timeactive;
        }
      }

      // 时间切换
      else if (name == "time") {
        this.timeactive = !this.timeactive;

        if (this.bestactive == true) {
          this.bestactive = !this.bestactive;
        }
        if (this.cityactive == true) {
          this.cityactive = !this.cityactive;
        }
        if (this.lanchactive == true) {
          this.lanchactive = !this.lanchactive;
        }
      }
    }
  },
  components: {
    getcity,
    getdingwei,
    getbest,
    gettime
  }
};
</script>

<style scoped>
.pull-enter-active,
.pull-leave-active {
  transition: all 0.5s ease;
}
.pull-enter,
.pull-leave-to {
  opacity: 0;
  transform: translateY(-1px);
}
.pull-enter-active,
.pull-leave-active {
  transition: all 0.2s ease;
}
.pull-enter,
.pull-leave-to {
  opacity: 0;
}
.tofixed {
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  height: 100px;
}
.getcityandtime {
  background-color: #f5f5f5;
  display: flex;
  width: 100%;
  height: 1.287037rem;
  align-content: center;
  position: fixed;
  z-index: 9999999999999;
  top: 56px;
}
.getcityandtime li {
  flex: 1;

  height: 100%;
  font-size: 0.351852rem;
  text-align: center;
  line-height: 1.287037rem;
}
.getcityandtime li span {
  display: inline-block;
  width: 0;
  height: 0;

  border: 0.092593rem solid;
  border-color: black transparent transparent;
}
.showallcity {
  position: fixed;
  overflow: auto;
  z-index: 100;
  top: 105px;
  height: 619px;
  width: 100%;
  /* background-color: #ffffff; */
}
.timepick {
  /* width: 2.5rem !important;
  height: 2.138889rem !important; */

  display: inline-block;
  position: relative;
}
.popper-class {
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100% !important;
  height: 100% !important;
}
.activeColor {
  color: #fb0c5d;
}
</style>