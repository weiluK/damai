<template>
  <div class="citybox">
    <div>
      <div class="onecity">
        <ul>
          <li
            class="box-li"
            v-for="item in changeBest"
            :key="item.id"
            @click="changeactive(item.id)"
          >
            <router-link to="/getall">{{item.title}}</router-link>
            <i class="el-icon-check dagou" v-if="dagouAct==item.id"></i>
          </li>
        </ul>
        <div class="black"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeBest: [
        {
          id: 1,
          title: "推荐排序"
        },
        {
          id: 2,
          title: "最新上架"
        },
        {
          id: 3,
          title: "最近开场"
        }
      ],
      dagouAct: 1
    };
  },
  methods: {
    changeactive(id) {
      this.dagouAct = id;
      console.log("跳转", id);

      this.$router.push({
        // path: "/goodslist/getall",
        // query: { id: id }
        name: "getall",
        params: { id }
      });
    }
  }
};
</script>

<style  scoped>
a {
  color: black;
}
.citybox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 104px;
  overflow: auto;
  flex-direction: column;
}
.onecity {
  top: 0px;
}
.onecity ul {
  background-color: #ffffff;
}
.box-span {
  display: inline-block;
  width: 2.805556rem;
  height: 0.953704rem;
  border: 0.009259rem solid #cecece;
  text-align: center;
  font-size: 0.324074rem;
  line-height: 0.953704rem;
  margin-top: 0.203704rem;
  margin-left: 0.388889rem;
  margin-bottom: 0.203704rem;
  border-radius: 0.092593rem;
}
.box-div {
  height: 0.703704rem;
  font-size: 0.324074rem;
  line-height: 0.703704rem;
  background-color: #c7c7c7;
  padding-left: 0.277778rem;
}
.box-li {
  height: 1.203704rem;
  font-size: 0.324074rem;
  line-height: 1.203704rem;
  border-bottom: 0.009259rem solid #e2e2e2;
  margin-left: 0.342593rem;
}
.black {
  background-color: rgb(110, 110, 110);
  height: 428px;
  width: 100%;
  opacity: 0.6;
}
.dagou {
  margin-left: 259px;
  color: #f8196a;
  font-weight: 700;
}
</style>