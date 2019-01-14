<template>
<!-- 苏宁钱包 -->
<div>
  <div class="nav_money" :key="j" v-for="(k,j) in datas[num].content">
        <div class="money_list">
            <a href="#" class="btns" :key="s" v-for="(l,s) in k.contents">
                <b>{{l.b}}</b>
                <span>{{l.spans}}</span>
                <p>{{l.ps}}</p>
            </a>
        </div>
        <i class="money_border" :style="{backgroundImage: 'url(' + k.imgf + ')', backgroundSize:'100% 100%'}"></i>
        <a href="#" class="my_moneybag">
            <i class="moneybag_ico" :style="{backgroundImage: 'url(' + k.imga + ')', backgroundSize:'100% 100%'}"></i>
            <span>{{k.spana}}</span>
            <p>{{k.pa}}</p>
        </a>
    </div>
</div>

</template>

<script>
export default {
    name: "AzMoney",
    props:["datas","num"]
}
</script>

<style scoped>
@import "../../assets/css/iconfont.css";
/* 苏宁钱包 */
.nav_money{
  width: 100%;
  height: .75rem;
  display: flex;
  background: #fff;
  margin-bottom: 0.1rem;
}
.money_list{
  -webkit-box-flex: 1;
  flex: 1;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.btns{
  width: .74rem;
  display: flex;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  padding-bottom: 0.08rem;
}
.nav_money .btns b{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.12rem;
  color: #222;
  font-weight: normal;
}
.nav_money .btns span{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.12rem;
  color: #222;
}
.nav_money .btns p{
  display: block;
  width: 100%;
  text-align: center;
  color: #f60;
  font-size: 0.12rem;
  margin-top: 0.025rem;
  position: absolute;
  top: .525rem;
  left: 0;
}
.money_border{
  display: block;
  width: 0.04rem;
  height: .6rem;
  /* background: url(../../../static/img/border.png) no-repeat center;
  background-size: contain; */
  margin-right: .135rem;
}
.my_moneybag{
  display: flex;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  padding-bottom: 0.08rem;
  margin-right: .135rem;
}
.moneybag_ico{
  display: block;
  width: 0.23rem;
  height: 0.23rem;
  margin-top: -0.025rem;
  /* background: url(../../../static/img/my10.png) no-repeat;
  background-size: contain; */
}
.my_moneybag span{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.12rem;
  color: #222;
}
</style>


