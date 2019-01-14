<template>
  <div>
    <div v-for="z in AzIndex">
      <div class="everyday" v-for="a in z.brand">
        <img :src="a.imgTit" alt="" class="everydayTit">
        <ul>
          <li>
            <img :src="a.lazyimg" alt=""/>
            <p>{{a.lazyimginfo}}</p>
          </li>
          <li v-for="b in a.products">
            <div class="PhoneCity">
              <p class="title">{{b.title}}</p>
              <p class="sapoint">{{b.sapoint}}</p>
            </div>
            <p class="des">{{b.des}}</p>
            <div class="everydayPhone">
              <img v-for="c in b.img" :src="c.proimg" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "AzIndexBrand",
    props: ["AzIndex"],
    data() {
      return {
        // brand: [
        //   {
        //     "imgTit": "../../../static/img/index_brandTit.png",
        //     "lazyimg":"../../../static/img/index_everydayone1.jpg",
        //     "lazyimginfo":"内存条都用上了水冷散热，你却还是只能拼命吹风",
        //     "products": [
        //       {
        //         "title": "手机馆",
        //         "sapoint": "抢1000元手机券",
        //         "des":"iPhone8全网通4338秒",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_everydayPhone1.jpg"
        //           },
        //           {
        //             "proimg": "../../../static/img/index_everydayPhone2.jpg"
        //           }
        //         ]
        //       },
        //       {
        //         "title": "电脑办公",
        //         "des":"品类日 抢5000减600神券",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_brand1.jpg"
        //           },
        //           {
        //             "proimg": "../../../static/img/index_brand2.jpg"
        //           }
        //         ]
        //       },
        //       {
        //         "title": "苏宁极物",
        //         "des":"苏宁官方自营品牌",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_brand3.jpg"
        //           },
        //           {
        //             "proimg": "../../../static/img/index_brand4.jpg"
        //           }
        //         ]
        //       },
        //       {
        //         "title": "易回收",
        //         "des":"购新更省钱",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_everydaysix3.jpg"
        //           }
        //         ]
        //       },
        //       {
        //         "title": "苏宁数码",
        //         "des":"小度新品首发",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_everydaysix4.jpg"
        //           }
        //         ]
        //       },
        //       {
        //         "title": "Biu+优品",
        //         "des":"尖货低至5折",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_everydaysix5.png"
        //           }
        //         ]
        //       },
        //       {
        //         "title": "二手优品",
        //         "des":"苹果X低价抢",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_everydaysix6.png"
        //           }
        //         ]
        //       },
        //     ]
        //   }
        // ]
      }
    }
  }
</script>

<style scoped>
  .everyday {
    width: 100%;
    background: white;
    margin-bottom: .15rem;
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

  .everyday ul li:nth-child(2n+1) {
    border-right: 1px solid #f2f2f2;
  }

  /*.liOne*/
  .everyday ul li:first-child img {
    width: 100%;
    height: 100%;
  }

  .everyday ul li:first-child p {
    font-size: .15rem;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: .04rem .11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /*.liTwo*/
  .everyday ul li .PhoneCity {
    width: 100%;
    overflow: hidden;
  }

  .everyday ul li .title {
    color: #333;
    font-size: .16rem;
    margin: .1rem 0 0 .1rem;
    font-weight: 800;
    float: left
  }

  .everyday ul li:nth-child(2) {
    background: url("../../../static/img/index_brandbj.jpg") no-repeat;
    background-size: 100% 100%;
  }

  .everyday ul li:nth-child(2) .sapoint {
    background-color: #007EFF;
    color: white;
    font-size: .12rem;
    float: left;
    margin: .12rem 0 0 .05rem;
    border-radius: .3rem;
    padding: .01rem .05rem;
    line-height: .14rem;
  }

  .everyday ul li .des {
    color: #999;
    font-size: .12rem;
    margin: 0 0 0 0.1rem;
    line-height: .14rem;
  }

  .everyday ul li .everydayPhone {
    width: 100%;
    display: flex;
  }

  .everyday ul li .everydayPhone img {
    width: .7rem;
    height: .7rem;
    margin: .05rem .11rem;
  }

  /*.liSix*/
  .everyday ul li:nth-child(5),
  .everyday ul li:nth-child(6),
  .everyday ul li:nth-child(7),
  .everyday ul li:nth-child(8) {
    width: 25%;
    height: 100%;
  }

  .everyday ul li:nth-child(6) {
    border-right: 1px solid #f2f2f2;
  }
</style>
