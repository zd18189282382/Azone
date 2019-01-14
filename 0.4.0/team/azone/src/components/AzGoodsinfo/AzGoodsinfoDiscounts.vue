<template>
    <div>
      <div class="discounts">
          <span class="youhui">优惠</span>
        <div class="discountsInfo">
          <div class="distop">
            <img src="../../../static/img/goodsinfo_arror.png" alt="">
            <p>参加以下活动，预计可省<span>150.00元</span></p>
          </div>
          <div class="manjian">
            <img src="../../../static/img/goodsinfo_bian.png" alt="" class="bian">
            <span class="price">¥100</span>
            <span class="mj">满980用100</span>
            <img src="../../../static/img/goodsinfo_coupon-right.png" alt="" class="coupon-right">
          </div>
          <div class="guaquan">
            <img src="../../../static/img/goodsinfo_yunzun.png" alt="">
            <span>100%刮中券</span>
          </div>
          <div class="cuxioa">
              <span>云钻促销</span>
              <span>普通会员立返269云钻</span>
          </div>
          <div class="cuxioa">
            <span>实名领券</span>
            <span>实名认证领苏宁支付券 </span>
          </div>
        </div>
        <div class="lq">领券</div>
      </div>
      <div class="discountsBox">
      </div>
    </div>

</template>

<script>
    export default {
        name: "AzGoodsinfoDiscounts"
    }
</script>

<style scoped>
  .discounts{
    width:100%;
    padding:.09rem .32rem .09rem .1rem;
    box-sizing: border-box;
    background:white;
    background:url("../../../static/img/goodsinfo_youjiantou.png") no-repeat 3.5rem .11rem;
    background-size:.15rem .15rem;
    font-size:.14rem;
    background-color:white;
    display:flex;
    margin-bottom:.15rem;
  }
  .discounts .youhui{
    display:block;
    line-height:.24rem;
    padding-right:.15rem;
    color:#999;
  }
  .distop{
    display:flex;
    line-height:.24rem;
    padding-right:.35rem;
  }
  .distop img{
    width:.12rem;
    height:.12rem;
    padding-top:.06rem;
    margin-right:.04rem;
  }
  .distop p span{
    color:#f50;
    font-weight:700;
  }

  .manjian{
    display:flex;
    padding:.05rem .02rem;
    position:relative;
  }
  .manjian .bian{
    width:7px;
    height:16px;
  }
  .manjian span{
    display:block;
    line-height:.14rem;
  }
  .manjian .price{
    color:white;
    padding:0 .08rem 0 0;
    background-color:#f60;
    line-height:.16rem;
  }
  .manjian .mj{
    padding-left: .04rem;
    padding-right: .02rem;
    background-color: #fff;
    height: 100%;
    display: inline-block;
    color: #f60;
    border-left-width: 0;
    border-right-width: 0;
    border-top: 1px solid #f60;
    border-bottom: 1px solid #f60;
    line-height:.14rem;
  }
  .manjian .coupon-right{
    height:16px;
    position:absolute;
    left:103px;
  }
  .guaquan{
    display:flex;
    padding:.05rem 0;
  }
  .guaquan img{
    width:.6rem;
    height:.14rem;
    padding-right:.05rem;
  }
  .guaquan span{
    line-height:.14rem;
    font-size:.13rem;
  }
  .cuxioa{
    display:flex;
    padding-top:.03rem;
    padding-bottom:.05rem;
  }
  .cuxioa span:first-child{
    display: block;
    padding: 1px 5px;
    border: 1px solid #f60;
    color: #f60;
    font-size: 11px;
    line-height: 14px;
    white-space: nowrap;
    border-radius: 15px;
  }

  .cuxioa span:last-child{
    font-size:.13rem;
    padding-left:.05rem;
  }

  .lq{
    color:#999;
  }
</style>
