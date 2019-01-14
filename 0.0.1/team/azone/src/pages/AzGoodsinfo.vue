<template>
    <div class="box">
      <az-goodsinfo-banner :productinfo="productinfo"></az-goodsinfo-banner>
      <az-goodsinfo-daojishi :productinfo="productinfo"></az-goodsinfo-daojishi>
      <az-goodsinfo-details></az-goodsinfo-details>
      <az-goodsinfo-discounts></az-goodsinfo-discounts>
      <az-goodsinfo-address></az-goodsinfo-address>
      <az-goodsinfo-server></az-goodsinfo-server>
      <az-goodsinfo-old></az-goodsinfo-old>
      <az-goodsinfo-evaluate></az-goodsinfo-evaluate>
      <az-goodsinfo-shop></az-goodsinfo-shop>
      <az-goodsinfo-hotsale></az-goodsinfo-hotsale>
      <az-goodsinfo-nav></az-goodsinfo-nav>
      <az-goodsinfo-footer :productinfo="productinfo"></az-goodsinfo-footer>
      <az-index-return></az-index-return>
  </div>
</template>

<script>
    import AzGoodsinfoBanner from "../components/AzGoodsinfo/AzGoodsinfoBanner";
    import AzGoodsinfoDaojishi from "../components/AzGoodsinfo/AzGoodsinfoDaojishi";
    import AzGoodsinfoDetails from "../components/AzGoodsinfo/AzGoodsinfoDetails";
    import AzGoodsinfoDiscounts from "../components/AzGoodsinfo/AzGoodsinfoDiscounts";
    import AzGoodsinfoAddress from "../components/AzGoodsinfo/AzGoodsinfoAddress";
    import AzGoodsinfoServer from "../components/AzGoodsinfo/AzGoodsinfoServer";
    import AzGoodsinfoOld from "../components/AzGoodsinfo/AzGoodsinfoOld";
    import AzGoodsinfoEvaluate from "../components/AzGoodsinfo/AzGoodsinfoEvaluate";
    import AzGoodsinfoShop from "../components/AzGoodsinfo/AzoneGoodsinfoShop";
    import AzGoodsinfoHotsale from "../components/AzGoodsinfo/AzGoodsinfoHotsale";
    import AzGoodsinfoNav from "../components/AzGoodsinfo/AzGoodsinfoNav";
    import AzGoodsinfoFooter from "../components/AzGoodsinfo/AzGoodsinfoFooter";
    import AzIndexReturn from "../components/AzGoodsinfo/AzIndxReturn";
    import AzGoodsinfoDiscountsBox from "../components/AzGoodsinfo/AzGoodsinfoDiscountsBox";
    import data from "../../static/data/azgoodstab"

    export default {
        name: "AzGoodsinfo",
      components: {
        AzIndexReturn,
        AzGoodsinfoFooter,
        AzGoodsinfoNav,
        AzGoodsinfoHotsale,
        AzGoodsinfoShop,
        AzGoodsinfoEvaluate,
        AzGoodsinfoOld,
        AzGoodsinfoServer,
        AzGoodsinfoAddress, AzGoodsinfoDiscounts, AzGoodsinfoDetails, AzGoodsinfoDaojishi, AzGoodsinfoBanner},
      data(){
          return{
            "productinfo": {},
            "businessarea":{
              "businessareaData":[]
            }
          }
      },
      mounted(){
        this.businessarea=data;
        // console.log(this.businessarea)
      },
      watch: {
        businessarea: function (n, o) {
          for (let i in n.businessareaData) {
            if (n.businessareaData[i].id == this.$route.query.productid) {
              this.productinfo = n.businessareaData[i]
            }
          }
        }
      }
    }
</script>

<style>
  @import "../assets/css/AzIndex.css";
  @import "../assets/css/iconfont.css";
  .box{
    width:3.75rem;
    height:100%;
    overflow: hidden;
  }
</style>
