<template>
  <div>
    <div class="addbtnbox">
      <div class="addbtn" @click="addNew">+ 新增</div>
    </div>
    <div class="addreslist">
      <div class="ad-list" v-for="item in useraddressList " :key="item.id" @click="select(item.id)">
        <div class="changeinfor">
          <i class="el-icon-edit"></i>
        </div>
        <div class="add-infor">
          <div class="infor01">
            <span class="info-sp01">{{item.name}}</span>
            <span class="info-sp01">{{item.phone}}</span>
          </div>
          <div>
            <span class="info-sp03" v-if="item.iddefault">[默认地址]</span>
            <span class="info-sp04">{{item.addres}}</span>
          </div>
        </div>
        <div>
          <i class="el-icon-circle-check icon-sel" :class="{active:item.selecred}"></i>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useraddressList: [],
      isselected: 1
    };
  },
  methods: {
    select(id) {
      this.$store.commit("select", id);
    },
    addNew() {
      this.$router.push({ name: "addnewaddress" });
    }
  },
  created() {
    let { commit, state } = this.$store;

    // console.log(state.userAddress);
    this.useraddressList = state.userAddress;
  }
};
</script>

<style  scoped>
.addbtnbox {
  width: 100vw;
  display: flex;
  padding: 10px 0px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.addbtn {
  width: 340px;
  height: 40px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 45, 121);
  background: rgba(255, 45, 121, 0.1);
  border-radius: 2px;
  font-size: 16px;
}
.addreslist {
  width: 100%;
  overflow: scroll;
  height: 350px;
}
.addreslist .ad-list {
  width: auto;
  margin-right: 15px;
  margin-left: 15px;
  min-height: 70px;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}
.add-infor {
  -webkit-box-flex: 1;
  flex: 1 1 0%;
}
.infor01 {
  display: flex;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  line-height: 16px;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
}
.info-sp01 {
  margin-right: 10px;
  font-size: 16px;
}
.info-sp03 {
  color: rgb(255, 45, 121);
  font-size: 12px;
  line-height: 16px;
}
.info-sp04 {
  color: rgb(42, 42, 42);
  font-size: 12px;
  line-height: 16px;
}

.icon-sel {
  margin-left: 10px;
  font-size: 24px;
  color: #cecece;
}

.active {
  color: #ff2d79;
}

.changeinfor {
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  width: 30px;
  color: rgb(238, 238, 238);
  font-size: 15px;
}
</style>