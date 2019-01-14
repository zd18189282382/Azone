<template>
<footer>
    <div class="footers">
        <a href="/AzIndex"><img src="../../../static/img/page.png" alt=""></a>
        <a href="/az"><img src="../../../static/img/classification.png" alt=""></a>
        <a href="/AzMy"><img src="../../../static/img/my.png" alt=""></a>
        <a href="javascript:;"><img src="../../../static/img/search.png" alt=""></a>
        <a href="/cart"><img src="../../../static/img/shoppingcart.png" alt=""> <i v-show="numtai">{{this.$store.getters.GETNUMSS}}</i></a>
    </div>
</footer>
</template>

<script>
import $ from "jquery"
export default {
    name:"AzMyFooter",
  data(){
    return{
      numtai:false
    }
  },
  created(){
    if (this.$store.getters.GETNUMSS != 0) {
      this.numtai=true;
      // console.log(this.$store.getters.GETNUMSS)
    } else {
      this.numtai=false;
    }
  },
  updated(){
    if (this.$store.getters.GETNUMSS != 0) {
      this.numtai=true;
      // console.log(this.$store.getters.GETNUMSS)
    } else {
      this.numtai=false;
    }
  }
}
</script>

<style>
@import "../../assets/css/iconfont.css";
footer{
  margin: 0 auto;
  width: 3.75rem;
  height: .5rem;
  background: #FFF;
  position: fixed;
  bottom:0;
  left:0;
}
.footers{
  float: left;
  width: 3.75rem;
  height: .5rem;
  display: -webkit-flex;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  -webkit-box-direction: normal;
  background-color: white;
}
.footers a{
  display: block;
  width: 20%;
  height: .35rem;
  padding-top: 0.075rem;
  position: relative;
}
.footers a i{
  width: .16rem;
  height: .16rem;
  border-radius: 50%;
  background: red;
  font-size: .06rem;
  color: #fff;
  text-align: center;
  line-height: .16rem;
  position: absolute;
  right: 20%;
  top: 15%;
}
.footers a img{
  display: block;
  width: .3rem;
  height: .35rem;
  margin: 0 auto;
}
</style>
