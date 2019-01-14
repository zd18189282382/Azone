<template>
<!-- 我的订单 -->
<div>
  <div class="nav_order" :key="n" v-for="(m,n) in datas[num].boxs">
        <div class="order_title">
            <span>{{m.orders}}</span>
            <a href="#">{{m.sees}}</a>
        </div>
        <div class="order_list">
            <a href="#">
                <i class="pay_ico"></i>
                <span>待支付</span>
            </a>
            <a href="#">
                <i class="recieve_ico"></i>
                <span>待收货</span>
            </a>
            <a href="#">
                <i class="comment_ico"></i>
                <span>待评价</span>
            </a>
            <a href="#">
                <i class="maintain_ico"></i>
                <span>退换/售后</span>
            </a>
            <a href="#">
                <i class="order_ico"></i>
                <span>常购清单</span>
            </a>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: "AzOrder",
    props:["datas","num"]
}
</script>

<style scoped>
@import "../../assets/css/iconfont.css";
/* 我的订单 */
.nav_order{
  width: 100%;
  background: #fff;
  margin-bottom: 0.1rem;
}
.order_title{
  width: 100%;
  height: .39rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0 0.14rem;
  border-bottom: 1px solid #f2f2f2;
}
.order_title span{
  display: block;
  font-size: 0.14rem;
}
.order_title a{
  display: block;
  font-size: 0.13rem;
  color: #666;
}
.order_list{
  display: flex;
  height: .8rem;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
}
.order_list a{
  display: flex;
  width: 20%;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: hidden;
}
.order_list a i{
  display: block;
  width: 0.23rem;
  height: 0.23rem;
  margin-bottom: 0.075rem;
  position: relative;
}
.pay_ico{
  background: url(../../../static/img/my11.png) no-repeat;
  background-size: contain;
}
.recieve_ico{
  background: url(../../../static/img/my12.png) no-repeat;
  background-size: contain;
}
.comment_ico{
  background: url(../../../static/img/my13.png) no-repeat;
  background-size: contain;
}
.maintain_ico{
  background: url(../../../static/img/my14.png) no-repeat;
  background-size: contain;
}
.order_ico{
  background: url(../../../static/img/my15.png) no-repeat;
  background-size: contain;
}
.order_list a span{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.13rem;
  color: #222;
}
</style>


