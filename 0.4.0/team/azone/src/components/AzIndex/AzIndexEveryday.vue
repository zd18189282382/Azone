<template>
  <div>
    <div v-for="z in AzIndex">
      <div class="everyday" v-for="a in z.everyday">
        <img :src="a.imgTit" alt="" class="everydayTit">
        <ul>
          <li v-for="b in a.products">
            <p>{{b.p1}}</p>
            <p>{{b.p2}}</p>
            <div class="tuanImg">
              <img v-for="c in b.img" :src="c.proimg" alt=""/>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "AzIndexEveryday",
    props:["AzIndex"],
    // data() {
    //   return {
    //     everyday: [
    //       {
    //         "imgTit": "../../../static/img/index_everydayTit.png",
    //         "products": [
    //           {
    //             "p1": "城市专享",
    //             "p2": "必抢好物 低至9.9元包邮",
    //             "img": [
    //               {
    //                 "proimg": "../../../static/img/index_everydaythree1.jpg"
    //               },
    //               {
    //                 "proimg": "../../../static/img/index_everydaythree1.jpg"
    //               }
    //             ]
    //           },
    //           {
    //             "p1": "大聚惠",
    //             "p2": "狂欢不落幕 优惠继续在",
    //             "img": [
    //               {
    //                 "proimg": "../../../static/img/index_everydayfour1.jpg"
    //               },
    //               {
    //                 "proimg": "../../../static/img/index_everydayfour2.jpg"
    //               }
    //             ]
    //           },
    //           {
    //             "p1": "领券中心",
    //             "p2": "先领券 后购物",
    //             "img": [
    //               {
    //                 "proimg": "../../../static/img/index_everyday1.png"
    //               },
    //               {
    //                 "proimg": "../../../static/img/index_everyday2.jpg"
    //               }
    //             ]
    //           },
    //           {
    //             "p1": "苏宁国际",
    //             "p2": "全球进口日 洋货199减100",
    //             "img": [
    //               {
    //                 "proimg": "../../../static/img/index_everyday3.jpg"
    //               },
    //               {
    //                 "proimg": "../../../static/img/index_everyday4.jpg"
    //               }
    //             ]
    //           },
    //           {
    //             "p1": "新品首发",
    //             "p2": "小度智能车载支架 新品首发",
    //             "img": [
    //               {
    //                 "proimg": "../../../static/img/index_everydaysix4.jpg"
    //               },
    //               {
    //                 "proimg": "../../../static/img/index_everydaysix5.png"
    //               }
    //             ]
    //           },
    //           {
    //             "p1": "0元试用",
    //             "p2": "送OPPO K1",
    //             "img": [
    //               {
    //                 "proimg": "../../../static/img/index_everydaysix1.jpg"
    //               }
    //             ]
    //           },
    //           {
    //             "p1": "苏宁生鲜",
    //             "p2": "每满99减30",
    //             "img": [
    //               {
    //                 "proimg": "../../../static/img/index_everydaysix2.png"
    //               }
    //             ]
    //           },
    //         ]
    //       }
    //     ],
    //   }
    // }
  }
</script>

<style scoped>
  .everyday {
    width: 100%;
    background: white;
    margin-bottom: .15rem;
    padding-bottom:.1rem;
  }

  .everydayTit {
    width: 100%;
  }

  .everyday ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .everyday ul li {
    width: 50%;
    height: 1.3rem;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
    position: relative;
  }
  .everyday ul li:first-child p:first-child{
    color: #E73434;
  }
  .everyday ul li:nth-child(2n+1) {
    border-right: 1px solid #f2f2f2;
  }

  /*.liFour*/
  .everyday ul li p:first-child {
    color: #333;
    font-size: .16rem;
    margin: .1rem 0 0 .1rem;
    font-weight: 800;
  }

  .everyday ul li p:nth-child(2) {
    color: #999;
    font-size: .12rem;
    margin: .05rem 0 0 0.1rem;
    line-height: .14rem;
  }

  .everyday ul li .tuanImg {
    width: 100%;
    display: flex;
  }

  .everyday ul li img {
    width: .7rem;
    height: .7rem;
    margin: .075rem .11rem;
  }

  /*.liSix*/
  .everyday ul li:nth-child(5){
    border-bottom:none;
  }

  .everyday ul li:nth-child(6){
    width: 25%;
    border-bottom:none;
    border-right:1px solid #f2f2f2;
  }
  .everyday ul li:nth-child(6) p:nth-child(2){
    color: #ff6600;
  }
  .everyday ul li:nth-child(7){
    width: 25%;
    border-bottom:none;
  }
</style>
