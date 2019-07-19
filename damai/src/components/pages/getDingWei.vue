<template>
  <div class="citybox">
    <div>
      <div class="dingwei">
        <div class="box-div">定位城市</div>
        <span class="box-span">无法定位到城市</span>
      </div>
      <div class="black"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style  scoped>
.dingwei {
  background-color: #ffffff;
}
.citybox {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: auto;
  top: 104px;
  flex-direction: column;
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
  height: 484px;
  width: 100%;
  opacity: 0.6;
}
</style>