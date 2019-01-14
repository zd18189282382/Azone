<template>
  <div>
    <div v-for="z in AzIndex">
      <div class="market" v-for="a in z.market">
        <img :src="a.tit" alt="" class="marketTit">
        <ul>
          <li v-for="b in a.products">
            <p>{{b.p1}}</p>
            <p>{{b.p2}}</p>
            <img :src="b.img" alt="">
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "AzIndexMarket",
    props: ["AzIndex"]
  }
</script>

<style scoped>
  .market {
    width: 100%;
    background: white;
    margin-bottom: 0.15rem;
  }

  .market .marketTit {
    width: 100%;
  }

  .market ul {
    display: flex;
    flex-wrap: wrap;
  }

  .market ul li {
    width: 33.3%;
    height: 1.30rem;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
  }

  .market ul li:nth-child(3n+1) {
    border-right: 1px solid #f2f2f2;
  }

  .market ul li:nth-child(3n-1) {
    border-right: 1px solid #f2f2f2;
  }

  .market ul li p:first-child {
    margin: .025rem 0 0 .1rem;
    font-size: .16rem;
    font-weight: 800;
    color: #333;
  }

  .market ul li p:nth-child(2) {
    margin: .025rem 0 0 .125rem;
    font-size: .12rem;
    color: #999;
  }

  .market ul li img {
    width: .8rem;
    height: .8rem;
    margin: .025rem .22rem 0;
  }
</style>
