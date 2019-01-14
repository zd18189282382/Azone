<template>
    <div>
      <div class="old">
          <div class="oldTitle">
            <img src="../../../static/img/goodsinfo_old.png" alt="">
            以旧换新
          </div>
        <div class="oldInfo">
          闲置回收，购机更优惠
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoOld"
    }
</script>

<style scoped>
  .old{
    width:100%;
    height:.48rem;
    margin:.15rem 0;
    background:white;
    padding:.1rem;
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
  }
  .oldTitle{
    font-size:.14rem;
    line-height:.28rem;
    display:flex;
  }
  .oldTitle img{
    width:.2rem;
    height:.2rem;
    padding-top:.03rem;
    padding-right:.1rem;
  }
  .oldInfo{
    font-size:.12rem;
    color:#999;
    line-height:.28rem;
  }
</style>
