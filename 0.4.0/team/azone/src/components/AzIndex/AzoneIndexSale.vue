<template>
  <div>
    <div v-for="z in AzIndex">
      <div class="sale" v-for="a in z.AzIndexData">
        <ul>
          <li v-for="(b,i) in a.sale">
            <h4>{{b.tit}}</h4>
            <p class="time">{{b.time}}<span>{{hr}}</span>:<span>{{min}}</span>:<span>{{sec}}</span>
            </p>
            <dl>
              <dd v-for="e in b.pro">
                <img :src="e.img" alt=""/>
                <p class="xprice">￥<span>{{e.p1}}</span></p>
                <p class="yprice">￥<span>{{e.p2}}</span></p>
              </dd>
            </dl>
          </li>
          <li v-for="f in a.outlets">
            <div class="outlets">
              <p class="title">{{f.p1}}</p>
              <p class="sapoint">{{f.p2}}</p>
            </div>
            <p class="des">{{f.p3}}</p>
            <dl>
              <dd v-for="g in f.dd">
                <img :src="g.img" alt=""/>
                <p>{{g.name}}</p>
                <p class="discount"><span><span class="firstSpan">{{g.discount}}</span><span></span></span>折</p>
              </dd>
            </dl>
          </li>
        </ul>
        <dl class="horview">
          <dd v-for="(h,i) in a.horview">
            <p>{{h.p1}}</p>
            <p>{{h.p2}}</p>
            <div class="tuanImg">
              <img v-for="(img,i) in h.img" :src="img.proimg" alt=""/>
            </div>
          </dd>
        </dl>
        <img :src="a.iPhone" alt="" class="salePhone"/>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "AzoneIndexSale",
    props: ["AzIndex"],
    data: function () {
      return {
        day: 0, hr: 0, min: 0, sec: 0
      }
    },
    mounted: function () {
      this.countdown()
    },
    methods: {
      countdown: function () {
        const end = Date.parse(new Date('2019-12-01'));
        const now = Date.parse(new Date());
        const msec = end - now;
        let day = parseInt(msec / 1000 / 60 / 60 / 24);
        let hr = parseInt(msec / 1000 / 60 / 60 % 24);
        let min = parseInt(msec / 1000 / 60 % 60);
        let sec = parseInt(msec / 1000 % 60);
        this.day = day;
        this.hr = hr > 9 ? hr : '0' + hr;
        this.min = min > 9 ? min : '0' + min;
        this.sec = sec > 9 ? sec : '0' + sec;
        const that = this;
        setTimeout(function () {
          that.countdown()
        }, 1000)
      }
    }

  }
</script>

<style scoped>
  .sale {
    width: 100%;
    background: white;
  }

  .sale ul {
    display: flex;
    flex-wrap: wrap;
  }

  .sale ul li {
    width: 50%;
    height: 1.3rem;
    /*background:red;*/
    box-sizing: border-box;
  }

  /*first-child*/
  .sale ul li:first-child {
    border-bottom: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    background: url("../../../static/img/index_salebj.png") no-repeat;
    background-size: 100% 100%;
  }

  .sale ul li:first-child h4 {
    color: #E73434;
    font-size: .14rem;
    margin: .05rem 0 0 .1rem;
    font-weight: 800;
  }

  .sale ul li:first-child .time {
    font-size: .12rem;
    margin: 0 0 .05rem .1rem;
  }

  .sale ul li:first-child .time span {
    font-size: .12rem;
    background: #e62e31;
    color: white;
    padding: .02rem;
    text-align: center;
    line-height: .1rem;
    border-radius: 4px;
  }

  .sale ul li:first-child dl {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .sale ul li:first-child dl dd img {
    width: .55rem;
    height: .52rem;
  }

  .sale ul li:first-child dl dd .xprice {
    color: #F40;
    font-size: .13rem;
    text-align: left;
    padding-left: .05rem;
  }

  .sale ul li:first-child dl dd .yprice {
    color: #999;
    font-size: .12rem;
    text-align: left;
    padding-left: .05rem;
    text-decoration: line-through;
  }

  /*nth-child(2)*/
  .sale ul li:nth-child(2) .outlets {
    width: 100%;
    overflow: hidden;
  }

  .sale ul li:nth-child(2) .title {
    color: #FA4B49;
    font-size: .16rem;
    margin: .1rem 0 0 .1rem;
    font-weight: 800;
    float: left
  }

  .sale ul li:nth-child(2) .sapoint {
    background-color: #FF4950;
    color: white;
    font-size: .12rem;
    float: left;
    margin: .12rem 0 0 .05rem;
    border-radius: .3rem;
    padding: .01rem .05rem;
    line-height: .14rem;
  }

  .sale ul li:nth-child(2) .des {
    color: #999;
    font-size: .12rem;
    margin: 0 0 0 0.1rem;
    line-height: .14rem;
  }

  .sale ul li:nth-child(2) dl {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .sale ul li:nth-child(2) dl dd {
    position: relative;
  }

  .sale ul li:nth-child(2) dl dd img {
    width: .65rem;
    height: .65rem;
    margin: 0;
  }

  .sale ul li:nth-child(2) dl dd p {
    color: #666;
    font-size: .12rem;
  }

  .sale ul li:nth-child(2) dl dd .discount {
    position: absolute;
    top: 1px;
    left: 35px;
    font-size: 12px;
    border-radius: 50%;
    width: .35rem;
    height: .35rem;
    background: #fb4c48;
    color: #FFF;
    text-align: center;
    line-height: .35rem;
  }

  .sale ul li:nth-child(2) dl dd .discount .firstSpan {
    font-size: 15px;
  }

  /*dd1*/
  .sale .horview {
    width: 100%;
    display: flex;
  }

  .sale .horview dd {
    box-sizing: border-box;
    height: 1.3rem;
  }

  .sale .horview dd p {
    margin: .05rem 0 .05rem .1rem;
  }

  .sale .horview dd:first-child {
    border-right: 1px solid #f2f2f2;
    width: 25%;
    color: #999;
    font-size: .12rem;
  }

  .sale .horview dd:first-child p:first-child {
    color: #28A2EA;
    font-size: .16rem;
    font-weight: 700;
  }

  .sale .horview dd:nth-child(2) p:first-child {
    color: #F840B1;
    font-size: .16rem;
    font-weight: 700;
  }

  .sale .horview dd:nth-child(2) {
    color: #999;
    font-size: .12rem;
    width: 25%;
  }

  .sale .horview dd img {
    width: .7rem;
    height: .7rem;
    margin: 0 .11rem;
  }

  /*last-child*/
  .sale .horview dd:last-child {
    border-top: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
    width: 50%;
  }

  .sale .horview dd:last-child p:first-child {
    color: #FF6A0C;
    font-size: .16rem;
    margin: .1rem 0 0 .1rem;
    font-weight: 800;
  }

  .sale .horview dd:last-child p:nth-child(2) {
    color: #999;
    font-size: .12rem;
    margin: 0.05rem 0 .1rem 0.1rem;
    line-height: .14rem;
  }

  .sale .horview dd:last-child .tuanImg {
    width: 100%;
    display: flex;
  }

  /*salePhone*/
  .salePhone {
    width: 100%;
  }
</style>
