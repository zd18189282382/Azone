<template>
  <div>
    <header>
      <router-link to="/az">
        <img src="../../../static/img/index_feilei.png" alt=""/>
      </router-link>
      <a href="JavaScript:;" class="sousuo">新年换新每满199减60</a>
      <a href="/login" class="reg">登录</a>
    </header>
  </div>
</template>

<script>
  import $ from "jquery"

  export default {
    name: "AzIndexHeader",
    mounted() {
      $(window).scroll(function () {
          var scroTop = $(window).scrollTop();
          if (scroTop > 0) {
            $('header').css({background:" rgba(255, 192, 0, 1)"});
          }else{
            $('header').css({background:" rgba(255, 192, 0, 0)"});
          }
        }
      )
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: .44rem;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 192, 0, 0);
    line-height: .44rem;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    padding: 0 .1rem;
    z-index: 99999;
    border-bottom: none;
  }

  header img {
    width: .22rem;
    height: .35rem;
    padding-top: .06rem;
  }

  header .sousuo {
    display: block;
    width: 2.81rem;
    height: .36rem;
    border-radius: .16rem;
    font-size: .13rem;
    color: #999;
    background: rgba(255, 255, 255, 0.8);
    margin-top: .04rem;
    padding-left: .3rem;
    box-sizing: border-box;
    line-height: .36rem;
  }

  header .reg {
    display: block;
    font-size: .14rem;
    color: #fff;
    line-height: .44rem;
  }

</style>
