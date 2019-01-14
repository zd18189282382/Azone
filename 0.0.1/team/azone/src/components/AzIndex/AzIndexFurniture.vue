<template>
  <div>
    <div v-for="z in AzIndex">
      <div class="everyday" v-for="a in z.furniture">
        <img :src="a.imgTit" alt="" class="everydayTit">
        <ul>
          <li>
            <img :src="a.lazyimg" alt=""/>
            <p class="lazyimginfo">{{a.lazyimginfo}}</p>
          </li>
          <li v-for="b in a.products">
            <div class="PhoneCity">
              <p class="title">{{b.p1}}</p>
              <p class="sapoint">{{b.sapoint}}</p>
            </div>
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
    name: "AzIndexFurniture",
    props:["AzIndex"],
    data() {
      return {
        // furniture: [
        //   {
        //     "imgTit": "../../../static/img/index_furnitureTit.png",
        //     "lazyimg": "../../../static/img/index_furniture1.jpg",
        //     "lazyimginfo": "日常消毒护理，为宝宝健康添屏障",
        //     "products": [
        //       {
        //         "p1": "苏宁家电",
        //         "p2": "30天包退 365天包换",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_furniture2.jpg"
        //           },
        //           {
        //             "proimg": "../../../static/img/index_furniture3.jpg"
        //           }
        //         ]
        //       },
        //       {
        //         "p1": "新品首发",
        //         "p2": "小度智能车载支架 新品首发",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_furniture4.jpg"
        //           },
        //           {
        //             "proimg": "../../../static/img/index_furniture5.jpg"
        //           }
        //         ]
        //       },
        //       {
        //         "p1": "0元试用",
        //         "p2": "送OPPO K1",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_everydaysix1.jpg"
        //           }
        //         ]
        //       },
        //       {
        //         "p1": "苏宁生鲜",
        //         "p2": "每满99减30",
        //         "img": [
        //           {
        //             "proimg": "../../../static/img/index_everydaysix2.png"
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

  .everyday ul li:first-child img {
    width: 100%;
    height: 100%;
  }

  .everyday ul li:first-child .lazyimginfo {
    font-size: .15rem;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: .06rem .11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height:.2rem;
  }

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
  .everyday ul li:nth-child(2){
    background:url("../../../static/img/index_furniturebj.png") no-repeat;
    background-size:100% 100%;
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
  .everyday ul li .tuanImg {
    width: 100%;
    display: flex;
  }

  .everyday ul li .tuanImg img {
    width: .7rem;
    height: .7rem;
    margin: .075rem .11rem;
  }

  .everyday ul li p:first-child {
    color: #333;
    margin: .05rem 0 0 .1rem;
    font-size: .16rem;
    font-weight: 700;
  }

  .everyday ul li:nth-child(4),
  .everyday ul li:nth-child(5) {
    width: 25%;
  }


</style>
