<template>
  <keep-alive>
  <div class="boxWrap">
    <cart-header :changeshowValue="_changeshowValue" :showValue="showValue"></cart-header>
    <div class="main">
      <shop-product :key="idx" v-for="(m,idx) in arrayall" :keys="idx" :product="m"
                    :delCart="_delCart"></shop-product>
      <cart-tip v-show="arrayall.length==0"></cart-tip>
    </div>
    <totle-count v-show="arrayall.length != 0 && !showValue" :total="total" :allcheckStatus="allcheck"
                 :changeAllStatusfun="_changeAllStatus"></totle-count>
    <del-select v-show="showValue && arrayall.length != 0" :businessarea="arrayall" :total="total" :allcheckStatus="allcheck"
                :changeAllStatusfun="_changeAllStatus"></del-select>
    <az-cart-like v-show="arrayall.length != 0"></az-cart-like>
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
        allcheck: true,
        arrayall:[],  //包含了所有商品的数组
        "businessarea":{
          "businessareaData":[{
            "product":[]
          }]
        }
      }
    },

    updated(){

            this._arrayall();
      if (this.arrayall.length > 0) {
        // console.info('点击管理:删除选中')
      }
      /**
       * 商品总数的和
       * numss
       */
      let nums=0;
            for (var i=0;i<this.arrayall.length;i++){
            nums+=this.arrayall[i].num
      }
      this.numss=nums;
    },
    methods:{

      /**
       * 点击管理状态(显示结算/删除商品)
       * @private
       */
      _changeshowValue(){
            this._arrayall()
        if (this.arrayall.length != 0){
              this.showValue = !this.showValue
        }
      },

      /**
       *  将所有的对象遍历出来
       */

      _arrayall(){
        for (var i =0;i<this.businessarea.businessareaData.length;i++){
          for (var j =0;j<this.businessarea.businessareaData[i].product.length;j++){
            this.arrayall.push(this.businessarea.businessareaData[i].product[j]);
          }
        }

      },
      /**
       * 点击减号删除商品函数
       * @param i 商品索引
       * @private
       */
      _delCart(i){
            this._arrayall();
            this.arrayall.splice(i, 1)
      },

      _getthisdata(){
          /**
           * 把获取的数据和vuex中的数据进行匹配筛选
           */
          for (let i = 0; i < data.businessareaData.length; i++) {
            for (let m=0;m<data.businessareaData[i].product.length;m++ ) {
              for (let j = 0; j < this.$store.state.productId.length; j++) {
                if (data.businessareaData[i].product[m].id == this.$store.state.productId[j].id) {
                data.businessareaData[i].product[m].num = this.$store.state.productId[j].num
                data.businessareaData[i].product[m].checkStatus = true
                  this._arrayall();
                this.arrayall.push(data.businessareaData[i].product[m])
              }
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
            for (var i=0;i<this.arrayall.length;i++){
            if (this.arrayall[i].checkStatus) {
              sum += this.arrayall[i].price * this.$store.getters.GETNUMSS
            }
            }
        this.total = sum;
      },
      /**
       * 通过点击全选按钮改变全选按钮的状态和子按钮的状态
       */
      _changeAllStatus(){
        if (this.allcheck){
          // this.allcheck=false
          // console.log("不选中")
          for (var i=0;i<this.arrayall.length;i++) {
            this.arrayall[i].checkStatus = false
          }
        } else{
          // this.allcheck=true
          // console.log("选中")
          for (var i=0;i<this.arrayall.length;i++) {
            this.arrayall[i].checkStatus = true
          }
        }
      },
      /**
       * 通过监听zi按钮状态改变全选按钮的状态
       * @private
       */
      _subChangeAllStatus(){
        let trueNum = 0;
        for (var i=0;i<this.arrayall.length;i++) {
            if (this.arrayall[i].checkStatus) {
              trueNum++;
            }
        }

           this._arrayall();
          if (trueNum == this.arrayall.length) {
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
      arrayall:{
        handler: function(){
          this._arrayall();
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
