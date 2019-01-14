<template>
  <div>
    <div class="newbie" v-for="a in AzIndex">
      <img src="../../../static/img/index_newbie.jpg" alt=""/>
      <ul>
        <li v-for="b in a.newbie">
          <p class="tit">{{b.tit}}</p>
          <p class="pie">{{b.pie}}</p>
          <div class="Img">
            <img  v-for="img in b.img" :src="img.img" alt=""/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AzIndexNewbie",
    props:["AzIndex"],
    data(){
      return{
        // newbie:[
        //   {
        //     "tit":"新会员专享",
        //     "pie":"注册即领新人礼包",
        //     "img":[
        //       {
        //         "img":"../../static/img/index_newbie1.jpg",
        //       },
        //       {
        //         "img":"../../static/img/index_newbie2.png"
        //       }
        //     ]
        //   },
        //   {
        //     "tit":"大牌助力",
        //     "pie":"好货任性抢",
        //     "img":[
        //       {
        //         "img":"../../static/img/index_newbie3.jpg"
        //       }
        //     ]
        //   },
        //   {
        //     "tit":"今日爆款",
        //     "pie":"特价包邮",
        //     "img":[
        //       {
        //         "img":"../../static/img/index_newbie4.jpg"
        //       }
        //     ]
        //   },
        // ]
      }
    }
  }
</script>

<style scoped>
  .newbie {
    width: 3.75rem;
    margin: .15rem 0;
    background: white;
  }

  .newbie img {
    width: 3.75rem;
  }

  .newbie ul {
    width: 100%;
    display: flex;
    border-top: 1px solid #f2f2f2;
    height: 1.30rem;
  }

  .newbie ul li:first-child {
    width: 50%;
  }

  .newbie ul li:first-child .tit {
    color: #FF6A0C;
    font-size: .2rem;
    margin-left: .1rem;
    margin-top: .05rem;
    font-weight: 900;
  }

  .newbie ul li:first-child .pie {
    color: #FA4B49;
    font-size: .14rem;
    margin-left: .1rem;
    margin-top: .05rem;
  }

 .Img {
    display: flex;
    justify-content: space-around;
  }

.Img img {
    width: .7rem;
    height: .7rem;
  }

  .newbie ul li:nth-child(2) {
    width: 25%;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }

  .newbie ul li:nth-child(2) .tit {
    color: #e62e2e;
    font-size: .16rem;
    margin-left: .1rem;
    margin-top: .05rem;
    font-weight: 900;
  }

  .newbie ul li:nth-child(2) .pie {
    color: #e62e31;
    font-size: .12rem;
    margin-left: .1rem;
    margin-top: .05rem;
  }

  .newbie ul li:nth-child(2) img {
    width: .7rem;
    height: .7rem;
    padding: .06rem .11rem 0;
  }

  .newbie ul li:last-child {
    width: 25%;
  }

  .newbie ul li:last-child .tit {
    color: #333;
    font-size: .16rem;
    margin-left: .1rem;
    margin-top: .05rem;
    font-weight: 900;
  }

  .newbie ul li:last-child .pie {
    color: #999;
    font-size: .12rem;
    margin-left: .1rem;
    margin-top: .05rem;
  }

  .newbie ul li:last-child img {
    width: .7rem;
    height: .7rem;
    padding: .06rem .11rem 0;
  }
</style>
