<template>
<!-- 更多服务 -->
    <div class="nav_server">
        <a href="#" class="server">
            <img src="../../../static/img/my16.png" alt="">
            <span>商品关注</span>
            <p></p>
        </a>
        <a href="#" class="server">
            <img src="../../../static/img/my17.png" alt="">
            <span>店铺关注</span>
            <p></p>
        </a>
        <a href="#" class="server">
            <img src="../../../static/img/my18.png" alt="">
            <span>足迹</span>
            <p></p>
        </a>
        <a href="#" class="server">
            <img src="../../../static/img/my19.png" alt="">
            <span>客户服务</span>
            <p></p>
        </a>
        <a href="#" class="server">
            <img src="../../../static/img/my20.png" alt="">
            <span>购物补贴</span>
            <p>津贴</p>
        </a>
        <a href="#" class="server">
            <img src="../../../static/img/my21.png" alt="">
            <span>拼购</span>
            <p></p>
        </a>
        <a href="#" class="server">
            <img src="../../../static/img/my22.png" alt="">
            <span>校园VIP</span>
            <p></p>
        </a>
        <a href="#" class="server">
            <img src="../../../static/img/my23.png" alt="">
            <span>我的活动</span>
            <p></p>
        </a>
    </div>
</template>

<script>
export default {
    name: "AzServer"
}
</script>

<style scoped>
@import "../../assets/css/iconfont.css";
/* 更多服务 */
.nav_server{
  width: 100%;
  height: 1.6rem;
  background: #fff;
  overflow: hidden;
  margin-bottom: .1rem;
}
.server{
  display: flex;
  width: 25%;
  height: .65rem;
  float: left;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 0.15rem;
}
.nav_server .server img{
  display: block;
  width: .25rem;
  height: .25rem;
  margin-bottom: 0.05rem;
  max-width: 100%;
}
.nav_server .server span{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.13rem;
  color: #222;
}
.nav_server .server p{
  display: block;
  width: 100%;
  text-align: center;
  color: #f60;
  font-size: 0.12rem;
}
</style>