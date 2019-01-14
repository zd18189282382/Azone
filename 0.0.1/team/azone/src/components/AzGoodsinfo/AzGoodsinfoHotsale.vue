<template>
    <div>
      <div class="hotsale">
        <p class="paihang">热销排行</p>
        <div class="list">
          <ul>
            <li>
              <img src="../../../static/img/goodsinfo_hot1.jpg" alt="">
              <p class="hotTitle">爱国者大容量充电宝25000毫安 苹果Type-c手机通用移动电源</p>
              <p class="hotprice">¥<span>179.00</span></p>
            </li>
            <li>
              <img src="../../../static/img/goodsinfo_hot2.jpg" alt="">
              <p class="hotTitle">爱国者大容量充电宝25000毫安 苹果Type-c手机通用移动电源</p>
              <p class="hotprice">¥<span>179.00</span></p>
            </li>
            <li>
              <img src="../../../static/img/goodsinfo_hot3.jpg" alt="">
              <p class="hotTitle">爱国者大容量充电宝25000毫安 苹果Type-c手机通用移动电源</p>
              <p class="hotprice">¥<span>179.00</span></p>
            </li>
            <li>
              <img src="../../../static/img/goodsinfo_hot4.jpg" alt="">
              <p class="hotTitle">爱国者大容量充电宝25000毫安 苹果Type-c手机通用移动电源</p>
              <p class="hotprice">¥<span>179.00</span></p>
            </li>
            <li>
              <img src="../../../static/img/goodsinfo_hot5.jpg" alt="">
              <p class="hotTitle">爱国者大容量充电宝25000毫安 苹果Type-c手机通用移动电源</p>
              <p class="hotprice">¥<span>179.00</span></p>
            </li>
            <li>
              <img src="../../../static/img/goodsinfo_hot6.jpg" alt="">
              <p class="hotTitle">爱国者大容量充电宝25000毫安 苹果Type-c手机通用移动电源</p>
              <p class="hotprice">¥<span>179.00</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoHotsale"
    }
</script>

<style scoped>
  .hotsale{
    width:100%;
    padding:0 .12rem;
    background:white;
  }
  .paihang{
    font-size:.14rem;
    padding-top:.12rem;
  }
  .list {
    width:100%;
   padding-right:.1rem;
    box-sizing: border-box;
  }
  .list ul{
    display:flex;
    width:100%;
    flex:0;
    overflow: hidden;
    overflow-x: auto;
  }
  .list ul::-webkit-scrollbar{
    display:none;
  }
  .list ul li{
    width:1.1rem;
    margin: .12rem .1rem .12rem 0;
  }
  .list ul li img{
    width:1.1rem;
    height:1.1rem;
    border-radius: 4px;
  }
  .list ul li .hotTitle{
    font-size:.12rem;
    text-overflow: ellipsis;
    height: .28rem;
    line-height: .16rem;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding:.05rem 0;
  }
  .list ul li .hotprice{
    font-size: 14px;
    line-height: .15rem;
    color: #f60;
  }
</style>
