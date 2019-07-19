<template>
  <div class="citybox" ref="cityscroll">
    <div>
      <div class="dingwei">
        <div class="box-div">定位城市</div>
        <span class="box-span">无法定位到城市</span>
      </div>
      <div class="onecity">
        <div class="box-div">热门城市/区域</div>
        <ul>
          <li
            class="box-span"
            @click="selectcity(item.idx)"
            v-for="item in hotcity"
            :key="item.name"
            :class="{redColor:item.idx==selectcolor}"
          >
            <router-link to="/getall">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="onecity">
        <div class="box-div">A</div>
        <ul>
          <li class="box-li" v-for="item in cityA" :key="item.name">{{item.name}}</li>
        </ul>
      </div>
      <div class="onecity">
        <div class="box-div">B</div>
        <ul>
          <li class="box-li" v-for="item in cityB" :key="item.name">{{item.name}}</li>
        </ul>
      </div>
      <div class="onecity">
        <div class="box-div">C</div>
        <ul>
          <li class="box-li" v-for="item in cityC" :key="item.name">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotcity: [
        {
          name: "全国",
          idx: "quanguo"
        },
        {
          name: "境外",
          idx: "forlign"
        },
        {
          name: "北京",
          idx: "bejing"
        },
        {
          name: "上海",
          idx: "shanghai"
        },
        {
          name: "深圳",
          idx: "shenzhen"
        },
        {
          name: "广州",
          idx: "guanzghou"
        },
        {
          name: "杭州",
          idx: "hangzhou"
        },
        {
          name: "天津",
          idx: "tianjian"
        },
        {
          name: "重庆",
          idx: "chongqing"
        },
        {
          name: "成都",
          idx: "chengdu"
        },
        {
          name: "西安",
          idx: "xian"
        },

        {
          name: "香港",
          idx: "xianggang"
        }
      ],
      cityA: [{ name: "安庆" }, { name: "鞍山" }, { name: "澳门" }],
      cityB: [
        { name: "巴彦淖尔" },
        { name: "宝庆" },
        { name: "包头" },
        { name: "北海" },
        { name: "北京" },
        { name: "本溪" },
        { name: "滨州" }
      ],
      cityC: [{ name: "长春" }, { name: "长沙" }, { name: "常德" }],
      cityD: [{ name: "安庆" }, { name: "安庆" }, { name: "安庆" }],
      cityE: [{ name: "安庆" }, { name: "安庆" }, { name: "安庆" }],
      selectcolor: "guanzghou"
    };
  },
  methods: {
    selectcity(name) {
      this.selectcolor = name;

      this.$router.replace({
        name: "getall",
        params: { id: 1 }
      });

      // this.$router.push({name:'Goods',params:{id}})
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
  position: absolute;
  top: -1px;
  left: 0;
  overflow: auto;
  flex-direction: column;
  /* border: 1px solid red; */
  background-color: #ffffff;
  z-index: 9999999999999999999999;
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
  background-color: #f5f5f5;
  padding-left: 0.277778rem;
}
.box-li {
  height: 1.203704rem;
  font-size: 0.324074rem;
  line-height: 1.203704rem;
  border-bottom: 0.009259rem solid #e2e2e2;
  margin-left: 0.342593rem;
}
.redColor {
  border: 0.027778rem solid #d72563;
}
</style>