<template>
  <div class="box" ref="scrollHeader">
    <div class="headers">
      <div class="over">
        <div class="toul" ref="idname">
          <ul class="ullist">
            <li v-for="item in navList" :key="item.name" ref="list">
              <a
                @click="changeactive(item.name,item.id)"
                :class="{activeColor:item.name===active00}"
                :id="item.name"
              >{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="selectcity">
        <getitem></getitem>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import getitem from "./getItem.vue";
// import getall from "./getall.vue";
export default {
  data() {
    return {
      navList: [
        {
          id: "0",
          title: "全部",
          name: "alls",
          path: "/alls"
        },
        {
          id: "1",
          title: "演唱会",
          name: "vocalconcert",
          path: "/vocalconcert"
        },
        {
          id: "2",
          title: "话剧歌剧",
          name: "sing",
          path: "/sing"
        },
        {
          id: "3",
          title: "音乐会",
          name: "opera",
          path: "/opera"
        },
        {
          id: "4",
          title: "曲苑杂坛",
          name: "quyuan",
          path: "/quyuan "
        },
        {
          id: "5",
          title: "舞蹈芭蕾",
          name: "dance",
          path: "/dance"
        },
        {
          id: "6",
          title: "体育比赛",
          name: "sportscompetition",
          path: "/sportscompetition"
        },
        {
          id: "7",
          title: "儿童亲子",
          name: "children",
          path: "/children"
        },
        {
          id: "8",
          title: "展览休闲",
          name: "Exhibition",
          path: "/Exhibition "
        },
        {
          id: "9",
          title: "二次元",
          name: "quadratic",
          path: "/quadratic "
        },
        {
          id: "10",
          title: "旅游展览",
          name: "tourism",
          path: "/tourism "
        }
      ],
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot1",
          textAlign: "right"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot3",
          textAlign: "left"
        }
      ],
      active00: "alls",
      scollLen: 0
    };
  },

  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    changeactive(name, id) {
      this.active00 = name;
      let a = 0;

      for (let i = 0; i < id * 1 + 1; i++) {
        a += this.$refs.list[i].offsetWidth;
      }

      this.$refs.idname.scrollLeft = 85 * (id - 2);
      // console.log("----------", this.$refs.scrollHeader.scrollTop);
      // this.$refs.scrollHeader.scrollTop = 2000;
    }
  },
  created() {
    this.$router.replace({ path: "/goodslist/getall" });
  },
  components: {
    getitem
    // getall
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  position: fixed;
  overflow: auto;
  top: 0px;
  width: 0px;
  height: 100%;
  width: 100%;
}
ul li {
  list-style: none;
}
a {
  font-size: 43px;
}
.main {
  position: absolute;
  top: 106;
  width: 100%;
  margin-top: 106px;
  z-index: -10;
  background-color: #ffffff;
}
.elofheader {
  top: 0px;
  left: 0px;
  padding-left: 0px;
  height: 1.805556rem !important;
  position: relative;
}
.headers {
  position: fixed;
  height: 55.91px;
  top: 0px;
  left: 0px;
  overflow: auto;
  width: 10rem;
  background-color: #ffffff;
}
.headers .toul {
  overflow: auto;
  /* position: relative; */
  background-color: #ffffff;
}
.headers .over {
  height: 1.527778rem;
  overflow: hidden;
  /* position: fixed; */
  z-index: 10999999999990 !important;
  /* position: absolute; */
  left: 0px;
  top: 0px;
  z-index: 10;
}
.headers .toul .ullist {
  display: flex;
  flex-direction: row;

  width: 913px;
}
.headers .toul .ullist li {
  margin: 0 15px;
  height: 1.944444rem;
}
.headers .toul .ullist li a {
  line-height: 55.3px;
  color: black;
  text-align: center;
  font-size: 0.398148rem !important;
  text-decoration: none;
  padding-bottom: 8px;
}
.activeColor {
  border-bottom: 2px solid #fb0c5d;
}
.selectcity {
  position: absolute;
  top: 1.527778rem;
  left: 0rem;
  width: 100%;
  z-index: 100;
}
</style>