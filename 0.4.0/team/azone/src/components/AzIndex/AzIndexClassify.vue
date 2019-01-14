<template>
  <div>
    <div v-for="a in AzIndex">
      <div class="classify" v-for="(d,i) in a.classify">
        <a href="JavaScript:;"><img :src="d.active" alt="" class="active"/></a>
        <ul>
          <li v-for="(b,i) in d.feilei">
            <img :src="b.img" alt="">
            <p>{{b.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "AzIndexClassify",
    props:["AzIndex"],
    // data(){
    //   // return{
    //   //   classify:[
    //   //     {
    //   //       "active":"../../static/img/index_active.png",
    //   //       "feilei":[
    //   //         {
    //   //           "img":"../../static/img/index_classify1.png",
    //   //           "name":"手机"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify2.png",
    //   //           "name":"苏宁超市"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify3.png",
    //   //           "name":"生活家电"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify4.png",
    //   //           "name":"苏宁拼购"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify5.gif",
    //   //           "name":"母婴玩具"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify6.png",
    //   //           "name":"大聚惠"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify7.png",
    //   //           "name":"赚钱"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify8.png",
    //   //           "name":"领云钻"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify9.png",
    //   //           "name":"苏宁家电"
    //   //         },
    //   //         {
    //   //           "img":"../../static/img/index_classify10.png",
    //   //           "name":"分类"
    //   //         }
    //   //       ]
    //   //     }
    //   //   ]
    //   // }
    // }
  }
</script>

<style scoped>
  .classify {
    width: 100%;
    background: white;
    padding-bottom: .15rem;
  }

  .active {
    width: 100%;
  }

  .classify ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .classify ul li {
    width: .75rem;
    height: .7rem;
    text-align: center;
  }

  .classify ul li img {
    height: .41rem;
    padding: .12rem .17rem 0 .17rem;
  }

  .classify ul li p {
    font-size: .12rem;
    line-height: .22rem;
  }
</style>
