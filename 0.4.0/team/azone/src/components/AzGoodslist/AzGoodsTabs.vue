<template>
    <div>
      <div class="ulBox">
        <ul>
          <router-link tag="li" to="/AzGoodslist">{{businessareaData[0].pageName}}</router-link>
          <router-link tag="li" to="/AzGoodslist/AzGoodslistXiaoliang"  >{{businessareaData[1].pageName}}</router-link>
          <router-link tag="li" to="/AzGoodslist/AzGoodslistJiage" >{{businessareaData[2].pageName}}</router-link>
          <transition :name="transitionName">
            <router-link tag="li" to="/AzGoodslist/AzGoodslistShaixuan" >筛选</router-link>
          </transition>
        </ul>
      </div>
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
  .xxx{
    color:#f60;
  }
  .ulBox{
    width:100%;
    height:.44rem;
    box-shadow: 3px 3px 3px #333;
  }
  ul{
    display:flex;
    width:100%;
    background: #fff;
    border-bottom:1px solid #f2f2f2;
    position:fixed;
    z-index: 9999999;
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
