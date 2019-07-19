<template>
  <div class="ticketNoteList">
    <li class="ticketNoteListItem" v-for="(item,idx)   in liText" :key="idx">
      <i class="el-icon-circle-check ticketNoteListItemIcon"></i>
      <div class="ticketNoteListItemBox">
        <p class="ticketNoteListItemTitle">{{item.title}}</p>
        <p class="ticketNoteListItemContent">{{item.text}}</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liText: [
        {
          title: "入场时间",
          text: "提前约30分钟"
        },
        {
          title: "禁止携带物品",
          text:
            "由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合"
        },
        {
          title: "寄存说明",
          text: "有寄存处 ，位于【衣帽间】"
        },
        {
          title: "座位类型",
          text: "请按门票对应位置，有序对号入座"
        },
        {
          title: "发票说明",
          text:
            "如需发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由开具方提供"
        },
        {
          title: "退换政策",
          text:
            "票品不支持退换票。如无法正常观看，还请自行处理，给您带来不便敬请谅解"
        },
        {
          title: "演出时长",
          text: "约150分钟含中场休息，仅供参考，最终以现场实际时长为准"
        },
        {
          title: "异常订购说明",
          text:
            "对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形：（1）通过同一ID订购超出限购张数的订单；（2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单"
        }
      ]
    };
  }
};
</script>

<style  scoped>
.ticketNoteList {
  position: relative;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.ticketNoteList .ticketNoteListItem {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  padding-bottom: 0;
}
.ticketNoteListItemIcon {
  color: #ff2d79;
  width: 24px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;

  margin-top: 7px;
}
.ticketNoteListItemBox {
  flex: 1;
}
.ticketNoteListItemTitle {
  width: auto;
  font-size: 13px;
  color: #000000;
  letter-spacing: 0;
}
.ticketNoteListItemContent {
  font-size: 13px;
  color: #666666;
}
</style>