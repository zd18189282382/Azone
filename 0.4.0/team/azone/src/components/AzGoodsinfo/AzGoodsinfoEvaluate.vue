<template>
    <div>
      <div class="evaluate">
        <div class="evaluateTop">
          <div class="evaluateTopLeft">
            评价（<span>8300+</span>）
          </div>
          <div class="evaluateTopRight">
            好评率98%
            <img src="../../../static/img/goodsinfo_youjiantou.png" alt="">
          </div>
        </div>
        <div class="evaluateCen">
          <ul>
            <li>
            <div class="pingx">
              <img src="../../../static/img/goodsinfo_orgstar.png" alt="">
              <span>1***6</span>
            </div>
            <p class="pingjia">功能很强大漂亮，价格也便宜。，客服非常耐心的回答我各种问题，看了好几家苏宁易购最便宜，电池大续航强。</p>
            <div class="photo">
              <dl>
                <dd>
                  <img src="../../../static/img/goodsinfo_pingjia1.jpg" alt="">
                </dd>
                <dd><img src="../../../static/img/goodsinfo_pingjia2.jpg" alt=""></dd>
                <dd><img src="../../../static/img/goodsinfo_pingjia3.jpg" alt=""></dd>
              </dl>
            </div>
          </li>
            <li>
              <div class="pingx">
                <img src="../../../static/img/goodsinfo_orgstar.png" alt="">
                <span>1***6</span>
              </div>
              <p class="pingjia">此用户没有填写评价内容</p>
              <div class="photo">
                <dl>
                  <dd>
                    <img src="../../../static/img/goodsinfo_pingjia4.jpg" alt="">
                  </dd>
                  <dd><img src="../../../static/img/goodsinfo_pingjia5.jpg" alt=""></dd>
                  <dd><img src="../../../static/img/goodsinfo_pingjia6.jpg" alt=""></dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
        <div class="evaluateBottom">
          <a href="JavaScript:;">查看全部评价</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoEvaluate"
    }
</script>

<style scoped>
  .evaluate{
    width:100%;
    background:white;
  }
  .evaluateTop{
    width:100%;
    height:.39rem;
    line-height:.19rem;
    display:flex;
    box-sizing: border-box;
    padding:.1rem;
    justify-content: space-between;
    border-bottom:1px solid #f2f2f2;
  }
  .evaluateTop .evaluateTopLeft{
    font-size:.14rem;
  }
  .evaluateTop .evaluateTopRight{
    font-size:.12rem;
    color:#f60;
    display:flex;
  }
  .evaluateTop .evaluateTopRight img{
    width:.15rem;
    height:.15rem;
    padding-top:.02rem;
    padding-left:.05rem;
  }

  .evaluateCen{
    width:100%;
    padding:0 .1rem .12rem;
    box-sizing: border-box;
  }
  .evaluateCen ul li{
    border-bottom: 1px solid #f2f2f2;
    padding-bottom:.15rem;
    padding-top:.12rem;
  }
  .evaluateCen ul li:last-child{
    border-bottom: none;
  }
  .evaluateCen ul li .pingx{
      display:flex;
      justify-content: space-between;
  }
  .evaluateCen ul li .pingx img{
    width:.6rem;
    height:.1rem;
  }
  .evaluateCen ul li .pingx span{
    font-size:.12rem;
    color:#999;
  }
  .pingjia{
    font-size:.14rem;
    padding-top: .05rem;
    word-break: break-word;
  }
  .photo dl{
    display:flex;
    width:100%;
  }
  .photo dl dd{
    width:.78rem;
    height:.78rem;
    border: 1px solid hsla(0,0%,79%,.5);
    border-radius: 2px;
    margin:.1rem 0 0 .1rem;
  }
  .photo dl dd img{
    width:.78rem;
    height:.78rem;
  }

  .evaluateBottom{
    width:100%;
    height:.48rem;
    border-top: 1px solid #f2f2f2;
  }
  .evaluateBottom a{
    display:block;
    font-size:.14rem;
    border: 1px solid #979797;
    border-radius: 4px;
    padding: 2px;
    width: 120px;
    margin: 10px auto 0;
    text-align: center;
    line-height:.24rem;
    color:#333;
  }
</style>
