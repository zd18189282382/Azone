<template>
  <div class="headerbox">
    <header>
      <div class="left_arrow" @click="cc">
        <a class="iconfont icon-zuojiantou"></a>
      </div>
      <div class="right_searchs">
        <a class="iconfont icon-fangdajing"></a>
        <a href="#" class="inputs">抢千元手机换新券</a>
      </div>
    </header>

  </div>


</template>

<script>
  export default {
    name: "AzClassificationHeader",
    methods: {
      cc() {
        window.history.back()
      }
    }
  }
</script>

<style scoped>
  .headerbox{
    height:.44rem;
    margin-bottom:1px;
    z-index: 999999;
  }
  header {
    width: 100%;
    height: .44rem;
    background-color: #f8f8f8;
    position: fixed;
    box-shadow: 0 1px 1px #DCDCDC;
    z-index: 999999;
  }

  .left_arrow {
    width: .3rem;
    height: .3rem;
    float: left;
    margin-top: .05rem;
    margin-left: .05rem;
    margin-right: .1rem;
  }

  .icon-zuojiantou {
    display: block;
    font-size: 0.3rem;
    color: #a0a4a7;
  }

  .right_searchs {
    width: 3.2rem;
    height: .28rem;
    border: 1px solid #e3e3e3;
    background-color: #fff;
    margin-top: 0.07rem;
    float: left;
    border-top-left-radius: .05rem;
    border-top-right-radius: .05rem;
    border-bottom-left-radius: .05rem;
    border-bottom-right-radius: .05rem;
  }

  .icon-fangdajing {
    float: left;
    display: block;
    width: .12rem;
    height: .12rem;
    color: #d2d2d2;
    margin-left: 0.075rem;
    margin-top: 0.06rem;
    margin-right: 0.075rem;
  }

  .inputs {
    display: block;
    width: 2.93rem;
    height: .28rem;
    font-size: .14rem;
    color: #d7d7d7;
    line-height: .28rem;
  }
</style>
