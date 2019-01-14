<template>
  <keep-alive>
  <div class="boxWrap">
    <cart-header :changeshowValue="_changeshowValue" :showValue="showValue"></cart-header>
    <div class="main">
      <shop-product :key="idx" v-for="(m,idx) in businessarea.businessareaData" :keys="idx" :product="m"
                    :delCart="_delCart"></shop-product>
      <cart-tip v-show="businessarea.businessareaData.length==0"></cart-tip>
    </div>
    <totle-count v-show="businessarea.businessareaData.length!=0 && !showValue" :total="total" :allcheckStatus="allcheck"     :nums="numss"
                 :changeAllStatusfun="_changeAllStatus"></totle-count>
    <del-select v-show="showValue && businessarea.businessareaData.length!=0" :businessarea="businessarea" :total="total" :allcheckStatus="allcheck"
                :changeAllStatusfun="_changeAllStatus"></del-select>
    <az-cart-like v-show="businessarea.businessareaData.length!=0"></az-cart-like>
    <az-my-footer></az-my-footer>
  </div>
  </keep-alive>
</template>

<script>
  import productapis from "../../static/data/azgoodstab";
  import CartHeader from "../components/cart/CartHeader";
  import TotleCount from "../components/cart/TotleCount";
  import ShopProduct from "../components/cart/ShopProduct";
  import CartTip from "../components/cart/CartTip";
  import DelSelect from "../components/cart/DelSelect";
  import AzMyFooter from "../components/AzMy/AzMyFooter";
  import data from "../../static/data/azgoodstab"
  import AzCartLike from "../components/cart/AzCartLike";

  export default {
    name: "AzCart",
    components: {AzCartLike, AzMyFooter, DelSelect, CartTip, ShopProduct, TotleCount, CartHeader,productapis},
    data(){
      return {
        showValue: false,
        total: 0,
        numss:0,  //总数
        allcheck: true,
        "businessarea":{
          "businessareaData":[]
        }
      }
    },

    updated(){
      // if (this.businessarea.businessareaData.length > 0) {
      //   console.info('点击管理:删除选中')
      // }
      /**
       * 商品总数的和
       * numss
       */
      let nums=0;
      for (var i=0;i<this.businessarea.businessareaData.length;i++) {
        nums+=this.businessarea.businessareaData[i].num
      }
      this.numss=nums;
    },
    methods:{

      /**
       * 点击管理状态(显示结算/删除商品)
       * @private
       */
      _changeshowValue(){
        if (this.businessarea.businessareaData.length != 0) {
          this.showValue = !this.showValue
        }

      },
      /**
       * 点击减号删除商品函数
       * @param i 商品索引
       * @private
       */
      _delCart(i){
        this.businessarea.businessareaData.splice(i, 1)
      },

      _getthisdata(){
          /**
           * 把获取的数据和vuex中的数据进行匹配筛选
           */
          for (let i = 0; i < data.businessareaData.length; i++) {
            for (let j = 0; j < this.$store.state.productId.length; j++) {
              if (data.businessareaData[i].id == this.$store.state.productId[j].id) {
                data.businessareaData[i].num = this.$store.state.productId[j].num
                data.businessareaData[i].checkStatus = true
                this.businessarea.businessareaData.push(data.businessareaData[i])
              }
            }
          }
      },
      /**
       * 计算total
       * @private
       */
      _countTotal(){
        let sum = 0;
        this.businessarea.businessareaData.forEach((v, i) =>{
          if (this.businessarea.businessareaData[i].checkStatus) {
            sum += this.businessarea.businessareaData[i].price * this.businessarea.businessareaData[i].num
          }
        })
        this.total = sum;
      },
      /**
       * 通过点击全选按钮改变全选按钮的状态和子按钮的状态
       */
      _changeAllStatus(){
        if (this.allcheck){
          // this.allcheck=false
          // console.log("不选中")
          this.businessarea.businessareaData.forEach((v, i) =>{
            this.businessarea.businessareaData[i].checkStatus = false
          })
        } else{
          // this.allcheck=true
          // console.log("选中")
          this.businessarea.businessareaData.forEach((v, i) => {
            this.businessarea.businessareaData[i].checkStatus = true
          })
        }
      },
      /**
       * 通过监听zi按钮状态改变全选按钮的状态
       * @private
       */
      _subChangeAllStatus(){
        let trueNum = 0;
        this.businessarea.businessareaData.forEach((v, i) => {
          if (this.businessarea.businessareaData[i].checkStatus) {
            trueNum++;
          }
        })
        if (trueNum == this.businessarea.businessareaData.length) {
          // console.log("自按钮改变全选")
          this.allcheck = true
        } else {
          this.allcheck = false
        }
      }
    },
    created(){
      /**
       *加载数据
       */
      this._getthisdata()
    },
    watch:{
      /**
       * 监听商品列表的变化重新计算totle
       */
      businessarea:{
        handler: function(){
          this._countTotal()
          this._subChangeAllStatus()
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height: 100%;
    /*background: #f7f7f7;*/
    display: flex;
    flex-direction: column;


  .main
    flex: 1;
    overflow-y: scroll;
    font-size: .18rem;
    background: #f5f5f5;

</style>
