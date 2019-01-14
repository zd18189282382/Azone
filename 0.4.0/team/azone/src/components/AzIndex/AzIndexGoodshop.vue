<template>
  <div>
    <div v-for="a in AzIndex">
      <div class="goodshop" v-for="b in a.goodsshop">
        <img :src="b.tit" alt="" class="goodshopTit">
        <ul>
          <li v-for="c in b.product">
            <div class="shopTitle">
              <span>{{c.p1}}</span>
              <span>{{c.p2}}</span>
            </div>
            <div class="shopCon">
              <div class="shopProduct1">
                <img :src="c.img1" alt="">
              </div>
              <div class="shopProduct2">
                <img  v-for="d in c.img2" :src="d.smallimg" alt="">
              </div>
            </div>
          </li>
        </ul>
        <img :src="b.active" alt="" class="goodshopbig"/>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "AzIndexGoodshop",
    props: ["AzIndex"]
  }
</script>

<style scoped>
  .goodshop {
    width: 100%;
    background: white;
    margin-bottom: .15rem;
  }

  .goodshopTit {
    width: 100%;
  }

  .goodshop ul {
    display: flex;
    flex-wrap: wrap;
  }

  .goodshop ul li {
    width: 50%;
    height: 1.58rem;
    box-sizing: border-box;
    padding-left: .1rem;
  }

  .goodshop ul li:first-child {
    border-bottom: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }

  .goodshop ul li:last-child {
    border-top: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
  }

  .goodshop ul li .shopTitle {
    display: flex;
  }

  .goodshop ul li .shopTitle span:first-child {
    font-size: .15rem;
    color: #333;
    font-weight: 600;
    padding-left: .05rem;
    line-height: .35rem;
  }

  .goodshop ul li .shopTitle span:last-child {
    font-size: .12rem;
    color: #999;
    padding-left: .05rem;
    line-height: .35rem;
  }

  .goodshop ul li .shopCon {
    display: flex;
  }

  .goodshop ul li .shopCon .shopProduct1 img {
    width: 1.11rem;
    height: 1.11rem;
  }

  .goodshop ul li .shopCon .shopProduct2 img {
    width: .55rem;
    height: .55rem;
  }

  .goodshopbig {
    width: 100%;
    height: 1.10rem;
  }
</style>
