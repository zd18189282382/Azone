<template>
  <div>
    <div v-for="a in AzIndex">
      <div class="everyday" v-for="b in a.life">
        <img :src="b.imgTit" alt="" class="everydayTit">
        <ul>
          <li>
            <img :src="b.lazyimg" alt=""/>
            <p class="lazyimginfo">{{b.lazyimginfo}}</p>
          </li>
          <li v-for="c in b.products">
            <p>{{c.p1}}</p>
            <p>{{c.p2}}</p>
            <div class="tuanImg">
              <img  v-for="d in c.img" :src="d.proimg" alt=""/>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "AzIndexLife",
    props:["AzIndex"]
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
    margin:0;
  }

  .everyday ul li:first-child .lazyimginfo {
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
    line-height: .2rem;
  }

  /*.liFour*/
  .everyday ul li p:first-child{
    color: #333;
    font-size: .16rem;
    margin: .1rem 0 0 .1rem;
    font-weight: 800;
  }

  .everyday ul li p:nth-child(2){
    color: #999;
    font-size: .12rem;
    margin: .05rem 0 0 0.1rem;
    line-height: .14rem;
  }

  .everyday ul li:nth-child(2){
    background:url("../../../static/img/index_lifebj.jpg") no-repeat;
    background-size:100% 100%;
  }
  .everyday ul li:nth-child(2) .tuanImg,
  .everyday ul li:nth-child(3) .tuanImg
  {
    width: 100%;
    display: flex;
  }
  .everyday ul li img
  {
    width: .7rem;
    height: .7rem;
    margin: .075rem .11rem;
  }

  /*.liSix*/
  .everyday ul li:nth-child(4),
  .everyday ul li:nth-child(5),
  .everyday ul li:nth-child(6),
  .everyday ul li:nth-child(7),
  .everyday ul li:nth-child(8),
  .everyday ul li:nth-child(9){
    width:25%;
  }
  .everyday ul li:nth-child(4),
  .everyday ul li:nth-child(6),
  .everyday ul li:nth-child(8){
   border-right:1px solid #f2f2f2;
  }

</style>
