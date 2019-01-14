<template>
    <div>
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(c,i) in productinfo.banner">
              <img :src="c.bannerImg" alt=""/>
              <img src="../../../static/img/goodsinfo_banner5.png" alt="" class="nianhuo"/>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <ul class="ulsl">
          <li @click="dd" class="ulfirst"></li>
          <li class="ullast">
            <div class="litwo">
              <router-link to="/cart">
              <div class="cart"> <p v-show="numtai">{{this.$store.getters.GETNUMSS}}</p></div>
              </router-link>
              <div class="dian" @click="ff"></div>
              <div class="rights">
                <ul>
                  <li><a href="#"><img src="../../../static/img/My2.png" alt="">首页</a></li>
                  <li><a href="#"><img src="../../../static/img/my3.png" alt="">购物车</a></li>
                  <li><a href="#"><img src="../../../static/img/my4.png" alt="">搜索</a></li>
                  <li><a href="#"><img src="../../../static/img/my5.png" alt="">全部分类</a></li>
                  <li><a href="#"><img src="../../../static/img/my6.png" alt="">我的易购</a></li>
                  <span></span>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import $ from "jquery"
  import Swiper from "swiper"
    export default {
        name: "AzGoodsinfoBanner",
      props:["productinfo"],
      mounted() {
        new Swiper(".swiper-container", {
          direction: 'horizontal',
          loop: false,
          pagination: {
            el: ".swiper-pagination",
            type: 'fraction',
          }
        });
      },
      data(){
        return{
          numtai:false,
          banner:[
            {
              "bannerImg":"../../static/img/goodsinfo_banner1.jpg"
            },
            {
              "bannerImg":"../../static/img/goodsinfo_banner1.jpg"
            },
            {
              "bannerImg":"../../static/img/goodsinfo_banner2.jpg"
            },
            {
              "bannerImg":"../../static/img/goodsinfo_banner3.jpg"
            },
            {
              "bannerImg":"../../static/img/goodsinfo_banner4.jpg"
            }
          ],
        }
      },
     updated(){
        if (this.$store.getters.GETNUMSS != 0) {
          this.numtai=true;
          // console.log(this.numms)
        } else {
          this.numtai=false;
        }
      },
      methods:{
        dd(){
          window.history.back()
        },
        ff(){
          $(".rights ul").toggle();
        }

      }
    }
</script>

<style scoped>
  .banner{
    width:100%;
    height: 3.75rem;
    background:white;
    position:relative;
  }
  .swiper-container{
    width:100%;
    height: 3.75rem;
    overflow: hidden;
    position:relative;
  }
  .swiper-wrapper{
    width:100%;
    height:100%;
    display:flex;
    flex:0;
  }
  .swiper-slide{
    width:3.75rem;
    height: 3.75rem;
    position:relative;
  }
  .swiper-slide img{
    width:3.75rem;
    height: 3.75rem;
  }
  .swiper-pagination{
    font-size:.12rem;
    height: .18rem;
    width: .38rem;
    line-height:.18rem;
    border-radius: .14rem;
    color: #fff;
    background-color: rgba(30,30,30,.6);
   left:158px;
  }
  .swiper-slide .nianhuo{
    width:.9rem;
    height:.9rem;
    position:absolute;
    right:0;
    top:0;
  }

  .banner .ulsl{
    display:flex;
    position:absolute;
    width:100%;
    top:0;
    height:.44rem;
    box-sizing: border-box;
    padding:.1rem;
    justify-content: space-between;
    z-index: 999;
  }
  .banner .ulfirst{
    width: .3rem;
    height: .3rem;
    background:url(../../../static/img/goodsinfo_return.png) 50% no-repeat;
    background-size:contain;
    background-color:rgba(51,51,51,.2);
    border-radius: 50%;
  }
  .banner  .litwo{
    display:flex;
  }
  .banner  .cart{
    width: .3rem;
    height: .3rem;
    background:url(../../../static/img/goodsinfo_cart.png) 50% no-repeat;
    background-size:contain;
    background-color:rgba(51,51,51,.2);
    border-radius: 50%;
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
  .banner .ullast .litwo .dian{
    width: .3rem;
    height: .3rem;
    background:url(../../../static/img/goodsinfo_....png) 50% no-repeat;
    background-size:contain;
    background-color:rgba(51,51,51,.2);
    border-radius: 50%;
    margin-left:.1rem;
  }
  .rights{
    right: .14rem;
    top: 0;
    height: .45rem;
    width: 19%;
    position: absolute;
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
