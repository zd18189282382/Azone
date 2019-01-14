<template>
    <div>
      <div class="server">
        <ul>
          <li>苏宁发货</li>
          <li>次日达</li>
          <li>86元免基础运费（60.00kg内）</li>
          <li>自提</li>
          <li>商品保管说明</li>
          <li>7天无理由退货（激活后不支持）</li>
          <li>代客检</li>
        </ul>
        <img src="../../../static/img/goodsinfo_..png" alt=""/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoServer"
    }
</script>

<style scoped>
  .server{
    width:100%;
    box-sizing: border-box;
    padding:.1rem;
    background-color: #f8f8f8;
    position:relative;
    border-bottom: 1px solid #ddd;
  }
  .server ul{
    display:flex;
    width:100%;
    flex-wrap: wrap;
  }
  .server ul li{
    font-size: .12rem;
    margin-right:.1rem;
    word-wrap : break-word;
    display: inline;
    line-height:.22rem;
    color:#999;
  }
  .server ul li::before{
    content: "";
    display: inline-block;
    width: 13px;
    height: 13px;
    background: url(../../../static/img/goodsinfo_icon-sprite.png) -126px -42px;
    margin-right: 3px;
    background-size: 152px 364px;
    vertical-align: middle;
  }

  .server img{
    position:absolute;
    top: 9px;
    right: 14px;
    width:.2rem;
    height:.2rem;
  }

</style>
