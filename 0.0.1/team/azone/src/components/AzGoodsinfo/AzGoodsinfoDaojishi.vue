<template>
  <div>
    <div class="daojishi">
      <div class="daojishiAll">
        <div class="price">
          <p class="jiage">¥ <span>{{productinfo.price}}</span></p>
          <div class="time">
            距结束
            <span>00</span>
            天
            <span>06</span>
            :
            <span>09</span>
            :
            <span>42</span>
          </div>
        </div>
        <div class="qianggou">
            <span>已抢购45%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AzGoodsinfoDaojishi",
    props:["productinfo"]
  }
</script>

<style scoped>
  .daojishi {
    width: 100%;
    height: .5rem;
    background: linear-gradient(90deg, #ff0176, #fe3738);
  }

  .daojishiAll {
    display: flex;
    justify-content: space-between;
  }

  .daojishiAll .price {
    display: flex;
    justify-content: space-between;
    line-height:.5rem;
    width:75%;
    padding:0 .05rem 0 .1rem;
    box-sizing: border-box;
  }

  .daojishiAll .price .jiage {
    color: white;
    font-size: .18rem;
  }
  .daojishiAll .price .time {
    color: white;
    font-size: .12rem;
  }
  .daojishiAll .price .time span{
    background:white;
    color:#000;
    padding:.02rem .03rem;
    border-radius:4px;
  }
  .daojishiAll .qianggou{
    background:url("../../../static/img/goodsinfo_daojishi1.png") no-repeat;
    background-size:100% 100%;
    width:25%;
    height:.5rem;
  }
  .daojishiAll .qianggou span{
    width: .65rem;
    height: .1rem;
    justify-content: center;
    background: #df6414;
    border: 1px solid #c05814;
    border-radius: .15rem;
    font-size:.12rem;
    color:white;
    display:block;
    padding: .04rem;
    text-align: center;
    line-height:.1rem;
    margin-top: .28rem;
    margin-left: .15rem;
  }
</style>
