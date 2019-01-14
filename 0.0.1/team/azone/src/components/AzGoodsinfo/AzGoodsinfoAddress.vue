<template>
    <div>
      <div class="addressBox">
        <div class="address">
          <div class="addressLeft">
            送&nbsp;&nbsp;至
          </div>
          <div class="addressRight">
            <p class="dizhi">
              <span>北京</span>
              <span>东城区</span>
            </p>
            <p class="beizhu">备货中，预计1月08日到库，到库后立即为您发货。</p>
          </div>
        </div>
        <div class="weight">
          <div class="weightLeft">
            重&nbsp;&nbsp;量
          </div>
          <div class="weightRight">
            <p>0.4kg</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoAddress"
    }
</script>

<style scoped>
  .addressBox{
    width:100%;
    background:white;
  }
  .address{
    width:100%;
    box-sizing: border-box;
    padding:.1rem;
    display:flex;
  }
  .addressLeft{
    font-size:.14rem;
    color:#999;
    padding-right:.1rem;
  }
  .addressRight .dizhi{
    display:flex;
    font-size:.14rem;
    background:url("../../../static/img/goodsinfo_dizhi.png") no-repeat left center;
    background-size: 14px 14px;
    padding-left:.18rem;
  }
  .addressRight .dizhi span{
    padding-right:.1rem;
  }
  .addressRight .beizhu{
    font-size:.13rem;
    line-height:.28rem;
    color:#f84c4c;
  }
  .weight{
    border-bottom: 1px solid #f2f2f2;
    border-top: 1px solid #f2f2f2;
    width:100%;
    box-sizing: border-box;
    padding:.1rem;
    display:flex;
  }
  .weight .weightLeft{
    font-size:.14rem;
    color:#999;
    padding-right:.1rem;
  }
  .weight .weightRight p{
    font-size:.14rem;
  }
</style>
