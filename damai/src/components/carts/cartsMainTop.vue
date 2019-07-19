<template>
  <div class="main-top">
    <div class="t-info">
      <div class="t-info-left">
        <li class="li01">{{oneGood.name}}</li>
        <li class="li02">{{playtime}} 19:30-22:00</li>
        <li class="li03">{{oneGood.logicAddress}} | {{ playarea}}</li>
      </div>
      <div class="t-info-right">
        <img v-bind:src="oneGood.icon" alt srcset class="right-img" />
      </div>
    </div>
    <div class="t-xuanzuo">
      <div class="xuzhi">
        <span class="xuzhi-t" @click="showyoukonw">购票须知</span>
        <span class="xuzhi-b">
          <i class="el-icon-arrow-right iconarr"></i>
        </span>
      </div>
    </div>
    <div class="t-xuanitem">
      <div class="xuan1">1张</div>
      <div class="xuan2">48排21号</div>
    </div>
    <div>
      <transition name="pull">
        <youmustknow v-if="isshowyoukonw" v-bind:isshowyoukonw.sync="isshowyoukonw"></youmustknow>
      </transition>
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import youmustknow from "./youmustknow.vue";
export default {
  data() {
    return {
      isshowyoukonw: false,
      oneGood: "",
      playtime: "",
      playarea: ""
    };
  },
  methods: {
    showyoukonw() {
      this.isshowyoukonw = true;
    }
  },
  components: {
    youmustknow
  },
  async created() {
    let aGood = this.$route.query;
    this.playprice = aGood.chooseOne;
    console.log(aGood);
    let { data } = await this.$axios.get(
      "http://localhost:9001/admin/api/getgoodslist"
    );
    data.forEach(item => {
      if (item._id == aGood.id) {
        let aae = item.venueName.trim().split(" ");

        this.playtime = aae[0];
        this.playarea = aae[4];
        this.oneGood = item;
      }
    });
    console.log(this.oneGood);
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

li {
  list-style: none;
}
.t-info {
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  width: 375px;
  height: auto;
}
.t-info-left {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  flex-direction: column;
  height: 100%;
}
.li01 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 16px;
  margin-left: 15px;
  width: 270px;
  overflow: hidden;
  color: rgb(0, 0, 0);
  margin-top: 18px;
  font-weight: bold;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  max-width: none;
  line-height: 19px;
  overflow: hidden;
}
.li02 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 13px;
  margin-left: 15px;
  width: 270px;
  color: rgb(102, 102, 102);
  margin-top: 9px;
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 16px;
}
.li03 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 13px;
  margin-left: 15px;
  width: 270px;
  color: rgb(102, 102, 102);
  margin-top: 6px;
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 16px;
}
.t-info-right {
  position: relative;
  display: flex;
  flex-shrink: 1;
  flex-grow: 0;
  overflow: hidden;
  width: 95px;
  height: 110px;
  place-self: flex-start;
}
.right-img {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 60px;
  height: 80px;
}

.t-xuanzuo {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  width: 375px;
  height: 32px;
  place-self: flex-start;
  max-width: 375px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;
}
.xuzhi {
  position: absolute;
  display: flex;
  overflow: hidden;
  margin-right: 15px;
  padding-bottom: 5px;
  right: 0px;
  top: 0.5px;
  width: -webkit-fit-content;
  padding-top: 5px;
  padding-left: 5px;
  height: auto;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
.xuzhi-t {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 14px;
  color: rgb(255, 45, 121);
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
  background-color: #ffffff;
}
.xuzhi-b {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  width: 12px;
}
.iconarr {
  color: rgb(255, 45, 121);
  font-size: 14px;
  font-weight: 900;
  margin-top: 4px;
}
.t-xuanitem {
  position: relative;
  display: flex;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  -webkit-box-orient: vertical;
  flex-direction: column;
  padding-bottom: 18px;
  width: 375px;
  padding-top: 18px;
  height: auto;
}
.xuan1 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 16px;
  margin-left: 20px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
}
.xuan2 {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 5px;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  max-width: 375px;
}
</style>