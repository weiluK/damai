<template>
    <div class="reg">
        <div class="reg-show">
            <div class="reg-list">
                <div class="reg-listx">
                <div class="reg-addresschose" @click="regchoseaddress">
                    <div class="reg-addresscap">国家地区</div>
                    <div class="reg-addressmiddle">{{regcap}}</div>
                    <i class="mui-icon mui-icon-arrowright reg-addressicon"></i>
                </div>
                <div class="login-cap-pick" v-show="choseadress">
                    <div class="login-pick-mask">
                    </div>
                    <div class="login-pick-model">
                        <div class="login-model-head">
                            <span class="login-model-btn" @click="regchoseadress('no')">取消</span>
                            <span class="login-model-btn login-model-rbtn" @click="regchoseadress('yes')">确定</span>
                        </div>
                        <div class="login-model-content">
                            <div class="login-model-bigbox">
                            <ul class="login-model-listbox"> 
                                <li class="login-model-list" v-for="(item,i) in regadress" :key="i">{{item.cap}} {{item.title}}</li>
                            </ul>
                            <div class="login-model-highlight"></div>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div class="reg-tel reg-item">
                    <div class="reg-item-line">
                        <div class="reg-itembox">
                            <input type="text" placeholder="请输入手机号" class="reg-item-input" v-model="regtel" ref="regphonenum">
                            <i class="reg-clearicon mui-icon mui-icon-close" :style="{'display':regcleartelicon}" @click="clearregicon('tel')"></i>
                        </div>
                    </div>
                </div>
                <div class="reg-test reg-item">
                    <div class="reg-item-line">
                        <div class="reg-itembox">
                            <input type="text" placeholder="请输入验证码" class="reg-item-input" v-model="regtest">
                            <i class="reg-clearicon reg-cleartesticon mui-icon mui-icon-close" :style="{'display':regcleartesticon}" @click="clearregicon('test')"></i>
                        </div>
                        <span class="reg-test-extra">
                            <a href="#" class="reg-test-send" @click.prevent="reggettestnum(regcountdown)">{{regcountdown}}</a>
                        </span>
                    </div>
                </div>
                </div>
            </div>
            <a href="" class="regbtn" :aria-disabled="regbtnc" @click.prevent="regbtn" ref="regbtn">
                <span class="regbtnspan">同意协议并注册</span>
            </a>
            <div class="reg-agreement">
                <span>
                    我已阅读接受
                    <a href="https://sale.damai.cn/contents/4677/13574.html">《大麦网会员服务协议》</a>
                    及
                    <a href="https://sale.damai.cn/contents/4677/13572.html">《隐私专项条款》</a>
                    并同意自动注册成为会员
                </span>
            </div>        
        </div>
        <div class="reg-send-teltest" v-show="regtelfalse">{{regtesterror}}</div>
    </div>
</template>

<script>
export default {
  data(){
    return {
        regadress:[
            {title:"中国大陆",cap:"+86"},
            {title:"中国香港",cap:"+852"},
            {title:"中国澳门",cap:"+853"},
            {title:"中国台湾",cap:"+886"},
        ],
        regcap:"+86",
        regtel: "",
        regtest: "",
        choseadress: false,
        regcountdown:'获取验证码',
        regtelfalse: false,
        regtesterror:"",
        regbtnc:false,
        regcleartelicon:"none",
        regcleartesticon:"none",
    };
  },
  methods:{
      regchoseadress(val){
      this.choseadress = false;
    },
      clearregicon(val){
          if(val == 'tel'){this.regtel = ""}else if(val == 'test'){this.regtest = ""}
      },
      regbtn(){
          let randomVal = JSON.parse(localStorage.getItem('regrandomValue'));
          if(this.regtest != randomVal){
            this.regtesterror = '短信验证码错误或已失效，请重新输入',
            this.regtelfalse = true;
            setTimeout(()=>{
            this.regtelfalse = false;
            },1000)
          }else if(this.regtest == randomVal){
              this.$axios.post('http://localhost:9001/admin/api/reg',{
                  username:this.regtel,
                  password:'123456',
              }).then((res)=>{
                  this.$router.push('home');
                  localStorage.setItem("loginstatus","login");
                }).catch((res)=>{console.log(res)})
          }
      },
      regchoseaddress(){
          this.choseadress = !this.choseadress;
      },
      reggettestnum(val){
          if(val != "获取验证码") return;
      if (!(/^1[3-9]\d{9}$/).test(this.regtel)) {
        // 请输入正确的手机号
        this.regtelfalse = true;
        this.regtesterror = '请输入正确的手机号';
        this.$refs.regphonenum.focus();
        setTimeout(()=>{
          this.regtelfalse = false;
        },1000)

      }else{
          function getRandomVal() {
            let arr = [],
            arr1 = [],
            randomStr = "";
            for (let i = 48; i <= 57; i++) {
            let j = String.fromCharCode(i);
            arr.push(j);
            }
            for (let i = 97; i <= 122; i++) {
            let j = String.fromCharCode(i);
            arr.push(j);
            }
            let randomVal;
            for (let i = 0; i < 6; i++) {
            randomVal = parseInt(Math.random() * 36);
            arr1.push(arr[randomVal]);
            }
            randomStr = arr1.join("");
            return randomStr;
        }
        let randomStrGet = getRandomVal();
        localStorage.setItem('regrandomValue',JSON.stringify(randomStrGet))
        let script = document.createElement("script");
        script.src = `http://v.juhe.cn/sms/send?mobile=${this.regtel}&tpl_id=171855&tpl_value=%23code%23%3D${randomStrGet}&key=83e8680d7ea9cf3f3c8608610407cc07`;
        document.body.appendChild(script);
        document.body.removeChild(document.body.lastChild);
        let endTime = Date.now() + 60*1000;
        let clickTime = Date.now();
        let countDown = setInterval(()=>{
            let currentTime = Date.now();
            this.regcountdown = Math.ceil((endTime - currentTime) / 1000) + "秒后重发";
            if(currentTime >= endTime){
                this.regcountdown = "获取验证码";
                clearInterval(countDown);
            }
        },1000)
      }
    }
  },
  updated(){
      if(this.regtel && this.regtest){
          this.$refs.regbtn.style.opacity= '0.8';
          this.regbtnc = true;
      }else{
          this.$refs.regbtn.style.opacity = '0.4';
          this.regbtnc = false;
    }
    if(this.regtel){this.regcleartelicon = "block"}else if(!this.regtel){this.regcleartelicon = "none"};
    if(this.regtest){this.regcleartesticon = "block"}else if(!this.regtest){this.regcleartesticon = "none"}
  },
};
</script>

<style>
.reg {
  background-color: #fff;
  font-size: 14px;
  margin: 8px 0;
  /* position: relative; */
}
.reg a {
  color: #ff1268;
}
.reg-list {
  margin-left: 15px;
  margin-right: 15px;
}
.reg-listx::before{
    content: "";
    position: absolute;
    background-color: #e7e7e7;
    display: block;
    z-index: 1;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 1px;
}
.reg-addresschose {
  position: relative;
  display: flex;
  padding-left: 15px;
  min-height: 55px;
  background-color: #fff;
  vertical-align: middle;
  overflow: hidden;
  transition: background-color 0.2s;
  align-items: center;
}
.reg-addresscap,
.reg-addressmiddle {
  line-height: 1.5;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 7px;
  padding-bottom: 7px;
  flex: 1;
  color: #222;
  text-align: left;
}
.reg-addressmiddle {
  flex-basis: 36%;
  color: #888;
  text-align: right;
}
.reg-addresschose .reg-addressicon {
  display: block;
  width: 15px;
  height: 15px;
  font-size: 20px;
  line-height: 15px;
  margin-left: 8px;
}
.reg-item {
  position: relative;
  display: flex;
  padding-left: 15px;
  min-height: 55px;
  padding-left: 0;
  background-color: #fff;
  vertical-align: middle;
  overflow: hidden;
  transition: background-color 0.2s;
  align-items: center;
  height: 55px;
}
.reg-item-line {
  position: relative;
  display: flex;
  flex: 1;
  align-self: stretch;
  padding-right: 0;
  overflow: hidden;
  border-bottom: none;
  align-items: center;
}
.reg-item-line::after{
    content: "";
    position: absolute;
    background-color: #e7e7e7;
    display: block;
    z-index: 1;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: 50% 100%;
    transform: scaleY(.5);
}
.reg-itembox {
  font-size: 17px;
  flex: 1;
}
.reg-itembox .reg-clearicon{
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-size: 23px;
}
.reg-itembox .reg-cleartesticon{
    right: 90px;
}
.reg-itembox .reg-item-input {
  color: #222;
  font-size: 15px;
  width: 100%;
  padding: 2px 0;
  border: 0;
  background-color: transparent;
  line-height: 1;
  box-sizing: border-box;
  margin-bottom: 0;
  border-radius: 0;
}
.reg-test-extra {
  flex: initial;
  min-width: 0;
  max-height: inherit;
  overflow: hidden;
  padding-right: 0;
  line-height: 1;
  color: #888;
  font-size: 15px;
  margin-left: 5px;
}
.reg-test-send {
  height: 30px;
  line-height: 30px;
  border: none;
  display: inline-block;
  background-color: #fff1f6;
  border-radius: 10px;
  text-align: center;
  font-size: 13px;
  padding: 0 15px;
}
.regbtn {
  position: relative;
  border: none;
  color: hsla(0, 0%, 100%, 0.6);
  opacity: 0.4;
    display: block;
    outline: 0 none;
    box-sizing: border-box;
    padding: 0 15px;
    margin: 15px 15px;
    text-align: center;
    font-size: 18px;
    height: 47px;
    line-height: 47px;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;
    overflow: hidden;
    background-color: #ff1268;
    border-radius: 5px;
}
.regbtn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #ff1268;
  border-radius: 10px;
  transform-origin: 0 0;
  box-sizing: border-box;
  pointer-events: none;
}
.regbtn span{
    color: hsla(0,0%,100%,.6);
}
.reg-agreement {
  color: #666;
  font-size: 12px;
  padding: 0 15px;
}
.reg-send-teltest{
  position: fixed;
  display: table;
  left: 50%;
  top: 50%;
  color: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  min-width: 100px;
  max-width: 240px;
  line-height: 1.4;
  text-align: center;
  background-color: rgba(0,0,0,.6);
  transform: translate(-50%,-50%);
  z-index: 1000;
}
</style>
