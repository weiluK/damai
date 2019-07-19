<template>
  <div class="information">
    <div>
      <li class="infor-name">
        <div class="infor-name-title">收件人</div>
        <div class="infor-name-value">{{userAddressLIst.name}}</div>
      </li>
      <li class="infor-name">
        <div class="infor-name-title">电话</div>
        <div class="infor-name-value">{{userAddressLIst.phone}}</div>
      </li>
      <li class="infor-name">
        <div class="infor-name-title">收件地址</div>
        <div class="infor-name-value inf-addres">{{userAddressLIst.addres}}</div>
      </li>
    </div>
    <div>
      <li class="infor-name">
        <div class="infor-name-title tunbiger">运费</div>
        <div class="infor-name-value tunright">￥18.00</div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAddressLIst: ""
    };
  },
  created() {
    let { commit, state } = this.$store;
    let adlist = state.userAddress;

    adlist.forEach(element => {
      if (element.selecred) {
        this.userAddressLIst = element;
      }
    });
    // console.log(this.userAddressLIst);
  },
  computed: {
    listData() {
      return this.$store.state.isSelected;
    }
  },
  //监听执行
  watch: {
    listData(nv, ov) {
    //   console.log("nv==ov", ov, nv);
      this.userAddressLIst = nv;
    }
  }
};
</script>

<style  scoped>
* {
  margin: 0px;
  padding: 0;
}
li {
  list-style: none;
}
.information {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  -webkit-box-orient: vertical;
  flex-direction: column;
  margin-left: 15px;
  width: 340px;
  height: auto;
}
.infor-name {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  visibility: visible;
  width: 100%;
  height: 40px;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
.infor-name .infor-name-title {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 13px;
  width: 98px;
  color: rgb(0, 0, 0);
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
}
.infor-name-value {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 13px;
  width: -webkit-fit-content;
  color: rgb(0, 0, 0);
  height: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
}
.inf-addres {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  line-height: 16px;
  overflow: hidden;

  text-overflow: ellipsis;
  width: 242px !important;
}
.tunright {
  right: -195px;
}
.tunbiger {
  font-size: 18px;
}
</style>