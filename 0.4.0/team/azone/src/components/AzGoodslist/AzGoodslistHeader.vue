<template>
  <div>
    <div class="headerbox">
      <header>
        <ul>
          <li> <router-link to="/"><i class="iconfont icon-zuosanjiao1"></i></router-link></li>
          <li>
            <img src="../../../static/img/goodslist_header2.png" alt="">
            <span>手机</span>
          </li>
          <li>
            <img src="../../../static/img/goodslist_header1.png" alt="">
          </li>
        </ul>
      </header>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AzGoodslistHeader",
    methods:{
      // cc(){
      //   window.history.back()
      // }
    }
  }
</script>

<style scoped>

  .headerbox{
    width: 100%;
    height: 44px;
    box-shadow: 0 1px 1px #DCDCDC;
  }
  header {
    width: 100%;
    height: 44px;
    background: #FFF;
    position:fixed;
    z-index: 9999999;
    box-shadow: 0 1px 1px #DCDCDC;
  }

  header ul {
    display: flex;
    width: 100%;
    height: 100%;
  }

  header ul li:first-child{
    margin:0 .14rem;
  }
  header ul li:first-child i {
    display: block;
    line-height:.44rem;
    font-size:.20rem;
  }

  header ul li:nth-child(2) {
    width: 2.81rem;
    height: .3rem;
    background: #eee;
    margin:.06rem .14rem .06rem 0;
    border-radius: 5px;
    display:flex;
  }

  header ul li:nth-child(2) img {
    width:.22rem;
    height:.22rem;
    padding-top:.08rem;
    padding-left:.1rem;
  }
  header ul li:nth-child(2) span{
    font-size:.13rem;
    line-height:.3rem;
    padding-left:.08rem;
  }

  header ul li:nth-child(3) img{
    width:.3rem;
    height:.3rem;
    padding-top:.1rem;
    padding-right: .1rem;
  }
</style>
