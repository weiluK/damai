<template>
  <div class="login">
    <div class="login-logo">
      <img src="../../assets/img/login-logo.png" alt="">
    </div>
    <div class="login-content">
      <div class="login-main">
        <form id="login-form" class="login-form">
          <div class="login-mobile login-field">
            <div class="login-capbox">
              <div class="login-cap" @click="choseadresscap">             
                +86
                <i class="login-cap-icon mui-icon mui-icon-arrowdown"></i>               
              </div>
              <div class="login-cap-pick" v-show="choseadress">
                <div class="login-pick-mask">
                </div>
                <div class="login-pick-model">
                  <div class="login-model-head">
                    <span class="login-model-btn" @click="lgchoseadress('no')">取消</span>
                    <span class="login-model-btn login-model-rbtn"  @click="lgchoseadress('yes')">确定</span>
                  </div>
                  <div class="login-model-content">
                    <div class="login-model-bigbox">
                      <ul class="login-model-listbox"> 
                        <li class="login-model-list" v-for="(item,i) in adress" :key="i">{{item.cap}} {{item.title}}</li>
                      </ul>
                      <div class="login-model-highlight"></div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="login-telbox login-mobile-tel">
              <input @click="loginchose('phone')" @blur="cleanlgchose('phone')" type="tel" class="login-tel" tabindex="1" placeholder="请输入手机号" ref="phonenum" v-model="logintel" autocomplete="on"> 
              <i class="login-clearicon mui-icon mui-icon-close" :style="{'display':lgcleartelicon}" @click="clearlgicon('tel')"></i>
              <div class="login-underline">
                <div class="login-lineshow"></div>
                <div class="login-linehidden" ref="transitionphone"></div>
              </div>
            </div>
          </div>
          <div class="login-field login-test">
            <div class="login-telbox">
              <input @click="loginchose('test')" @blur="cleanlgchose('test')" type="tel" class="login-tel" tabindex="2" placeholder="请输入验证码" maxlength="6" aria-label="请输入验证码" autocomplete="off" v-model="logintest">
              <i class="login-clearicon login-cleartesticon mui-icon mui-icon-close" :style="{'display':lgcleartesticon}" @click="clearlgicon('test')"></i>
              <div class="login-underline">
                <div class="login-lineshow"></div>
                <div class="login-linehidden" ref="transitiontest"></div>
              </div>
            </div>
            <div class="login-send-btn">
              <span class="login-send-link" @click.prevent="getverify(countdown)">{{countdown}}</span>
            </div>
          </div>
          <div class="login-lgbtn">
            <button tabindex="3" class="login-lgsubmit" @click.prevent="userlogin">登录</button>
          </div>
          <div class="login-blocks">
            <a href="" class="login-userlg">账号密码登录</a>
            <a href="#/register" class="login-newreg">新用户注册</a>
          </div>
        </form>
        <div class="login-send-teltest" v-show="lgtelfalse">{{testerror}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adress: [
        { title: "中国大陆", cap: "+86" },
        { title: "中国香港", cap: "+852" },
        { title: "中国澳门", cap: "+853" },
        { title: "中国台湾", cap: "+886" }
      ],
      cap: "+86",
      logintel: "",
      logintest: "",
      choseadress:false,
      lgtelfalse:false,
      countdown:"获取验证码",
      lgcleartelicon:"none",
      lgcleartesticon:"none",
      testerror:"",
    };
  },
  methods: {
    lgchoseadress(val){
      this.choseadress = false;
    },
    clearlgicon(val){
      if(val == 'tel'){this.logintel = ""}else if(val == 'test'){this.logintest = ""}
    },
    choseadresscap(){
      this.choseadress = !this.choseadress;
    },
    cleanlgchose(val){
      if(val == "test"){
        this.$refs.transitiontest.style.width = 0;     
      }else if(val == "phone"){
        this.$refs.transitionphone.style.width = 0;
      }
    },
    loginchose(val){
      if(val == "test"){
        this.$refs.transitiontest.style.width = "100%";
        this.$refs.transitiontest.style.display = "block";
      }else if(val == "phone"){
        this.$refs.transitionphone.style.display = "block";
        this.$refs.transitionphone.style.width = "100%";
      }
    },
    changecap() {},
    chose(val) {
      if (val == "yes") {
        //   this.$emit()
      }
    },
    goto(val){
      this.$router.push(val);
    },
    getverify(val) {
      if(val != "获取验证码") return;
      if (!(/^1[3-9]\d{9}$/).test(this.logintel)) {
        // 请输入正确的手机号
        this.lgtelfalse = true;
        this.testerror = '请输入正确的手机号';
        this.$refs.phonenum.focus();
        this.$refs.transitionphone.style.width = "100%";
        this.$refs.transitionphone.style.display = "block";
        setTimeout(()=>{
          this.lgtelfalse = false;
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
        // for (let i = 97; i <= 122; i++) {
        //   let j = String.fromCharCode(i);
        //   arr.push(j);
        // }
        let randomVal;
        for (let i = 0; i < 6; i++) {
          randomVal = parseInt(Math.random() * 10);
          arr1.push(arr[randomVal]);
        }
        randomStr = arr1.join("");
        return randomStr;
      }
      let randomStrGet = getRandomVal();
      localStorage.setItem('lgrandomValue',JSON.stringify(randomStrGet))
      let script = document.createElement("script");
      script.src = `http://v.juhe.cn/sms/send?mobile=${this.logintel}&tpl_id=171855&tpl_value=%23code%23%3D${randomStrGet}&key=83e8680d7ea9cf3f3c8608610407cc07`;
      document.body.appendChild(script);
      document.body.removeChild(document.body.lastChild);
      let endTime = Date.now() + 60*1000;
      let clickTime = Date.now();
      let countDown = setInterval(()=>{
          let currentTime = Date.now();
          this.countdown = Math.ceil((endTime - currentTime) / 1000) + "秒后重发";
          if(currentTime >= endTime){
            this.countdown = "获取验证码";
            clearInterval(countDown);
          }
      },1000)
      
      
    }},
    userlogin(){
      let randomValue = JSON.parse(localStorage.getItem("lgrandomValue"));
      if(this.logintest != randomValue){
        this.lgtelfalse = true;
        this.testerror = '短信验证码错误或已失效，请重新输入';
        setTimeout(()=>{
          this.lgtelfalse = false;
        },1000)
      }else if(this.logintest == randomValue){
        this.$axios.post("http://localhost:9001/admin/api/deng",{
          username:this.logintel,
          password:'123456',
        }).then((res)=>{
          console.log(res);
          localStorage.setItem("loginstatus","login");
          this.$router.push('/home');
        }).catch((error)=>{
          this.lgtelfalse = true;
          this.testerror = '该号码尚未注册';
          setTimeout(()=>{
          this.lgtelfalse = false;
          },1000)
        })
      }
    },
    loginchangecap() {}
  },
  updated(){
    if(this.logintel){this.lgcleartelicon = "block"}else if(!this.logintel){this.lgcleartelicon = "none"};
    if(this.logintest){this.lgcleartesticon = "block"}else if(!this.logintest){this.lgcleartesticon = "none"}
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.login-logo {
  height: 3.26667rem;
  text-align: center;
  background: white;
}
.login-logo img {
  width: 2.66667rem;
  height: 1.21333rem;
  margin-top: 1.02667rem;
  border: 0;
}

.login-content{
  width: 100%;
  background: #fff;
  font: 400 .16rem arial;
  color: #666;
  margin: 0 auto;
  padding: 0 20px 20px;
  margin-bottom: 2px;
}
.login-main{
  width: 100%;
  padding-top: 2px;
}
.login-form{
  width: 100%;
  margin: 0;
  padding: 0;
}
.login-field{
  margin-bottom: 10px;
  font-size: 14px;
  position: relative;
}
.login-capbox{
  left: 0;
  z-index: 9;
  position: absolute;
  bottom: 0;
}
.login-cap{
  width: 70px;
  padding-left: 10px;
  height: 40px;
  line-height: 40px;
  border-right: 1px solid #ccc;
  position: relative;
  cursor: pointer;
  border-bottom: 0;
  border-color: #e7e7e7;
}
.login-capbox .login-cap-icon{
  margin-left: 3px;
  font-size: 12px;
}
.login-pick-model{
  background-color: #fff;
  z-index: 2;
  /* transform: translateY(100%); */
  /* transition: transform .3s; */
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.login-model-rbtn{
  text-align: right;
}
.login-model-head{
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 15px;
}
.login-model-btn{
  color: #ff1268;
  font-size: 14px;
  float: left;
  margin: 0;
  -webkit-box-flex: 1;
  flex: 1 1;
}
.login-model-content{
  height: 216px;
  z-index: 10001;
  width: 100%;
}
.login-model-bigbox{
    position: relative;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100%;
    padding: 0 20px;
    font-size: 1.2em;
}
.login-model-listbox{
  height: 36px;
  line-height: 36px;
  transform: translate3d(0px, 90px, 0px);
}
.login-model-list{
  height: 36px;
  line-height: 36px;
  position: relative;
  font-size: 14px;
  padding: 0 10px;
  white-space: nowrap;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
}
.login-input{
  position: relative;
  padding: 0;
  font-size: 14px;
  position: relative;
  padding: 0 10px;
  white-space: nowrap;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
}
.login-model-highlight{
  height: 36px;
  margin-top: -18px;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-left: none;
  border-right:none;
  pointer-events: none;
}
.login-telbox{
  position: relative;
  padding: 0;
}
.login-telbox .login-tel{
  height: 42px;
  outline: none;
  font-size: 14px;
  width: 100%;
  border: none;
  line-height: 42px;
  margin: 0;
  padding: 0;
  padding-left: 15px;
}
.login-mobile-tel .login-tel{
  padding-left: 80px;
}
.login-telbox .login-clearicon{
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-size: 23px;
}
.login-telbox .login-cleartesticon{
  right: 90px;
}
.login-underline{
  position: relative;
}
.login-lineshow{
  background: #e7e7e7;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
}
.login-linehidden{
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #ff1268;
  transform: translate(-50%);
  transition: width .4s;
}

.login-send-btn{
  border-radius: 20px;
  padding: 0 10px;
  margin-bottom: 8px;
  background: #fff1f6;
  line-height: 25px;
  position: absolute;
  right: 10px;
  bottom: 0;
}
.login-send-link{
  color: #fc347b;
  font-size: 12px;
  float: left;
  margin: 0;
  text-decoration: none;
}
.login-lgbtn{
  margin-top: 20px;
  width: 100%;
}
.login-lgsubmit{
  margin-top: 0;
  font-size: 18px;
  background-color: #ff1268;
  background-image: linear-gradient(90deg,#ff4aae,#ff1268);
  border-color: #ff1268;
  border: 1px solid #ff9000;
  border-radius: 3px;
  height: 42px;
  line-height: 42px;
  outline: none;
  color: #fff;
  width: 100%;
  cursor: pointer;
}
.login-blocks{
  margin: 8px 0;
  text-align: right;
  zoom: 1;
}
.login-userlg{
  width: 50%;
  text-align: left;
}
.login-newreg{
  width: 50%;
  text-align: right
}
.login-blocks a{
  font-size: 12px;
  float: left;
  margin: 0;
  color: #999;
  text-decoration: none;
}
.login-form a{
  display: inline-block;
}
.login-blocks:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}
.login-blocks:after, .login-blocks:before {
  content: " ";
  display: table;
}
.login-send-teltest{
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
