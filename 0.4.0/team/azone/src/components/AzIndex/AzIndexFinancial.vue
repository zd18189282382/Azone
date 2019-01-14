<template>
    <div>
      <div class="everyday">
        <img src="../../../static/img/index_everydayTit.png" alt="" class="everydayTit">
        <ul>
          <li class="liOne">
            <img src="../../../static/img/index_everydayone1.jpg" alt=""/>
            <p>内存条都用上了水冷散热，你却还是只能拼命吹风</p>
          </li>
          <li class="liTwo">
            <div class="PhoneCity">
              <p class="title">手机馆</p>
              <p class="sapoint">抢1000元手机券</p>
            </div>
            <p class="des">iPhone8全网通4338秒</p>
            <div class="everydayPhone">
              <img src="../../../static/img/index_everydayPhone1.jpg" alt="">
              <img src="../../../static/img/index_everydayPhone2.jpg" alt="">
            </div>
          </li>
          <li class="liThree">
            <p>城市专享</p>
            <p>必抢好物 低至9.9元包邮</p>
            <div class="tuanImg">
              <img src="../../../static/img/index_everydaythree1.jpg" alt=""/>
              <img src="../../../static/img/index_everydaythree2.jpg" alt=""/>
            </div>
          </li>
          <li class="liFour">
            <p>大聚惠</p>
            <p>狂欢不落幕 优惠继续在</p>
            <div class="tuanImg">
              <img src="../../../static/img/index_everydayfour1.jpg" alt=""/>
              <img src="../../../static/img/index_everydayfour2.jpg" alt=""/>
            </div>
          </li>
          <li class="liFour">
            <p>大聚惠</p>
            <p>狂欢不落幕 优惠继续在</p>
            <div class="tuanImg">
              <img src="../../../static/img/index_everydayfour1.jpg" alt=""/>
              <img src="../../../static/img/index_everydayfour2.jpg" alt=""/>
            </div>
          </li>
          <li class="liSix">
            <dl>
              <dd>
                <p>0元试用</p>
                <p :style="{color:'#ff6600'}">送小米新品</p>
                <img src="../../../static/img/index_everydaysix1.jpg" alt="">
              </dd>
              <dd>
                <p>苏宁生鲜</p>
                <p>每满99减30</p>
                <img src="../../../static/img/index_everydaysix2.png" alt="">
              </dd>
            </dl>
          </li>
          <li class="liSix">
            <dl>
              <dd>
                <p>易回收</p>
                <p>购新更省钱</p>
                <img src="../../../static/img/index_everydaysix3.jpg" alt="">
              </dd>
              <dd>
                <p>苏宁数码</p>
                <p>小度新品首发</p>
                <img src="../../../static/img/index_everydaysix4.jpg" alt="">
              </dd>
            </dl>
          </li>
          <li class="liSix">
            <dl>
              <dd>
                <p>Biu+优品</p>
                <p>尖货低至5折</p>
                <img src="../../../static/img/index_everydaysix5.png" alt="">
              </dd>
              <dd>
                <p>二手优品</p>
                <p>苹果X低价抢</p>
                <img src="../../../static/img/index_everydaysix6.png" alt="">
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzIndexFinancial"
    }
</script>

<style scoped>
  .everyday{
    width:100%;
    background:white;
    margin-bottom:.15rem;
  }
  .everydayTit{
    width:100%;
  }
  .everyday ul{
    width:100%;
    display:flex;
    flex-wrap: wrap;
  }
  .everyday ul li{
    width:50%;
    height:1.3rem;
    box-sizing: border-box;
    border-bottom:1px solid #f2f2f2;
    position:relative;
  }
  .everyday ul li:nth-child(2n+1){
    border-right:1px solid #f2f2f2;
  }


  /*.liOne*/
  .liOne img{
    width:100%;
    height:100%;
  }
  .liOne p{
    font-size:.15rem;
    color:white;
    position:absolute;
    bottom:0;
    left:0;
    padding:.04rem .11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }


  /*.liTwo*/
  .liTwo .PhoneCity{
    width:100%;
    overflow: hidden;
  }

  .liTwo .title {
    color: #333;
    font-size: .16rem;
    margin: .1rem 0 0 .1rem;
    font-weight: 800;
    float: left
  }

  .liTwo .sapoint {
    background-color: #007EFF;
    color: white;
    font-size: .12rem;
    float: left;
    margin: .12rem 0 0 .05rem;
    border-radius: .3rem;
    padding: .01rem .05rem;
    line-height: .14rem;
  }

  .liTwo .des {
    color: #999;
    font-size: .12rem;
    margin: 0 0 0 0.1rem;
    line-height: .14rem;
  }

  .liTwo .everydayPhone{
    width:100%;
    display:flex;
  }
  .liTwo .everydayPhone img{
    width:.7rem;
    height:.7rem;
    margin:.05rem .11rem;
  }


  /*.liThree*/
  .liThree p:first-child{
    color: #E73434;
    font-size: .16rem;
    margin: .1rem 0 0 .1rem;
    font-weight: 800;
  }
  .liThree p:nth-child(2){
    color: #999;
    font-size: .12rem;
    margin: .05rem 0 0 0.1rem;
    line-height: .14rem;
  }
  .liThree .tuanImg{
    width:100%;
    display:flex;
  }
  .liThree img{
    width:.7rem;
    height:.7rem;
    margin:.075rem .11rem;
  }

  /*.liFour*/
  .liFour p:first-child{
    color: #333;
    font-size: .16rem;
    margin: .1rem 0 0 .1rem;
    font-weight: 800;
  }
  .liFour p:nth-child(2){
    color: #999;
    font-size: .12rem;
    margin: .05rem 0 0 0.1rem;
    line-height: .14rem;
  }
  .liFour .tuanImg{
    width:100%;
    display:flex;
  }
  .liFour img{
    width:.7rem;
    height:.7rem;
    margin:.075rem .11rem;
  }


  /*.liSix*/
  .liSix dl {
    width: 100%;
    display: flex;
  }

  .liSix dl dd {
    width: 50%;
    height: 100%;
  }

  .liSix dl dd:first-child {
    border-right: 1px solid #f2f2f2;
  }

  .liSix dl dd p:first-child {
    color: #333;
    margin: .05rem 0 0 .1rem;
    font-size: .16rem;
    font-weight: 700;
  }

  .liSix dl dd:last-child p:first-child {
    color: #333;
  }

  .liSix dl dd :nth-child(2) {
    color: #999;
    margin: .05rem 0 .05rem .1rem;
    font-size: .12rem;
  }

  .liSix dl dd img {
    width: .7rem;
    height: .7rem;
    margin: 0 .11rem;
  }
</style>
