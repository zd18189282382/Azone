<template>
  <div>
    <div class="versions">
      <ul>
        <li>普通版</li>
        <li>客户端</li>
      </ul>
      <p> Copyright © 2002 -2019 苏宁 suning.com 版权所有 </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzIndexVersions"
    }
</script>

<style scoped>
  .versions{
    width:100%;
    background:white;
    padding-top:.3rem;
   padding-bottom:.5rem;
  }
  .versions ul{
    width:100%;
    display:flex;
  }
  .versions ul li{
    width:50%;
    height:.48rem;
    text-align: center;
    line-height:.48rem;
    font-size:.14rem;
    color:#333;
  }
  .versions ul li:first-child{
    background:url("../../../static/img/index_versionsLine.png") no-repeat right center;
    background-size:1px .25rem;
  }
  .versions p{
    color:#999;
    font-size:.12rem;
    text-align: center;
    padding:10px 0;

  }
</style>
