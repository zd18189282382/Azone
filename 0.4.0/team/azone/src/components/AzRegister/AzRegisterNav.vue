<template>
<nav>
        <div class="nav">
            <a href="javascript:;" class="iconfont icon-zuojiantou" @click="back"></a>
            <p>手机快速注册</p>
        </div>
        <form id="wapRegForm" method="post">
            <div class="phone_box">
                <span>手机号码</span>
                <div class="input_box">
                    <input type="tel" placeholder="请输入11位手机号码" maxlength="11">
                    <i class="empty"></i>
                </div>
            </div>
            <div class="phone_box">
                <span>手机验证码</span>
                <div class="input_boxs">
                    <input type="tel" placeholder="请输入手机验证码" maxlength="4">
                    <i class="emptys"></i>
                </div>
                <div class="input_tool">
                    <span class="countdown"></span>
                    <a href="#">获取验证码</a>
                </div>
            </div>
            <div class="phone_box">
                    <span>设置密码</span>
                    <div class="input_boxa">
                        <input type="password" placeholder="6到20位数字+字母或符号组成" maxlength="20">
                        <i class="emptya"></i>
                        <i class="emptyv"></i>
                    </div>
            </div>
            <div class="submission">
                <a href="#">提交注册</a>
            </div>
        </form>
        <div class="member">
            <a href="#">企业会员注册</a>
        </div>

    </nav>
</template>

<script>
import $ from "jquery"
export default {
    name:"AzRegisterNav",
     mounted() {
         $(function(){
    $(".agree_btn").click(function(){
        $("header").stop().hide();
    })
    $(".input_box input").focus(function(){
        $(".empty").stop().show();
    })
    $(".input_box input").blur(function(){
        $(".empty").stop().hide();
    })
    $(".input_boxs input").focus(function(){
        $(".emptys").stop().show();
    })
    $(".input_boxs input").blur(function(){
        $(".emptys").stop().hide();
    })
    $(".input_boxa input").focus(function(){
        $(".emptya").stop().show();
    })
    $(".input_boxa input").blur(function(){
        $(".emptya").stop().hide();
    })
    $(".input_boxa input").focus(function(){
        $(".emptyv").stop().show();
    })
    $(".input_boxa input").blur(function(){
        $(".emptyv").stop().hide();
    })
})
    },
  methods:{
    back(){
      window.history.back()
    }
  }
}
</script>

<style>
@import "../../assets/css/iconfont.css";
.nav{
    width: 100%;
    height: .43rem;
    line-height: .43rem;
    text-align: center;
    border-bottom: 1px solid #DCDCDC;
    position: relative;
    background-color: #fff;
}
.nav .icon-zuojiantou{
    display: block;
    width: .3rem;
    height: .43rem;
    font-size: .3rem;
    position: absolute;
    top: 0;
    left: .08rem;
}
.nav p{
    font-size: .15rem;
}
.phone_box{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: #fff;
    margin-bottom: .14rem;
    height: .45rem;
    line-height: .45rem;
    font-size: .14rem;
}
.phone_box span{
    display: block;
    width: 1rem;
    padding-left: .14rem;
}
.input_box{
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
}
.input_box input{
    width: 100%;
    height: 100%;
    border: 0 none;
    vertical-align: inherit;
}
.empty{
    display: none;
    transform-origin: 0px 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
    position: absolute;
    width: .35rem;
    height: .45rem;
    background: url(../../../static/img/cha.png) no-repeat center;
    background-size: .17rem .17rem;
    top: 0;
    right: 0;
}
.input_boxs{
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
}
.input_boxs input{
    width: 100%;
    height: 100%;
    border: 0 none;
    vertical-align: inherit;
}
.emptys{
    display: none;
    transform-origin: 0px 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
    position: absolute;
    width: .35rem;
    height: .45rem;
    background: url(../../../static/img/cha.png) no-repeat center;
    background-size: .17rem .17rem;
    top: 0;
    right: 0;
}
.input_tool{
    position: relative;
    width: 1.04rem;
    text-align: center;
    border-left: 1px solid #dcdcdc;
}
.countdown{
    display: block;
    width: 100%;
    height: 100%;
    color: #999;
}
.input_tool a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #222530;
    background: #fff;
}
.input_boxa{
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
}
.input_boxa input{
    width: 100%;
    height: 100%;
    border: 0 none;
    vertical-align: inherit;
}
.emptya{
    display: none;
    transform-origin: 0px 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
    position: absolute;
    width: .35rem;
    height: .45rem;
    background: url(../../../static/img/cha.png) no-repeat center;
    background-size: .17rem .17rem;
    top: 0;
    right: .5rem;
}
.emptyv{
    display: none;
    transform-origin: 0px 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
    position: absolute;
    width: .5rem;
    height: .45rem;
    background: url(../../../static/img/eyes.png) no-repeat center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: .3rem .4rem;
    top: 0;
    right: 0;
}
.submission a{
    display: block;
    width:3.47rem;
    height: .4rem;
    line-height: .4rem;
    margin: 0 auto;
    border-radius: .05rem;
    font-size: .18rem;
    text-align: center;
    color: #fff;
    background: #f60;
}
.member{
    padding: 0 .175rem;
    line-height: .32rem;
    color: #999;
    font-size: .12rem;
}
.member a{
    float: right;
}
</style>
