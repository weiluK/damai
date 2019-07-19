<template>
  <div>
    <div class="show-head">
      近期演出
      <span class="show-more" @click="showtogoodslist">
        演出日历
        <i class="show-more-icon mui-icon mui-icon-arrowright"></i>
      </span>
    </div>
    <ul class="show-week">
      <li
        v-for="(item,i) in showdate"
        :key="i"
        class="show-trueweek"
        @click="changeshowday(item.index,item.day)"
        :class="{'show-selected':showselected == i}"
      >{{item.title}}</li>
    </ul>
    <div class="show-week-list">
      <ul class="show-week-content">
        <li
          v-for="(item,i) in showlist"
          :key="i"
          class="show-week-img"
          @click="showtodetail('/detail',item._id)"
        >
          <div :style="{'background-image':'url(' + item.icon+ ')'}" class="show-week-trueimg"></div>
          <p class="show-week-title">{{item.name}}</p>
          <div class="show-week-price">{{item.price}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showdate: [1, 2, 3, 4, 5, 6, 7],
      showlist: [],
      showselected: 0
    };
  },
  created() {
    let time = new Date();
    let week = time.getDay();
    let weekarr = [];
    this.showdate = [
      { day: week, title: "今天", index: 0 },
      { day: (week + 1) % 7, title: "明天", index: 1 }
    ];
    for (let i = week + 2, j = 2; i < week + 7; i++, j++) {
      let k = i % 7;
      switch (k) {
        case 0:
          this.showdate.push({ day: 0, title: "周日", index: j });
          break;
        case 1:
          this.showdate.push({ day: 1, title: "周一", index: j });
          break;
        case 2:
          this.showdate.push({ day: 2, title: "周二", index: j });
          break;
        case 3:
          this.showdate.push({ day: 3, title: "周三", index: j });
          break;
        case 4:
          this.showdate.push({ day: 4, title: "周四", index: j });
          break;
        case 5:
          this.showdate.push({ day: 5, title: "周五", index: j });
          break;
        case 6:
          this.showdate.push({ day: 6, title: "周六", index: j });
          break;
      }
    }
    this.$axios
      .get("http://localhost:9001/admin/api/getgoodslist")
      .then(({ data }) => {
        this.showlist = data;
      })
      .catch(() => {});
  },
  methods: {
    showtogoodslist() {
      this.$router.push("/goodsList");
    },
    showtodetail(name, id) {
      this.$router.push({ path: name, query: { id: id } });
    }
  }
};
</script>

<style>
.show-week-title {
  width: 150px;
  margin-top: 0.32rem;
  margin-bottom: 0.16rem;
  font-size: 0.37333rem;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.show-week-price {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: end;
  align-items: flex-end;
  font-size: 0.37333rem;
  line-height: 0.37333rem;
  margin-left: -0.05333rem;
}
.show-head {
  position: relative;
  height: 0.58667rem;
  font-weight: 700;
  padding-left: 0.48rem;
  font-size: 0.45333rem;
  color: #111;
  margin-bottom: 0.42667rem;
  text-align: left;
}
.show-more {
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 0.32rem;
  line-height: 0.32rem;
  color: #999;
  right: 0.48rem;
  bottom: 0;
  font-weight: 400;
}
.show-more .show-more-icon {
  font-size: 0.24rem;
  margin-top: 0.01333rem;
  margin-left: 0.08rem;
}
.show-week {
  display: flex;
  justify-content: space-between;
  margin: 0 0.48rem 0.64rem;
  color: #999;
  font-size: 0.37333rem;
}
.show-selected {
  color: #111;
}
.show-week-list {
  position: relative;
  height: 7.37333rem;
  margin: 0 0 0.64rem 0.48rem;
  overflow: hidden;
}
.show-week-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -0.06667rem;
  white-space: nowrap;
  overflow-x: scroll;
}
.show-week-img {
  background-image: url("../../assets/img/loading.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  height: 5.84rem;
  margin-right: 0.32rem;
  flex-direction: column;
  border-radius: 0.10667rem;
}
.show-week-trueimg {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  width: 4rem;
  height: 5.84rem;
  border-radius: 0.10667rem;
}
</style>
