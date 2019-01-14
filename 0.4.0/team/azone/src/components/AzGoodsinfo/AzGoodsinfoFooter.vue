<template>
  <div>
    <footer>
      <ul>
        <li>
          <img src="../../../static/img/goodsin_action-service.png" alt="">
        </li>
        <li>
          <img src="../../../static/img/goodsinfo_action-favourite.png" alt="">
        </li>
        <li>
          <img src="../../../static/img/goodsinfo_action-shop.png" alt="">
        </li>
        <li class="buy">立即购买</li>
        <li class="buy join">加入购物车</li>
      </ul>
    </footer>
    <div class="footBox">
      <div class="goumai">
        <div class="close">
          <img src="../../../static/img/goodsinfo_color-close.png" alt=""/>
        </div>
        <div class="goumaiHeader">
          <img :src="productinfo.picbig" alt=""/>
          <div class="header_info">
            <p>¥<span>{{productinfo.price}}</span></p>
            <p>商品编码: <span>{{productinfo.id}}</span></p>
            <p>{{productinfo.shopcont}}</p>
          </div>
        </div>
        <div class="goumaiCon">
          <div class="shuxing">
            <ul>
              <li>
                <h2>颜色</h2>
                <p><span>深灰色</span><span>银色</span></p>
              </li>
              <li>
                <h2>选择版本</h2>
                <p><span>256G</span><span>64G</span></p>
              </li>
            </ul>
          </div>
          <div class="num">
            <div class="shuliang">
              <p>数量</p>
              <p>每人限购一件</p>
            </div>
            <div class="jiajian">
              <span>-</span><span>1</span><span>+</span>
            </div>
          </div>
          <div class="vipServer">
            <div class="vipLeft">
              <img src="../../../static/img/goodsinfo_vipHeader.png" alt=""/>
              <span>PP影视会员</span>
            </div>
            <div class="vipRight">
              <p>硬件最高减120.00元</p>
            </div>
          </div>
          <div class="zengzhi">
            <dl>
              <dt>购买增值服务</dt>
              <dd>
                <div class="zengzhiTop">
                  <div class="ztLeft">
                    <img src="../../../static/img/goodsinfo_yuan.png" alt="" class="yuan">
                    <span>原厂碎屏</span>
                    <span>苹果原厂屏幕免费换屏一次</span>
                  </div>
                  <div class="ztRight">
                    <span class="xiangqing">查看详情</span>
                    <img src="../../../static/img/goodsinfo_chakan.png" alt="" class="chakan">
                  </div>
                </div>
              </dd>
              <dd>
                <div class="zengzhiTop">
                  <div class="ztLeft">
                    <img src="../../../static/img/goodsinfo_yuan.png" alt="" class="yuan">
                    <span>碎屏保</span>
                    <span>双面屏幕各免费更换一次</span>
                  </div>
                  <div class="ztRight">
                    <span class="xiangqing">查看详情</span>
                    <img src="../../../static/img/goodsinfo_chakan.png" alt="" class="chakan">
                  </div>
                </div>
              </dd>
              <dd>
                <div class="zengzhiTop">
                  <div class="ztLeft">
                    <img src="../../../static/img/goodsinfo_yuan.png" alt="" class="yuan">
                    <span>全保修</span>
                    <span>性能故障意外故障全面保修</span>
                  </div>
                  <div class="ztRight">
                    <span class="xiangqing">查看详情</span>
                    <img src="../../../static/img/goodsinfo_chakan.png" alt="" class="chakan">
                  </div>
                </div>
              </dd>
              <dd>
              <div class="zengzhiTop">
                <div class="ztLeft">
                  <img src="../../../static/img/goodsinfo_yuan.png" alt="" class="yuan">
                  <span>手机电池保</span>
                  <span>电池保修一年</span>
                </div>
                <div class="ztRight">
                  <span class="xiangqing">查看详情</span>
                  <img src="../../../static/img/goodsinfo_chakan.png" alt="" class="chakan">
                </div>
              </div>
            </dd>
              <dd>
                <div class="zengzhiTop">
                  <div class="ztLeft">
                    <img src="../../../static/img/goodsinfo_yuan.png" alt="" class="yuan">
                    <span>整机保</span>
                    <span>整机性能故障免费维修</span>
                  </div>
                  <div class="ztRight">
                    <span class="xiangqing">查看详情</span>
                    <img src="../../../static/img/goodsinfo_chakan.png" alt="" class="chakan">
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="goumaiFooter" @click="addCart(productinfo.id)">
          确定
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: "AzGoodsinfoFooter",
    props:["productinfo"],
    mounted(){
      $('.buy').click(function (event) {
        //取消事件冒泡
        event.stopPropagation();
        //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。
        $(".footBox").stop().toggle();
        return false;

        var top = $(document).scrollTop();

        $(document).on('scroll.unable',function (e) {

          $(document).scrollTop(top);

        })

      });

      // $('.join').click(function (event) {
      //   //取消事件冒泡
      //   event.stopPropagation();
      //   //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。
      //   $(".footBox").stop().toggle();
      //   return false;
      // });
      $(".close").click(
        function(){
          $(".footBox").stop().fadeOut();
        }
      )
    },
    methods:{
      addCart(i) {
        this.$store.commit( "NUM")
        // console.log(this.$store.getters.GETNUMSS)
        /**
         *判断如果购物车中有给商品,则数量+1
         */
        let statuskey = true
        for (let j = 0; j < this.$store.state.productId.length; j++) {
          if (this.$store.state.productId[j].id == i) {
            this.$store.dispatch({type: "addNum", data: {id: i}})
            statuskey = false
          }
        }
        /**
         * 若购物车中没该商品,则将该商品加入购物车
         */
        if (statuskey) {
          //用来放所有的ID的数组，存储到localstorage
          // let s=[];
          // s.push(i)
          // console.log(s)
          this.$store.dispatch({type: "addCart", data: {id: i, num: 1}})
          // localStorage.setItem("myid",JSON.stringify(s));
        }
        /**
         * 效果
         * @type {number}
         */

        document.querySelector('.join').style.opacity = 1
        setTimeout(() => {
          document.querySelector('.join').style.opacity = 0.4
        }, 800)

      },
    }
  }
</script>

<style scoped>
  footer {
    width: 100%;
    height: .5rem;
    position: fixed;
    background: white;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ddd;
  }

  ul {
    width: 100%;
    display: flex;
  }

  ul li {
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    padding: 0 .04rem;
  }

  ul li img {
    width: .51rem;
    height: .5rem;
  }

  ul .buy {
    width: .97rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    font-size: .14rem;
    background: #fa0;
    border: none;
    color: white;
  }

  ul .join {
    background-color: #f60;
  }

  .footBox {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    display:none;
  }

  .goumai {
    width: 100%;
    height: 60%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #f2f2f2
  }

  .close {
    width: .4rem;
    height: .4rem;
    position: absolute;
    top: -.3rem;
    right: -.08rem;
  }

  .close img {
    width: .24rem;
    height: .24rem;
  }

  .goumaiHeader {
    width: 100%;
    padding: .1rem .14rem 0;
    height: 1.04rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    background: white;
    position: relative;
  }

  .goumaiHeader img {
    width: 1.12rem;
    height: 1.12rem;
    position: absolute;
    top: -.3rem;
    z-index: 99999;
  }

  .header_info {
    font-size: .12rem;
    padding-left:1.2rem;
    line-height: .2rem;
  }

  .header_info p:first-child {
    color: #f60;
    font-size: .14rem;
  }

  .header_info p:nth-child(2) {
    color: #999;
  }

  .header_info p:last-child {
    color: #333;
  }

  .goumaiCon {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
    width:100%;
    height:251px;
  }

  .shuxing {
    background: white;
  }

  .shuxing ul {
    display: block;
  }

  .shuxing ul li {
    border-bottom: 1px solid #dcdcdc;
    padding: .12rem .1rem;
    width: 100%;
  }

  .shuxing ul li h2 {
    font-size: .14rem;
    font-weight: 500;
    line-height: .3rem;
    padding-bottom: .1rem;
  }

  .shuxing ul li p {
    font-size: .12rem;
    display: flex;
  }

  .shuxing ul li p span {
    display: block;
    height: .28rem;
    padding: 0 .12rem;
    line-height: .28rem;
    margin-right: .12rem;
    background: #f5f5f5;
  }

  .num {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: .12rem .1rem;
    line-height: .26rem;
    background: white;
  }

  .num .shuliang {
    display: flex;
    font-size: .12rem;
  }

  .num .shuliang p:first-child {
    font-size: .14rem;
    color: #333;
  }

  .num .shuliang p:last-child {
    color: #999;
    padding-left: .05rem;
  }

  .num .jiajian {
    display: flex;
    font-size: .12rem;
  }

  .num .jiajian {
    border: 1px solid #999;
    border-radius: 2px;
  }

  .num .jiajian span {
    display: block;
    height: .24rem;
    text-align: center;
    line-height: .24rem;
  }

  .num .jiajian span:first-child,
  .num .jiajian span:last-child {
    width: .24rem;
    font-size: .24rem;
  }

  .num .jiajian span:first-child {
    border-right: 1px solid #999;
  }

  .num .jiajian span:last-child {
    border-left: 1px solid #999;
  }

  .num .jiajian span:nth-child(2) {
    width: .32rem;
    padding: 0 2px;
  }

  .vipServer {
    width: 100%;
    height: .44rem;
    padding: .12rem .1rem;
    margin: .15rem 0;
    background: white;
    display: flex;
    justify-content: space-between;
  }

  .vipLeft {
    display: flex;
  }

  .vipLeft img {
    width: .2rem;
    height: .2rem;
    margin-right: .04rem;
  }

  .vipLeft span {
    display: block;
    font-size: .12rem;
    color: #222;
    padding-top: .01rem;
  }

  .vipRight p {
    color: #f60;
    font-size: .12rem;
    line-height: .16rem;
    height: 16px;
    padding: 0 .04rem;
    border: 1px solid #f60;
  }

  .zengzhi {
    background: white;
  }

  .zengzhi dl dt {
    width: 100%;
    padding: .12rem .1rem;
    height: .39rem;
    font-size: .14rem;
    color: #333;
    border-bottom: 1px solid #f2f2f2;
  }

  .zengzhiTop {
    width: 100%;
    padding: .1rem;
    font-size: .12rem;
    display: flex;
    justify-content: space-between;
  }

  .ztLeft {
    display: flex;
  }

  .ztRight {
    display: flex;
  }

  .ztLeft .yuan {
    width: .13rem;
    height: .15rem;
    margin-right: .08rem;
    margin-top:.03rem;
  }

  .ztRight .chakan {
    width: .14rem;
    height: .14rem;
    margin-left: .04rem;
    margin-top: .05rem;
  }

  .ztLeft span:nth-of-type(1) {
    font-size: .15rem;
    color: #222;
  }

  .ztLeft span:nth-of-type(2) {
    font-size: .12rem;
    color: #999;
    padding-left: .1rem;
    padding-top: .02rem;
  }

  .ztRight .xiangqing {
    padding-top: .02rem;
    color: #f60;
  }
  .goumaiFooter{
    width:100%;
    height:.44rem;
    background:#f60;
    color:white;
    font-size:.14rem;
    line-height:.44rem;
    text-align: center;
  }
</style>
