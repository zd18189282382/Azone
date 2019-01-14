<template>
<header>
        <a @click="aa" href="javascript:;" class="iconfont icon-zuojiantou"></a>
        <p>我的易购</p>
        <div class="rights">
            <img class="imgs" src="../../../static/img/My1.png" alt="">
            <ul>
                <li><a href="#"><img src="../../../static/img/My2.png" alt="">首页</a></li>
                <li><a href="#"><img src="../../../static/img/my3.png" alt="">购物车</a></li>
                <li><a href="#"><img src="../../../static/img/my4.png" alt="">搜索</a></li>
                <li><a href="#"><img src="../../../static/img/my5.png" alt="">全部分类</a></li>
                <li><a href="#"><img src="../../../static/img/my6.png" alt="">我的易购</a></li>
              <span></span>
            </ul>
        </div>
</header>
</template>

<script>
import $ from "jquery"
export default {
    name:"AzMyHeader",
    mounted() {
        $(function(){
    $(".imgs").click(function(){
        $(".rights ul").toggle();
    })
})
    },
  methods:{
      aa(){
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
.rights{
    right: .14rem;
    top: 0;
    height: .45rem;
    width: 19%;
    position: absolute;
}
.rights img{
    display: block;
    width: .25rem;
    height: .25rem;
    position: absolute;
    top: 25%;
    right: 0;
}
.rights ul{
    display: none;
    position: absolute;
    top: .55rem;
    right: -.09rem;
    background: #484F55;
    z-index: 112;
    border: 1px solid transparent;
    border-radius: 2px;
}
.rights ul li{
    border-bottom: 1px solid #5B6166;
    width: 1.25rem;
    height: .44rem;
    line-height: .44rem;
    text-align: left;
    text-indent: .4em;
    background: #484F55;
}
.rights ul span{
    display: inline-block;
    position: absolute;
    top: -.1rem;
    left: .96rem;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-bottom: .1rem solid #484F55;
    border-right: .1rem solid transparent;
    border-left: .1rem solid transparent;
}
.rights ul li a{
    position: relative;
    display: block;
    width: 100%;
    color: #fff;
    font-size: .14rem;
}
.rights ul li a img{
    display: block;
    width: .25rem;
    height: .25rem;
    position: absolute;
    top: .08rem;
    left: .08rem;
}
</style>
