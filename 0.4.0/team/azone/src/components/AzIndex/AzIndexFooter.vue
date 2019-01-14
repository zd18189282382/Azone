<template>
  <div>
    <footer>
      <ul>
        <li>
          <router-link to="/">
          <img src="../../../static/img/index_footershouye.png" alt="">
          <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/az">
          <img src="../../../static/img/index_footerss.png" alt="">
          <p>分类</p>
          </router-link>
        </li>
        <li>

          <img src="../../../static/img/index_footerbq.png" alt="">
          <p>必抢清单</p>
        </li>
        <li class="pos">
          <router-link to="/cart">
          <img src="../../../static/img/index_footercart.png" alt="">
          <p>购物车</p>
            <i v-show="numtai">{{this.$store.getters.GETNUMSS}}</i>
          </router-link>
        </li>
        <li>
          <router-link to="/AzMy">
          <img src="../../../static/img/index_footermy.png" alt="">
          <p>我的易购</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
    export default {
        name: "AzIndexFooter",
      data(){
          return{
            numtai:false
          }
      },
      created(){
        if (this.$store.getters.GETNUMSS != 0) {
          this.numtai=true;
          // console.log(this.$store.getters.GETNUMSS)
        } else {
          this.numtai=false;
        }
      },
    }
</script>

<style scoped>
  footer{
    width:100%;
    height:.49rem;
    border-top: 1px solid #EEE;
    background:white;
    position:fixed;
    bottom:0;
    z-index: 999999;
  }
  footer ul{
    display:flex;
    width:100%;
    justify-content: space-around;
  }
  footer ul li{
    width:20%;
    position:relative;
  }
  .pos i{
    width: .16rem;
    height: .16rem;
    border-radius: 50%;
    background: red;
    font-size: .06rem;
    color: #fff;
    text-align: center;
    line-height: .16rem;
    position: absolute;
    right: 20%;
    top: 15%;
  }
  footer ul li img{
    width:.25rem;
    height:.25rem;
    padding-top:.06rem;
    margin:0 auto;
  }
  footer ul li:first-child img{
    width:.37rem;
    height:.37rem;
    position:absolute;
    top: -13px;
    left: 19px;
  }
  footer ul li:first-child p{
    position:relative;
    bottom:-30px;
    color:#fa0;
  }
  footer ul li p{
    font-size:.12rem;
    color:#333;
    text-align: center;
  }
</style>
