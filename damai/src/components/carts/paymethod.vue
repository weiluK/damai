<template>
  <div class="pay-box">
    <div class="dmpaytypecontant">
      <div class="pay-title">
        <span class="pay-span">支付方式</span>
      </div>
    </div>
    <div class="dmpaytypecontant-list">
      <img src="../../assets/img/TB1.png" alt class="pay-img" />
      <div class="dmpaytypecontant-list-decs">支付宝</div>
      <div class="pay-check">
        <i class="el-icon-circle-check change-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.pay-box {
  border: 0px solid black;
  position: relative;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  margin-top: 8px;
  background-color: #fff;
}
.dmpaytypecontant {
  padding-top: 0;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pay-title {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  margin: 18px 15px 14px;
  width: 345px;
  max-width: calc((100% - 15px) - 15px);
  height: 19px;
  place-self: flex-start;
}
.pay-span {
  position: absolute;
  display: flex;
  font-size: 16px;
  left: 0px;
  top: 0px;
  font-weight: bold;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
}
.dmpaytypecontant-list {
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 18px;
  padding-bottom: 18px;
}
.change-icon {
  font-size: 20px;
  color: #ff397a;
  margin-right: 18px;
}
.pay-img {
  width: 28px;
  height: 28px;
}
.dmpaytypecontant-list-decs {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  line-height: 15px;
}
</style>