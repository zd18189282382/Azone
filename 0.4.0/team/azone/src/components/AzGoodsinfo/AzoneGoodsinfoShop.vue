<template>
    <div>
      <div class="shop">
          <div class="shopName">
            <img src="../../../static/img/goodsinfo_oppo.jpg" alt="">
            <div class="nameInfo">
              <p> OPPO苏宁自营旗舰店 </p>
              <p>店铺评分<span>4.92</span>分</p>
            </div>
          </div>
          <div class="entershop">
          <div class="kefu kefy">
            <img src="../../../static/img/goodsinfo_kefu.png" alt="">
            <span>联系客服</span>
          </div>
          <div class="kefy">
            <img src="../../../static/img/goodsinfo_dianpu.png" alt="">
            <span>进店逛逛</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoShop"
    }
</script>

<style scoped>
  .shop{
    width:100%;
    background:white;
    margin:.15rem 0;
  }
  .shopName{
    display:flex;
    padding:.12rem .2rem;
    width:100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
  }
  .shopName img{
    width:.48rem;
    height:.48rem;
    margin-right: 10px;
    border: 1px solid hsla(0,0%,87%,.7);
  }
  .shopName .nameInfo{
    font-size:.14rem;
    color:#333;
  }
  .shopName .nameInfo p:nth-child(2){
    margin-top: 12px;
    color: #999;
    font-size:.12rem;
  }
  .shopName .nameInfo p:nth-child(2) span{
    color: red;
  }
  .entershop{
    width:100%;
    height:.44rem;
    display:flex;
    position:relative;
  }
  .kefy{
    width:50%;
    display:flex;
    line-height:.44rem;
  }
  .kefy img{
    width:.23rem;
    height:.23rem;
    vertical-align: middle;
    padding-left:.5rem;
    padding-top:.1rem;
    padding-right:.1rem;
  }
  .kefy span{
    font-size:.14rem;
    text-align:center;
    color:#666;
  }

  .kefu:after {
    content: " ";
    position: absolute;
    right: 188px;
    width: 1px;
    border-right: 1px solid #ddd;
    color: #ddd;
    top: 29%;
    height: 42%;
  }
</style>
