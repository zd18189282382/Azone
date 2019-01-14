<template>
  <div v-if="show">
    <div class="shaixuanBox">
      <div class="shanxuanleft" @click="ff"></div>
      <div class="shaixuan">
        <ul class="sn">
          <li>苏宁服务</li>
          <li>有货商品</li>
          <li>苏宁国际</li>
          <li>苏宁益品</li>
        </ul>
        <dl>
          <dt>
            <span>收货地区</span>
            <span>北京</span>
          </dt>
          <dd class="price">
            <span class="jg">价格区间</span>
            <div class="qujian">
              <input type="text" placeholder="最低价">
              <span>-</span>
              <input type="text" placeholder="最高价">
            </div>
          </dd>
          <dd class="fenlei">
            <span>分类</span>
          </dd>
          <dd class="fenlei pingpai">
            <span>品牌</span>
            <ul>
              <li><img src="../../../static/img/goodslist_pingpai1.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai2.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai3.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai4.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai4.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai6.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai7.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai8.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai9.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai10.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai11.jpg" alt=""></li>
              <li><img src="../../../static/img/goodslist_pingpai12.jpg" alt=""></li>
            </ul>
          </dd>
          <dd class="fenlei fenlei1">
            <span>网络制式</span>
          </dd>
          <dd class="fenlei fenlei1">
            <span>屏幕尺寸</span>
          </dd>
          <dd class="fenlei fenlei1">
            <span>选购热点</span>
          </dd>
          <dd class="fenlei fenlei1">
            <span>运行内存</span>
          </dd>
          <dd class="fenlei fenlei1">
            <span>像素</span>
          </dd>
          <dd class="fenlei fenlei1">
            <span>手机CPU</span>
          </dd>
          <dd class="fenlei fenlei1">
            <span>颜色</span>
          </dd>
          <dd class="fenlei fenlei1">
            <span>操作系统</span>
          </dd>
        </dl>
        <div class="footer">
          <ul>
            <li>共<span>164980</span>件</li>
            <li>全部重选</li>
            <li>确定</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: "AzGoodslistShaixuan",
    data(){
      return{
        show:true
      }
    },
    mounted(){
      $(".footer ul li:nth-child(3)").click(
        function(){
          $(window).attr('location','/AzGoodslist');
        }
      )
    },
    methods:{
      ff(){
        this.show = !this.show
        $(window).attr('location','/AzGoodslist');
      }
    }
  }
</script>

<style scoped>
  .shaixuanBox{
    width:100%;
    height:100%;
    background:rgba(0,0,0,.6);
    position:absolute;
    top:0;
    overflow: hidden;
    display: flex;
  }
  .shanxuanleft{
    width: 13%;
    height: 100%;
  }
  .shaixuan {
    width: 87%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background:#f2f2f2;
    overflow: hidden;
    overflow-y: auto;
    margin-bottom:.15rem;
  }
  .sn{
    padding: 0 .2rem;
    border-bottom: 1px solid #DCDCDC;
    overflow: hidden;
    background:white;
  }
  .sn li{
    width:.8rem;
    height:.30rem;
    line-height:.3rem;
    float: left;
    font-size: .12rem;
    margin-right: 3.5%;
    background: #F2F2F2;
    text-align: center;
    margin-bottom: .1rem;
    margin-top: .1rem;
    border-radius: 4px;
  }
  dl dt{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:.44rem;
    border-bottom: 1px solid #DCDCDC;
    font-size:.12rem;
    padding:0 .14rem;
    box-sizing: border-box;
    background:white;
  }
  dl  dt span:first-child{
    color: #666;
    font-size: .14rem;
    line-height:.44rem;
  }
  dl  dt span:last-child{
    color: #f60;
    font-size: .13rem;
    line-height:.44rem;
    padding-right:.22rem;
  }
  dl  dt span:last-child:after {
    content: '';
    position: absolute;
    top: 18%;
    right: .15rem;
    display: inline-block;
    width: .08rem;
    height: .08rem;
    border: solid #7D7D7D;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotateZ(225deg);
    transform: rotateZ(225deg);
    -webkit-transform-origin: 25% 25%;
    transform-origin: 25% 25%;
  }
  .price{
    width:100%;
    height:.55rem;
    padding:0 .14rem;
    box-sizing: border-box;
    font-size:.12rem;
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #DCDCDC;
    background:white;
  }
  .price .jg{
    color: #666;
    font-size: .14rem;
    line-height:.55rem;
  }
  .price span{
    display: block;
  }

  .qujian{
    display:flex;
    background:white;
  }
  .qujian input{
    width:.76rem;
    height:.28rem;
    line-height:.28rem;
    font-size:.14rem;
    text-align: right;
    color: #f60;
    border-radius:2px;
    border: 1px solid #DCDCDC;
    padding-right:.1rem;
    box-sizing: border-box;
    margin-top:.14rem;
  }
  .qujian span{
    line-height:.55rem;
    color:#999;
    font-size:.20rem;
    padding:0 .05rem;
  }
  .fenlei{
    background:white;
  }
  .fenlei span{
    color: #666;
    font-size: .14rem;
    line-height:.43rem;
    display:block;
    padding-left:.14rem;
  }
  .fenlei span:after {
    content: '';
    position: absolute;
    top: 33%;
    right: .15rem;
    display: inline-block;
    width: .08rem;
    height: .08rem;
    border: solid #7D7D7D;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotateZ(225deg);
    transform: rotateZ(225deg);
    -webkit-transform-origin: 25% 25%;
    transform-origin: 25% 25%;
  }

  .pingpai{
    margin-top:.15rem;
    background:white;
  }
  .pingpai ul{
    display:flex;
    width:100%;
    flex-wrap: wrap;
    padding-left:.14rem;
    box-sizing: border-box;
  }
  .pingpai ul li{
    width:.87rem;
    height:.42rem;
    border:1px solid #f2f2f2;
    background: white;
    text-align: center;
    border-radius: 0;
    margin:0 .1rem .1rem 0;
  }
  .pingpai ul li img{
    width:.87rem;
    height:.42rem;
  }
  .pingpai:after {
    content: '';
    position: absolute;
    top: 42%;
    right: .15rem;
    display: inline-block;
    width: .08rem;
    height: .08rem;
    border: solid #7D7D7D;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotateZ(225deg);
    transform: rotateZ(225deg);
    -webkit-transform-origin: 25% 25%;
    transform-origin: 25% 25%;
  }
  .fenlei1{
    border-bottom: 1px solid #DCDCDC;
    position:relative;
  }
  .fenlei1 span:after {
    content: '';
    position: absolute;
    top: 48%;
    right: .15rem;
    display: inline-block;
    width: .08rem;
    height: .08rem;
    border: solid #7D7D7D;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotateZ(225deg);
    transform: rotateZ(225deg);
    -webkit-transform-origin: 25% 25%;
    transform-origin: 25% 25%;
  }

  .footer{
    position:fixed;
    bottom:0;
    width:87%;
    height:.5rem;
    background: #FFF;
    border-top: 1px solid #DCDCDC;
    margin-top:.5rem;
  }
  .footer ul{
    display:flex;
    width:100%;
    line-height: .5rem;
  }
  .footer ul li{
    font-size:.13rem;
    width:33.3%;
    text-align: center;
  }
  .footer ul li:first-child span{
    color:#f60;
  }
  .footer ul li:nth-child(2){
    background:#f2f2f2;
  }
  .footer ul li:nth-child(3){
    background:#f60;
    color:white;
  }
</style>
