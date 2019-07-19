<template>
  <div class="ls-box">
    <div class="ls-title-01">
      <div class="ls-top-1">票品信息</div>
      <div class="ls-content-01">
        <div class="payDetailInfo">
          <div class="column_1">￥{{playpriceA}}</div>
          <div class="column_1">4排21号</div>
          <div class="column_1">内场A3区</div>
        </div>
      </div>
    </div>

    <div class>
      <div class="ls-top-1">付款明细</div>
      <div class>
        <div class="payDetailInfo">
          <div class="ls-01">+￥18</div>
          <div class="ls-02">票品运费</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playpriceA: ""
    };
  },
  created() {
    let aGood = this.$route.query;
    this.playpriceA = aGood.chooseOne;
  }
};
</script>

<style  scoped>
.ls-top-1 {
  height: 32px;
  line-height: 32px;
  padding-left: 0.9375rem;
  background: #f5f5f5;
  font-size: 13px;
  width: 100%;
}
.payDetailInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  padding: 0 0.9375rem;
  height: 40px;
}
.column_1 {
  flex: 1;
  font-size: 17 px;
}
.ls-box {
  width: 375px;
}
.ls-01 {
  font-size: 17px;
}
.ls-02 {
  font-size: 17 px;
}
</style>