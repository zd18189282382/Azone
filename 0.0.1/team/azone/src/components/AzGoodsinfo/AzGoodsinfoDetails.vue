<template>
    <div>
      <div class="details">
          <div class="vip">
            <img src="../../../static/img/goodsinfo_VIP.gif" alt="">
            <p class="vipmain">加入会员返云钻，下单立返约125.76元</p>
            <p class="kaitong">立即开通</p>
          </div>
          <p class="proTitle">
            <span>自营</span>
            【领券立减 任性付分期免息 】OPPO K1 千元屏幕指纹手机 6+64G 梵星蓝 光感屏幕指纹全网通4G 双卡双待手机
          </p>
          <p class="subp">
            【领100+50券立减 任性付3期免息】
            <a href="JavaScript:;">R17王者荣耀版开售！ K1领券立减！抢！</a>
          </p>
          <p class="zhifubao">支持支付宝</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoDetails"
    }
</script>

<style scoped>
  .details{
    width:100%;
    background:white;
    padding-top:.12rem;
  }
  .vip{
    width:100%;
    height:.37rem;
    background:#fff5eb;
    display:flex;
    box-sizing: border-box;
    padding-left:.12rem;
  }
  .vip img{
    width:.4rem;
    height:.2rem;
   padding-top: .05rem;
  }
  .vip p{
    font-size:.13rem;
    line-height:.37rem;
  }
  .vip .vipmain{
    margin-left:.14rem;
  }
  .vip .kaitong{
    width:.7rem;
    height:.37rem;
    text-align: center;
    background:#ffe8d3;
    color:#222;
    margin-left:.17rem;
  }
  .proTitle{
    width:100%;
    box-sizing: border-box;
    padding:.12rem .22rem 0 .12rem;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    overflow: hidden;
    font-size: .16rem;
    line-height:.24rem;
  }
  .proTitle span {
    display: inline-block;
    padding: 1px 5px 0;
    background: #f60;
    color: #fff;
    border-radius: 2px;
    font-size:.12rem;
    vertical-align: 1px;
    line-height:.16rem;
  }
  .subp{
    font-size:.14rem;
    line-height:.24rem;
    padding:0 .22rem 0 .12rem;
  }
  .subp a{
    color:#f60;
    text-decoration: underline;
  }
  .zhifubao{
    font-size:.14rem;
    padding:0 .22rem 0 .12rem;
    line-height:.3rem;
    color:#666;
  }
</style>
