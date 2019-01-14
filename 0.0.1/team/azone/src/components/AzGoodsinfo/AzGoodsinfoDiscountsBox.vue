<template>
  <div>
    <div class="Bigbox">
      <div class="discountsbox">
        <div class="discountsboxHeader">
          <span>优惠</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "AzGoodsinfoDiscountsBox"
    }
</script>

<style scoped>
  .Bigbox{
    width:100%;
    height:6.67rem;
    background:rgba(0,0,0,.5);
    overflow: hidden;
    position:fixed;
    top:0;
    left:0;
    z-index: 99;
  }
  .discountsbox{
    width:100%;
    height:66.66%;
    background:white;
    position:fixed;
    bottom:0;
    left:0;
    overflow: hidden;
    overflow-y: auto;
  }
  .discountsboxHeader{
    width:100%;
    height:.32rem;
    /*font-size:.14rem;*/
    line-height: .32rem;
    text-align: center;
  }
</style>
