<template>
     <header>
        <a href="#" class="iconfont icon-zuojiantou" @click="backfn()"></a>
        <p>登录</p>
    </header>
</template>

<script>
import $ from "jquery"
export default {
    name:"AzSigninHeader",
      methods: {
        backfn() {
          window.history.back()
        }
      }
}
</script>

<style>
@import "../../assets/css/iconfont.css";
header{
    width: 100%;
    height: .43rem;
    line-height: .43rem;
    text-align: center;
    border-bottom: 1px solid #DCDCDC;
    position: relative;
    background-color: #fff;
}
header .icon-zuojiantou{
    display: block;
    width: .3rem;
    height: .43rem;
    font-size: .3rem;
    position: absolute;
    top: 0;
    left: .08rem;
}
header p{
    font-size: .15rem;
}
</style>

