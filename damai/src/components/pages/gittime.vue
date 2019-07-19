<template>
  <div class="timebox">
    <div class="select-factor skin">
      <ul class="select-factor_wrap">
        <li d data-spm="dtimetype" class="select-factor_item select-factor_selected">全部时间</li>
        <li data-spm="dtimetype" class="select-factor_item">本周</li>
        <li data-spm="dtimetype" class="select-factor_item">本月</li>
        <li data-spm="dtimetype" class="select-factor_item">周末</li>
      </ul>
      <div class="dm-calendar">
        <div class="dm-calendar__header">
          <i
            class="iconfont icon-jiantouyou icon-rotate nav-disable nav"
            @click="changetime('rem')"
          ></i>
          <span class="dm-calendar__header__month-name" ref="selecttime">{{`${years}年${months}月`}}</span>
          <i class="iconfont icon-jiantouyou nav" @click="changetime('add')"></i>
        </div>
        <div class="dm-calendar__body">
          <div class="dm-calendar__week">
            <ul class="week-list">
              <li class="week-list__dow">日</li>
              <li class="week-list__dow">一</li>
              <li class="week-list__dow">二</li>
              <li class="week-list__dow">三</li>
              <li class="week-list__dow">四</li>
              <li class="week-list__dow">五</li>
              <li class="week-list__dow">六</li>
            </ul>
          </div>
          <div class="dm-calendar__date">
            <div class="day-list">
              <div
                class="day-list__day outdate"
                v-for="(item,idx) in count"
                :key="idx"
                @click="changepinkcolor(idx)"
                :class="{selected:nowdata==idx}"
              >
                <span
                  class="day-list__day__item"
                  v-bind:class="{grecolor:!item.notNow}"
                >{{item.value}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="black"></div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      years: "",
      months: "",
      nowYear: "",
      nowMonths: "",
      beforCount: 0,
      count: [],
      daynew: "",
      nowdateCuo: "",

      nowdata: "12"
    };
  },
  created() {
    let date = new Date().toLocaleDateString();
    let time = date.split("/");
    this.nowYear = time[0];
    this.nowMonths = time[1];
    this.years = time[0];
    this.months = time[1];
    var getdate = new Date().getDay();

    this.daynew = new Date(`${time[0]}.${time[1]}.1`).getDay();

    let shijancuo = new Date(`${time[0]},${time[1]},${time[2]}`);
    this.nowdateCuo = shijancuo.getTime();
    this.nowdata = time[2] * 1 + this.daynew - 1;

    var d = new Date(time[0], time[1] * 1, 0);
    var lastd = new Date(time[0], time[1] * 1 - 1, 0);

    d = d.getDate();
    lastd = lastd.getDate();

    if (this.daynew >= 1) {
      for (let j = 0; j < this.daynew * 1; j++) {
        this.count.push({ value: lastd * 1 - j, notNow: false });
      }
    }
    for (let i = 1; i <= d; i++) {
      this.count.push({ value: i, notNow: true });
    }
  },

  methods: {
    changetime(meths) {
      let Newshijancuo = new Date(`${this.years},${this.months},1`);

      //   console.log(this.nowdateCuo < Newshijancuo.getTime());

      if (meths == "add") {
        this.months = this.months * 1 + 1;
        if (this.months > 12) {
          this.years = this.years * 1 + 1;
          this.months = 1;
        }
      } else if (meths == "rem") {
        // console.log(this.months * 1, this.nowMonths * 1);

        if (this.nowdateCuo < Newshijancuo.getTime()) {
          this.months = this.months * 1 - 1;
          if (this.months <= 0) {
            this.years = this.years * 1 - 1;

            this.months = 12;
          }
        }
      }
      let newCount = [];
      var dda = new Date(this.years, this.months * 1, 0);
      var lastdda = new Date(this.years, this.months * 1 - 1, 0);
      var xingqi = new Date(`${this.years}.${this.months}.1`).getDay();

      dda = dda.getDate();
      lastdda = lastdda.getDate();

      if (xingqi >= 1) {
        for (let j = 0; j < xingqi * 1; j++) {
          newCount.unshift({ value: lastdda * 1 - j, notNow: false });
        }
      }
      for (let i = 1; i <= dda; i++) {
        newCount.push({ value: i, notNow: true });
      }
      this.count = newCount;
    },
    changepinkcolor(idx) {
      this.nowdata = idx;
    }
  }
};
</script>

<style  scoped>
.timebox {
  position: fixed;
  width: 100%;
  top: 104px;
  z-index: 999999999999999999999;
  background-color: #fff;
}
.select-factor {
  padding-bottom: 0.4rem;
  background-color: #fff;
}
.select-factor_wrap {
  padding: 0 0 0 0.29333rem;
  background: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}
.select-factor_selected {
  border: 1px solid #ff1268;
  color: #ff1268;
}
.dm-calendar__date .day-list__day.selected:after {
  position: absolute;
  /* z-index: -1; */
  content: "";
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  background: #ffe7ef;
}
.select-factor_item {
  width: 2.01333rem;
  height: 0.96rem;
  border-radius: 0.08rem;
  line-height: 0.96rem;
  text-align: center;
  margin-top: 0.42667rem;
  font-size: 0.34667rem;
  color: #3d3d3d;
  border: 1px solid #e7e7e7;
}
.icon-jiantouyou:before {
  content: ">";
}
.dm-calendar {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 0 0.48rem;
}
.dm-calendar__header {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 0.37333rem;
  padding: 0.42667rem 0;
}
.dm-calendar__header .nav {
  width: 2.13333rem;
  line-height: 0.4rem;
}
.dm-calendar__header .nav-disable {
  color: #ccc;
}
.dm-calendar__header .icon-rotate {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.dm-calendar__header i {
  font-size: 0.24rem;
}
.dm-calendar {
  margin: 0;
  padding: 0;
}
.iconfont {
  font-family: iconfont !important;
  font-size: 0.42667rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.dm-calendar .week-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 0.37333rem;
  height: 0.72rem;
  background: #f8f8f8;
}
.dm-calendar .week-list__dow:first-child,
.dm-calendar .week-list__dow:last-child {
  color: #ff1268;
}
.dm-calendar .week-list__dow {
  list-style: none;
  width: 2.66667rem;
  text-align: center;
}
.dm-calendar {
  margin: 0;
  padding: 0;
}
/* .dm-calendar__date {
  padding: 0.4rem 0;
} */
.dm-calendar__date .day-list__day.disable {
  color: #ccc;
  font-weight: 200;
}
.dm-calendar__date .day-list__day {
  position: relative;
  float: left;
  top: 8px;
  width: 14.2%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  color: #111;
}
.dm-calendar__date .day-list__day__item {
  text-align: center;
  font-size: 0.37333rem;
  line-height: 1.17333rem;
  z-index: 999;
}
.dm-calendar__date .day-list__day__label-gray {
  color: #aaa;
  font-weight: 200;
}
.dm-calendar__date .day-list__day__label {
  position: absolute;
  bottom: 0;
  white-space: nowrap;
  font-size: 0.53333rem;
  line-height: 0.26667rem;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
.grecolor {
  color: #a1a1a3;
}
.black {
  background-color: rgb(110, 110, 110);
  height: 294px;
  width: 100%;
  opacity: 0.6;
  position: absolute;
  top: 346px;
}
</style>