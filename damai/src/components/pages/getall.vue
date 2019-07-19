<template>
  <div>
    <ul class="infinite-list ulbox">
      <li v-for="item in goodsList" :key="item.id" @click="leaveTo(item._id)">
        <i>
          <img :src="item.icon" alt />
        </i>
        <div class="mains">
          <h2>{{item.name}}</h2>
          <span class="sp01">{{item.venueName}}</span>
          <span class="sp02">{{item.price}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },
  methods: {
    leaveTo(id) {
      console.log("id", id);
      this.$router.push({ path: "/detail", query: { id: id } });
    }
  },
  async created() {
    let queryId = this.$route.params.id;
    //   获取传入id

    // 发起ajax请求，获取商品信息
    let { data } = await this.$axios.get(
      "http://localhost:9001/admin/api/getgoodslist"
    );
    let aaa = data[0].venueName.trim().split(" ");
    console.log(data[0]);

    let seldate = new Date(aaa[0]);

    this.goodsList = data;
    if (queryId == 2) {
      var arr2 = data.reverse();
      this.goodsList = arr2;
    } else if (queryId == 3) {
      let arrDate = [];
      let oneData = 1000000000000000000000000000000000;
      data.forEach(item => {
        let aaa = item.venueName.trim().split(" ");
        // console.log(aaa[0]);
        let seldate = new Date(aaa[0]);

        if (seldate < oneData) {
          oneData = seldate;
          arrDate.unshift(item);
        }
      });
      this.goodsList = arrDate;
    }
  }
};
</script>

<style  scoped>
.ulbox li {
  padding-left: 0.490741rem;
  padding-top: 0.490741rem;
  padding-bottom: 0.490741rem;
  margin-right: 0.490741rem;
  display: flex;
  position: relative;
}
i > img {
  width: 2.398148rem;
  height: 3.194444rem;
}
.mains {
  margin-left: 0.342593rem;
  width: 9.026667rem !important;
}
.mains h2 {
  font-size: 0.425926rem;
  color: black;
  font-weight: 600;
  line-height: 0.527778rem;
  width: 100%;
}
.mains .sp01 {
  font-size: 0.296296rem;
  color: #aaaaaa;
  /* line-height: 0.833333rem; */
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sp02 {
  font-size: 0.268519rem;
  color: #d72563;
  line-height: 0.453704rem;
  position: absolute;
  top: 117px;
  left: 124px;
}
</style>