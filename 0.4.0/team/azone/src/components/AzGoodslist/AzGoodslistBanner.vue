<template>
    <div>
      <div class="bannerbox">
        <div class="banner">
          <img src="../../../static/img/goodslist_banner.jpg" alt="">
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "AzGoodslistBanner"
    }
</script>

<style scoped>
  .bannerbox{
    width:100%;
    height:1.35rem;
  }
  .banner{
    width:100%;
    height:1.35rem;
    position:fixed;
    z-index: 9999999;
  }
  img{
    width:100%;
    height:1.35rem;
  }
</style>
