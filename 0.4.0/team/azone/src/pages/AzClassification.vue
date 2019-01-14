<template>
  <div>
    <az-classification-header></az-classification-header>
    <!-- content内容 -->
    <az-classification-box></az-classification-box>

  </div>
</template>

<script>
    import "jquery"
    import publices from "../assets/css/public.css"
    import  icon from   "../assets/css/iconfont.css";
    import classification from "../assets/js/classification"
    import AzClassificationHeader from "../components/AzClassification/AzClassificationHeader";
    import AzClassificationBox from "../components/AzClassification/AzClassificationBox";
    export default {
        name: "AzClassification",
      components:{
        AzClassificationBox,
        AzClassificationHeader,
        classification,
        icon,
        publices
      }
    }
</script>

<style scoped>


</style>
