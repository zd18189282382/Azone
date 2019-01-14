<template>
<div class="box">
    <nav>
        <div class="tab">
            <div class="tab_menu">
                <ul>
                    <li class="selected"><a href="#">快捷登录</a></li>
                    <li><a href="#">账号密码登录</a></li>
                </ul>
            </div>
            <div class="tab_box">
                <div class="quick">
                    <div class="quicks">
                        <div class="form_content">
                            <span>手机号</span>
                            <div class="quicks_input">
                                <input type="text" placeholder="请输入手机号">
                            </div>
                        </div>
                        <div class="form_content">
                            <span>手机验证码</span>
                            <div class="quicks_inputs">
                                <input type="text" placeholder="请输入手机验证码">
                            </div>
                            <a href="#">获取验证码</a>
                        </div>
                    </div>
                </div>
                <div class="hide" id="quickx">
                    <div class="quicks">
                        <div class="form_content">
                            <span>账&nbsp;&nbsp;&nbsp;&nbsp;号</span>
                            <div class="quicks_input">
                                <input class="username" type="text" placeholder="手机号/邮箱/用户名/门店会员卡" v-model="username">
                            </div>
                        </div>
                        <div class="form_content">
                            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码</span>
                            <div class="quicks_inputv">
                                <input class="password" type="password" placeholder="请输入6-20位易购密码" v-model="userpass">
                            </div>
                            <div class="eyes">
                            </div>
                            <div class="eye">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="signin">
            <a href="javascrit:;" class="btn" @click="loginfn()">登录</a>
            <div class="login_guide">
                <a href="#">门店卡登录</a>
                <a href="#">忘记密码？</a>
            </div>
            <a href="/AzRegister" class="zhuce">快速注册</a>
        </div>
    </nav>
</div>
</template>

<script>
import $ from "jquery"
export default {
    name:"AzSigninNav",
      data() {
        return {
          username: '',
          userpass: '',
          tempStatus: false
        }
      },
    mounted() {
      $(function () {
    var $div_li = $("div.tab_menu ul li");
    $div_li.click(function () {             //定义了tan_menu对应的单击事件，也就是类别的单击事件。
        $(this).addClass("selected")
        .siblings().removeClass("selected");
        var index = $div_li.index(this);
        $("div.tab_box>div").eq(index).show()
        .siblings().hide();
    }).hover(function () {                 //定义了鼠标滑过特效
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
    $(".eyes").click(function(){
        $(".eyes").css({
            display:"none"
        }),
        $(".eye").css({
            display:"block"
        }),
          $(".password").attr("type","text")
    })
    $(".eye").click(function(){
        $(".eye").css({
            display:"none"
        });
        $(".eyes").css({
            display:"block"
        });
      $(".password").attr("type","password");
    })
});
    },
  methods: {
    /**
     * 监听tempStatus改变loginBtn样式的函数
     */
    tempStatusTruefn() {
      document.querySelector('.btn').style.opacity = 1
    },
    tempStatusFalsefn() {
      document.querySelector('.btn').style.opacity = .4
    },
    /**
     * 登录函数
     */
    loginfn() {
      if (!this.tempStatus) {
        return
      } else {
        // this.$store.dispatch({type: "userlogin", data: this.username})
        localStorage.setItem("username",this.username)
        localStorage.setItem("islogin", 1)
        this.$router.push('/')
        // window.history.back()
      }
    }
  },
  watch: {
    username: {
      handler() {
        if (this.username != null && this.username != '' && this.userpass != null && this.userpass != '') {
          this.tempStatus = true
        } else {
          this.tempStatus = false
        }
      },
      deep: true
    },
    userpass: {
      handler() {
        if (this.userpass != null && this.userpass != '' && this.userpass != null && this.userpass != '') {
          this.tempStatus = true
        } else {
          this.tempStatus = false
        }
      },
      deep: true
    },
    tempStatus: {
      handler(n, o) {
        if (n) {
          this.tempStatusTruefn()
        } else {
          this.tempStatusFalsefn()
        }
      },
      deep: true
    }
  }
}
</script>

<style>
@import "../../assets/css/iconfont.css";
.box{
    width:100%;
    flex:1;
    overflow-y:auto;
    overflow-x: hidden;
}
nav{
  width: 100%;
}
.tab{
  width: 100%;
}
.tab_menu{
  width: 100%;
  height: .49rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.tab_menu ul{
  display: block;
  width: 100%;
  height: .49rem;
}
.tab_menu ul li{
  display: inline-block;
  width: 50%;
  height: .49rem;
  line-height: .49rem;
  font-size: .14rem;
  text-align: center;
  color: gray;
  float: left;
}
.tab_menu ul .selected a{
  display: inline-block;
  height: 100%;
  border-bottom: .03rem solid #f60;
  color: black
}
.hide{
  display: none;
}
.quick{
  padding-left:.14rem;
  padding-right: .14rem;
  padding-top: .5rem;
  background: #fff;
}
.quicks{
  width: 3.47rem;
}
.form_content{
  width: 100%;
  height: .43rem;
  line-height: .43rem;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.form_content span{
  display: block;
  float: left;
  width: .8rem;
  height: .43rem;
  font-size: .14rem;
  color: black;
}
.quicks_input{
  width: 2.42rem;
  height: .43rem;
  margin-left: .25rem;
  float: left;
}
.quicks_input input{
  display: block;
  width: 100%;
  border: none;
  background-color: #fff;
  color: #222530;
  font-size: .14rem;
  line-height: .42rem;
  float: left;
}
.quicks_inputs{
  width: 1.42rem;
  height: .43rem;
  margin-left: .25rem;
  float: left;
}
.quicks_inputs input{
  display: block;
  width: 100%;
  border: none;
  background-color: #fff;
  color: #222530;
  font-size: .14rem;
  line-height: .42rem;
  float: left;
}
.form_content a{
  display:block;
  width: 1rem;
  height: .43rem;
  float: left;
  text-align: center;
  color: black;
  font-size: .14rem;
}
#quickx{
  padding-left:.14rem;
  padding-right: .14rem;
  padding-top: .5rem;
  background: #fff;
}
.quicks_inputv{
  width: 2.15rem;
  height: .43rem;
  margin-left: .25rem;
  float: left;
}
.quicks_inputv input{
  display: block;
  width: 100%;
  border: none;
  background-color: #fff;
  color: #222530;
  font-size: .14rem;
  line-height: .42rem;
  float: left;
}
.eyes{
  width:.25rem;
  height: .4rem;
  margin-top: .03rem;
  float: left;
  background:  url(../../../static/img/eyes.png) no-repeat;
    background-size: contain;
}
.eye{
  width:.25rem;
  height: .4rem;
  margin-top: .03rem;
  float: left;
  background:  url(../../../static/img/eye.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 3.2rem;
  display: none;
}
.signin{
  width: 3.75rem;
  height: 1.23rem;
  margin-top: .3rem;
  padding: 0 .14rem;
}
.btn{
  display: block;
  width: 3.47rem;
  height: .4rem;
  text-align: center;
  line-height: .4rem;
  margin: 0 auto;
  border-radius: .05rem;
  background-color: #f60;
  color: #fff;
  font-size: .14rem;
  transition: all .5s;
  opacity: .4;
}
.login_guide{
  width: 100%;
  margin-top: .15rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.login_guide a{
  display: block;
  font-size: .12rem;
  color: #222530;
}
.login_guide a:first-child {
  color: #f60;
}
.zhuce{
  display: block;
  width: 1.08rem;
  height: .28rem;
  text-align: center;
  line-height: .28rem;
  border-radius: .01rem;
  border: 1px solid #f60;
  color: #f60;
  font-size: .14rem;
  margin: .2rem auto 0;
}
</style>
