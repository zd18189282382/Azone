<template>
  <div class="box">
    <az-goodslist-header></az-goodslist-header>
    <az-goodslist-banner></az-goodslist-banner>
    <keep-alive>
    <az-goods-tabs></az-goods-tabs>
    </keep-alive>
  </div>
</template>

<script>
    import AzGoodslistHeader from "../components/AzGoodslist/AzGoodslistHeader";
    import AzGoodslistBanner from "../components/AzGoodslist/AzGoodslistBanner";
    import AzGoodsTabs from "../components/AzGoodslist/AzGoodsTabs";
    export default {
        name: "AzGoodslist",
      components: { AzGoodsTabs, AzGoodslistBanner, AzGoodslistHeader}
    }
</script>

<style>
  @import "../assets/css/AzIndex.css";
  @import "../assets/css/iconfont1.css";
  .box{
    width:3.75rem;
  }
</style>
