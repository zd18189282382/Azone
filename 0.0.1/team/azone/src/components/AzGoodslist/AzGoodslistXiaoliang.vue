<template>
    <div @click="goto(shopa[1].id)">
      <ul>
        <li>
          <div class="proLeft">
            <img :src="shopa[1].picbig" alt=""/>
            <img :src="shopa[1].picjiao" alt=""/>
          </div>
          <div class="proRight">
            <p class="name">
              <i class="project-label">{{shopa[1].shopi}}</i>
              {{shopa[1].shopcont}}
            </p>
            <dl>
              <dd :key="index" v-for="(p,index) in shopa[1].suggest">{{p}}</dd>
            </dl>
            <p class="price">
              <span>¥</span>
              <span>{{shopa[1].price}}</span>
              <span>.00</span>
            </p>
            <p class="label">
              <span>大聚惠</span>
              <span>{{shopa[1].gos}}</span>
            </p>
            <p class="pingjia">
              <span>133万+条评价</span>
              <span>好评率99%</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "AzGoodslistXiaoliang",
      props:["shopa"],
      methods: {
        goto(k) {
          this.$router.push(`/AzGoodsinfo?productid=${k}`)
        }
      }
    }
</script>

<style scoped>
  ul{
    width:100%;
    background:white;
  }
  ul li{
    width:100%;
    display:flex;
    box-sizing: border-box;
    padding:.1rem;
  }
  ul li .proLeft{
    position:relative;
    margin-right:.1rem;
  }
  ul li .proLeft img:first-child{
    width:1rem;
    height:1rem;
  }
  ul li .proLeft img:last-child{
    width:.33rem;
    height:.33rem;
    position:absolute;
    top:0;
    right:0;
  }
  ul li .proRight{
    border-bottom: 1px solid #ddd;
  }
  ul li .proRight .name{
    display: -webkit-box;
    overflow: hidden;
    margin: -.04rem 0 .02rem;
    height:.4rem;
    color: #333;
    text-overflow: ellipsis;
    font-size: .13rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  ul li .proRight .name .project-label{
    display: inline-block;
    margin: 1px .03rem 0 0;
    padding: .02rem .03rem;
    font-size: .14rem;
    border: 1px solid #f60;
    color: #f60;
    position: relative;
    top: 1px;
    border-radius: 2px;
    line-height:.16rem;
  }
  ul li .proRight dl{
    display:flex;
    margin-bottom:.15rem;
  }
  ul li .proRight dl dd{
    margin: .02rem 0 .02rem 0;
    padding: 0 .03rem 0 .03rem;
    color: #999;
    font-size: .12rem;
  }
  ul li .proRight dl dd:nth-child(2):before,
  ul li .proRight dl dd:nth-child(3):before
  {
    content: '|';
    display: inline-block;
    font-size: .12rem;
    margin-right:.05rem;
  }
  ul li .proRight .price{
    display:flex;
    height:.2rem;
  }
  ul li .proRight .price span{
    font-size: .12rem;
    color: #F60;
    overflow: hidden;
    display: block;
  }
  ul li .proRight .price span:nth-child(2){
    font-size: .18rem;
    position:relative;
    bottom:5px;
    font-weight: normal;
  }

  ul li .proRight .label{
    display:flex;
    padding-bottom:.05rem;
  }
  ul li .proRight .label span{
    margin: 0 .08rem 0 0;
    padding: .01rem .02rem;
    color: #FFF;
    font-size: .12rem;
    overflow: hidden;
    border-radius: 2px;
    background: #f60;
  }

  ul li .proRight .pingjia{
    display:flex;
    padding-bottom:.15rem;
  }
  ul li .proRight .pingjia span{
    color: #999;
    margin: 0 .1rem 0 0;
    font-size:.12rem;
    font-weight: normal;
  }
</style>
