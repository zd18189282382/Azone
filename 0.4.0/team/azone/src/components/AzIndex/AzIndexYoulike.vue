<template>
  <div>
    <div v-for="a in AzIndex">
      <div class="youlike" v-for="b in a.youlike">
        <img :src="b.tit" alt="" class="youlikeTit"/>
        <ul>
          <li v-for="c in b.products">
            <img :src="c.img" alt=""/>
            <div class="proinfo">
              <i class="zy" :style="{backgroundImage: 'url(' + c.zy + ')', backgroundSize:'.3rem .14rem'}"></i>
              {{c.p1}}
            </div>
            <p class="proInfor">
              <span>{{c.span1}}</span>
              <span>{{c.span2}}</span>
            </p>
            <p class="proprice">￥<span>{{c.price}}</span></p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "AzIndexYoulike",
    props:["AzIndex"]
  }
</script>

<style scoped>
  .youlike {
    width: 100%;
    background: white;
  }

  .youlike .youlikeTit {
    width: 100%;
  }
  .youlike ul{
    width:100%;
    display:flex;
    flex-wrap: wrap;
  }
  .youlike ul li{
    width:50%;
    box-sizing: border-box;
    border-bottom:1px solid #f2f2f2;
    padding-bottom: .1rem;
  }
  .youlike ul li:nth-child(2n+1){
    border-right:1px solid #f2f2f2;
  }
  .youlike ul li img{
    width:1.6rem;
    height:1.6rem;
    margin:.13rem;
  }
  .proinfo{
     margin:0 .14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-size: .12rem;
    position: relative;
    line-height: .2rem;
  }
  .proinfo .zy{
    display: inline-block;
    width: .3rem;
    height: .14rem;
    vertical-align: top;
  }
  .proinfo .sn{
    display: inline-block;
    width: .48rem;
    height: .14rem;
    vertical-align: top;
  }
  .proInfor{
    width:100%;
    margin:.02rem .14rem;
    overflow: hidden;
    height:.22rem;
  }
  .proInfor span{
    background: #F60;
    font-size: .12rem;
    line-height: .18rem;
    border-radius: 2px;
    padding: 0 .05rem;
    float: left;
    margin-right: .05rem;
    color: #FFF;
  }
  .proprice{
    font-size: .16rem;
    color: #f40;
    margin: .02rem 0 0 .12rem;

  }
</style>
