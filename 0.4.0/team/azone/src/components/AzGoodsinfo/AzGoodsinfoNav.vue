<template>
    <div>
      <div class="nav">
        <ul>
         <router-link tag="li" to="/AzGoodsinfo">图文详情</router-link>
          <router-link tag="li" to="/AzGoodsinfo/AzGoodsinfoParameter">规格参数</router-link>
          <router-link tag="li" to="/AzGoodsinfo/AzGoodsinfoAftermarket">包装售后</router-link>
        </ul>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoNav"
    }
</script>

<style scoped>
  .xxx{
    border-bottom: 2px solid #f60;
    color: #f60;
  }
.nav{
  width:100%;
  background:white;
  line-height:.44rem;
  margin:.15rem 0;
}
.nav ul{
  font-size:.14rem;
  display:flex;
 margin:0 auto;
  width:60%;
}
.nav ul li{
  width:.58rem;
  height:.44rem;
  text-align: center;
  line-height:.44rem;
  box-sizing: border-box;
  margin:0 .07rem;
}
</style>
