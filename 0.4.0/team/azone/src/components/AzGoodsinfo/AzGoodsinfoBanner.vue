<template>
  <div>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="productinfo.picbig" alt=""/>
            <img src="../../../static/img/goodsinfo_banner5.png" alt="" class="nianhuo"/>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="header">
        <ul class="ul1">
          <li @click="dd"></li>
          <li>
            <div class="litwo">
              <router-link to="/cart">
              <div class="cart"><p v-show="numtai">{{this.$store.getters.GETNUMSS}}</p></div>
              </router-link>
              <div class="dian">
              </div>
            </div>
          </li>
        </ul>
        <ul class="ul2">
          <li @click="dd"></li>
          <li>商品详情</li>
          <li>
            <div class="litwo">
              <router-link to="/cart">
              <div class="cart"> <p v-show="numtai">{{this.$store.getters.GETNUMSS}}</p></div>
              </router-link>
              <div class="dian">
              </div>
            </div>
          </li>
        </ul>
        <dl class="caidan">
          <router-link tag="dd" to="/AzIndex">首页</router-link>
          <router-link tag="dd" to="/AzIndex">购物车</router-link>
          <router-link tag="dd" to="">搜索</router-link>
          <router-link tag="dd" to="/az">全部分类</router-link>
          <router-link tag="dd" to="/AzMy">我的易购</router-link>
          <img src="../../../static/img/goodsinfo_caidan.png" alt=""/>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import $ from "jquery"
  export default {
    name: "AzGoodsinfoBanner",
    props:["productinfo"],
    methods:{
      dd(){
        window.history.back()
      },
    },
    mounted() {
      new Swiper(".swiper-container", {
        direction: 'horizontal',
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          type: 'fraction',
        }
      });

      $(window).scroll(function () {
        var scroTop = $(window).scrollTop();
        if (scroTop > 300) {
          $('.header .ul1').hide("slow");
          $('.header .ul2').show("slow");
        } else {
          $('.header .ul1').show("slow");
          $('.header .ul2').hide("slow");
        }
      });


      $('.dian').click(function (event) {
        //取消事件冒泡
        event.stopPropagation();
        //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。
        $(".caidan").stop().toggle();
        return false;
      });
      //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
      $(document).click(function(event){
        var _con = $('.caidan');   // 设置目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
          _con.hide();          //淡出消失
        }
      });

    },
    updated(){
      if (this.$store.getters.GETNUMSS != 0) {
        this.numtai=true;
        // console.log(this.numms)
      } else {
        this.numtai=false;
      }
    },
    data() {
      return {
        numtai:false
        // banner: [
        //   {
        //     "bannerImg": "../../static/img/goodsinfo_banner1.jpg"
        //   },
        //   {
        //     "bannerImg": "../../static/img/goodsinfo_banner1.jpg"
        //   },
        //   {
        //     "bannerImg": "../../static/img/goodsinfo_banner2.jpg"
        //   },
        //   {
        //     "bannerImg": "../../static/img/goodsinfo_banner3.jpg"
        //   },
        //   {
        //     "bannerImg": "../../static/img/goodsinfo_banner4.jpg"
        //   }
        // ],
      }
    }
  }
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 3.75rem;
    background: white;
    position: relative;
  }

  .swiper-container {
    width: 100%;
    height: 3.75rem;
    overflow: hidden;
    position: relative;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex: 0;
  }

  .swiper-slide {
    width: 3.75rem;
    height: 3.75rem;
    position: relative;
  }

  .swiper-slide img {
    width: 3.75rem;
    height: 3.75rem;
  }

  .swiper-pagination {
    font-size: .12rem;
    height: .18rem;
    width: .38rem;
    line-height: .18rem;
    border-radius: .14rem;
    color: #fff;
    background-color: rgba(30, 30, 30, .6);
    left: 158px;
  }

  .swiper-slide .nianhuo {
    width: .9rem;
    height: .9rem;
    position: absolute;
    right: 0;
    top: 0;
  }

  .header{
    position: fixed;
    width:100%;
    height:.44rem;
    top: 0;
    z-index:1;
  }
  .banner ul {
    display: flex;
    width: 100%;
    height: .44rem;
    box-sizing: border-box;
    padding: .1rem;
    justify-content: space-between;
    z-index: 0;
  }

  .banner .ul1 li:first-child {
    width: .3rem;
    height: .3rem;
    background: url(../../../static/img/goodsinfo_return.png) 50% no-repeat;
    background-size: contain;
    background-color: rgba(51, 51, 51, .2);
    border-radius: 50%;
  }
  .banner .ul1{

  }
  .banner .ul1 li:last-child .litwo {
    display: flex;
  }

  .banner .ul1 li:last-child .litwo .cart {
    width: .3rem;
    height: .3rem;
    background: url(../../../static/img/goodsinfo_cart.png) 50% no-repeat;
    background-size: contain;
    background-color: rgba(51, 51, 51, .2);
    border-radius: 50%;
    position: relative;
  }

  .banner .ul1 li:last-child .litwo .dian {
    width: .3rem;
    height: .3rem;
    background: url(../../../static/img/goodsinfo_....png) 50% no-repeat;
    background-size: contain;
    background-color: rgba(51, 51, 51, .2);
    border-radius: 50%;
    margin-left: .1rem;
    position:relative;
  }
  .banner .ul2{
    background:white;
    border-bottom: 1px solid #ddd;
    display:none;
  }
  .banner .ul2 li:first-child {
    width: .3rem;
    height: .3rem;
    background: url(../../../static/img/goodsinfo_header1.png) 50% no-repeat;
    background-size: contain;
    float: left;
  }
  .banner .ul2 li:nth-child(2){
    font-size:.14rem;
    color:#333;
    line-height:.26rem;
    float:left;
    margin-left:1.1rem;
  }
  .banner .ul2 li:last-child .litwo {
    display: flex;
    float:right;
  }

  .banner .ul2 li:last-child .litwo .cart {
    width: .3rem;
    height: .3rem;
    background: url(../../../static/img/goodsinfo_header2.png) 50% no-repeat;
    background-size: contain;
    position: relative;
  }
  .cart p{
    width: .16rem;
    height: .16rem;
    border-radius: 50%;
    background: red;
    font-size: .06rem;
    color: #fff;
    text-align: center;
    line-height: .16rem;
    position: absolute;
    right: 0;
    top: 0;
  }

  .banner .ul2 li:last-child .litwo .dian {
    width: .3rem;
    height: .3rem;
    background: url(../../../static/img/goodsinfo_header3.png) 50% no-repeat;
    background-size: contain;
    margin-left: .1rem;
    position:relative;
  }

  .caidan{
    width:1.02rem;
    font-size:.14rem;
    background: #484f55;
    color:white;
    position:absolute;
    top: 54px;
    right: 9px;
    display:none;
  }
  .caidan img{
    position:absolute;
    top: -8px;
    right: 8px;
    width:.16rem;
  }
  .caidan dd{
    width:100%;
    height:.44rem;
    border-bottom: 1px solid #5b6166;
    line-height:.44rem;
    padding-left:.36rem;
  }
  .caidan dd:nth-child(1){
    background: url(../../../static/img/goodsinfo_caidan1.png) no-repeat .05rem center;
    background-size:.24rem .24rem;
  }
  .caidan dd:nth-child(2){
    background: url(../../../static/img/goodsinfo_caidan2.png) no-repeat .05rem center;
    background-size:.24rem .24rem;
  }
  .caidan dd:nth-child(3){
    background: url(../../../static/img/goodsinfo_caidan3.png) no-repeat .05rem center;
    background-size:.24rem .24rem;
  }
  .caidan dd:nth-child(4){
    background: url(../../../static/img/goodsinfo_caidan4.png) no-repeat .05rem center;
    background-size:.24rem .24rem;
  }
  .caidan dd:nth-child(5){
    background: url(../../../static/img/goodsinfo_caidan5.png) no-repeat .05rem center;
    background-size:.24rem .24rem;
  }
</style>
