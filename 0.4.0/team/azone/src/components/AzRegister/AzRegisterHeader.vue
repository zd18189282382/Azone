<template>
    <header>
        <div class="reg_protocol">
            <div class="content">
                <div class="head">
                    注册协议
                    <a href="javascript:;" @click="back"></a>
                </div>
                <div class="body">
                    <p>
                        【<b>审慎阅读</b>】您在申请注册流程中点击同意前，应当认真阅读以下协议。
                        <b>请您务必审慎阅读、充分理解协议中相关条款内容，其中包括</b>:
                        <br>
                        <b>1. 与您约定免除或限制责任的条款；</b>
                        <br>
                        <b>2. 与您约定法律适用和管辖的条款；</b>
                        <br>
                        <b>3. 其他以粗体下划线标识的重要条款。</b>
                    </p>
                    <p>
                        如您对协议有任何疑问，可向平台客服咨询。
                        <br>
                        【<b>特别提示</b>】当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。
                    </p>
                    <p>
                        <b>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序</b>。
                        <br>
                        <a href="#">《苏宁易购会员章程》</a>
                        <br>
                        <a href="#">《易付宝协议》</a>
                        <br>
                        <a href="#">《隐私声明》</a>
                    </p>
                    <a href="#" class="agree_btn">同意并继续</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import $ from "jquery"
export default {
    name:"AzRegisterHeader",
   methods:{
      back(){
        window.history.back()
      }
   }
}
</script>

<style>
@import "../../assets/css/iconfont.css";
.reg_protocol{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding-bottom: .03rem;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    z-index: 1;
}
.content{
    width: 3.69rem;
    height: 4.61rem;
    border-radius: .15rem;
    background: #fff;
}
.head{
    position: relative;
    height: .44rem;
    line-height: .44rem;
    font-size: .16rem;
    color: #222;
    text-align: center;
    font-weight: 700;
}
.head a{
    position: absolute;
    width: .21rem;
    height: .21rem;
    background: url(../../../static/img/close.png) no-repeat center;
    background-size: contain;
    top: .1rem;
    right: .1rem;
}
.body{
    height: 4.05rem;
    padding-bottom: .125rem;
}
.body p{
    font-size: .13rem;
    color: #222;
    padding: 0 .17rem;
    line-height: .23rem;
    text-align: justify;
}
.body p a{
    font-size: .13rem;
    color: #f60;
    font-weight: 700;
}
.agree_btn{
    display: block;
    width: 3.45rem;
    height: .45rem;
    line-height: .45rem;
    background-image: linear-gradient(-90deg,#ff8f00 0,#f50 97%);
    border-radius: .1rem;
    font-size: .16rem;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    margin-top: .15rem;
}
</style>
