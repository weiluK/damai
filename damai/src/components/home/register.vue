<template>
    <div class="reg">
        <div class="reg-show">
            <div class="reg-list">
                <mt-cell title="国家地区" is-link>
                    <span style="color: green">{{cap}}</span>
                </mt-cell>
                <div class="reg-tel reg-item">
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div class="reg-test reg-item">
                    <input type="text" placeholder="请输入验证码">
                    <span class="reg-test-extra">
                        <a href="#">获取验证码</a>
                    </span>
                </div>
            </div>
            <mt-button type="danger">同意协议并注册</mt-button>
            <div class="reg-agreement">
                <span>
                    我已阅读接受
                    <a href="#">《大麦网会员服务协议》</a>
                    及
                    <a href="#">《隐私专项条款》</a>
                    并同意自动注册成为会员
                </span>
            </div>        
        </div>
        <div class="reg-hidden">
            <div class="reg-check">
                <div class="reg-check-no" @click="regcheck('no')">取消</div>
                <div class="reg-check-yes" @click="regcheck('yes')">确定</div>
            </div>
            <ul>
                <li v-for="(item,index) in adress" :key="index">{{item.title}} {{item.cap}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {Cell,Button} from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);

export default {
  data() {
    return {
        adress:[
            {title:"中国大陆",cap:"+86"},
            {title:"中国香港",cap:"+852"},
            {title:"中国澳门",cap:"+853"},
            {title:"中国台湾",cap:"+886"},
        ],
        cap:"+86",
        regtel: "",
        regtest: "",
    };
  },
  methods:{
      regcheck(val){
        if(val == "yes"){
        }
      },
  }
};
</script>

<style>
.reg {
  background-color: #fff;
  font-size: 14px;
}
.reg-item {
  position: relative;
  display: flex;
  padding-left: 0.2rem;
  min-height: 0.733333rem;
  background-color: #fff;
  vertical-align: middle;
  overflow: hidden;
  transition: background-color 0.2s;
  align-items: center; 
 }
</style>
