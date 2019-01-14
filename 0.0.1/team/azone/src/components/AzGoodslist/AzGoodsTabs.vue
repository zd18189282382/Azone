<template>
    <div id="example-1">
      <ul>
        <router-link tag="li" to="/AzGoodslist">{{businessareaData[0].pageName}}</router-link>
        <router-link tag="li" to="/AzGoodslist/AzGoodslistXiaoliang"  >{{businessareaData[1].pageName}}</router-link>
        <router-link tag="li" to="/AzGoodslist/AzGoodslistJiage" >{{businessareaData[2].pageName}}</router-link>
        <transition name="slide-fade">
        <router-link  tag="li" to="/AzGoodslist/AzGoodslistShaixuan" >筛选</router-link>
        </transition>
      </ul>
      <router-view :shopa="businessareaData"  v-if="businessareaData"></router-view>
    </div>
</template>

<script>
    import $ from "jquery"
    import data from "../../../static/data/azgoodstab.json"
    export default {
        name: "AzGoodsTabs",
      data(){
          return{
            show:true,
            transitionName:"slide-right",
            businessareaData:[{
               pageName:"",
            },{
              pageName:"",
            },{
              pageName:"",
            }]
          }
      },
      mounted(){
          this.businessareaData=data.businessareaData;
          // console.log(this.businessareaData)
      }
    }
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .xxx{
    color:#f60;
  }
  ul{
    display:flex;
    width:100%;
    background: #fff;
    border-bottom:1px solid #f2f2f2;
  }
  ul li{
    width:25%;
    height:.44rem;
    font-size:.14rem;
    color:#333;
    text-align: center;
    line-height:.44rem;
  }
</style>
