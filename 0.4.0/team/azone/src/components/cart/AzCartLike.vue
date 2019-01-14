<template>
  <!-- 猜你喜欢 -->
  <div class="guess_like">
    <div class="end_loading">
      <span>您可能感兴趣的商品</span>
    </div>
    <ul class="guess_list">
      <li class="my_show">
        <a href="#">
          <div class="show_title"></div>
          <div class="guang"></div>
          <div class="circle144">
            <img src="../../../static/img/my28.png" alt="">
          </div>
          <div class="circle98">
            <img src="../../../static/img/my4.jpg" alt="">
          </div>
          <div class="circle106">
            <img src="../../../static/img/my5.jpg" alt="">
          </div>
        </a>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my6.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my6.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my7.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my8.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my9.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my10.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my11.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my12.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my13.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
      <li>
        <a href="#"><img src="../../../static/img/my13.jpg" alt=""></a>
        <p class="like_name">三星(SAMSUNG) UA65MU6310JXXZ 65英寸 4K超高清 HDR功能 网络 智能 LED液晶电视</p>
        <p class="like_price">￥<em>9335.00</em></p>
      </li>
    </ul>
    <div class="end_loading last">
      <span>以上根据您购物车的商品推荐</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzCartLike"
    }
</script>

<style scoped>
  @import "../../assets/css/iconfont.css";
  /* 猜你喜欢 */
  .guess_like{
    transform-origin: 0px 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
  }
  .guess_title{
    width: 1.19rem;
    height: 0.14rem;
    background: url(../../../static/img/my24.png) no-repeat;
    background-size: contain;
    margin: 0.1rem auto;
  }
  .guess_list{
    width: 3.75rem;
    margin: 0 auto;
    overflow: hidden;
  }
  .guess_list li{
    width: 1.87rem;
    height: 2.65rem;
    background: #fff;
    float: left;
    border-right: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    position: relative;
  }
  .guess_list li img{
    display: block;
    width: 1.865rem;
    height: 1.87rem;
    border: 0 none;
  }
  .guess_list li.my_show a{
    display: block;
    width: 1.87rem;
    height: 2.65rem;
    background: url(../../../static/img/my3.jpg) no-repeat;
    background-size: contain;
  }
  .show_title{
    width: 1.87rem;
    height: .595rem;
    background: url(../../../static/img/my25.png) no-repeat;
    background-size: contain;

  }
  .guang{
    width: .65rem;
    height: .65rem;
    background: url(../../../static/img/my29.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 1.47rem;
    left: .615rem;
  }
  .my_show .circle144{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    animation: circleScale 2s ease-in-out 0.2s;
    width: .72rem;
    height: .72rem;
    background: url(../../../static/img/my26.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 0.19rem;
    top: .72rem;
  }
  .my_show .circle144 img{
    width: .475rem;
    height: .475rem;
  }
  .my_show .circle98{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    animation: circleScale 2s ease-in-out 0.2s;
    width: .49rem;
    height: .49rem;
    background: url(../../../static/img/my26.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 1.225rem;
    top: .67rem;
  }
  .my_show .circle98 img{
    width: .325rem;
    height: .325rem;
  }
  .my_show .circle106{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    animation: circleScale 2s ease-in-out 0.2s;
    width: .53rem;
    height: .53rem;
    background: url(../../../static/img/my26.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 1.085rem;
    top: 2.07rem;
  }
  .my_show .circle106 img{
    width: .35rem;
    height: .35rem;
  }
  .like_name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #444;
    font-size: 0.12rem;
    margin: 0.05rem 0.1rem;
  }
  .like_price{
    color: #f60;
    font-size: 0.12rem;
    padding: 0.05rem 0.1rem 0;
  }
  .like_price em{
    font-size: .16rem;
  }
  .last{
    margin-bottom: .5rem;
  }
  .end_loading{
    width: 100%;
    border: solid #dcdcdc;
    border-width: 1px 0 0;
    position: relative;
    margin-top: .325rem;
  }
  .end_loading span{
    background: #f2f2f2;
    color: #909090;
    display: block;
    text-align: center;
    position: absolute;
    left: 35%;
    margin: 0 auto;
    top: -0.175rem;
    font-size: .12rem;
  }
</style>
