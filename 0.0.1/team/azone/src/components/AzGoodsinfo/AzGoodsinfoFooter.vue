<template>
    <div>
      <footer>
        <ul>
          <li>
            <img src="../../../static/img/goodsin_action-service.png" alt="">
          </li>
          <li>
            <img src="../../../static/img/goodsinfo_action-favourite.png" alt="">
          </li>
          <li>
            <img src="../../../static/img/goodsinfo_action-shop.png" alt="">
          </li>
          <li class="buy" @click="tocart(productinfo.id)">立即购买</li>
          <li class="buy join" @click="addCart(productinfo.id)">加入购物车</li>
        </ul>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "AzGoodsinfoFooter",
      props:["productinfo"],
      methods: {
          tocart(){
              this.$router.push('/cart')
          },
        addCart(i) {
          this.$store.commit( "NUM")
          // console.log(this.$store.getters.GETNUMSS)
          /**
           *判断如果购物车中有给商品,则数量+1
           */
          let statuskey = true
          for (let j = 0; j < this.$store.state.productId.length; j++) {
            if (this.$store.state.productId[j].id == i) {
              this.$store.dispatch({type: "addNum", data: {id: i}})
              statuskey = false
            }
          }
          /**
           * 若购物车中没该商品,则将该商品加入购物车
           */
          if (statuskey) {
            //用来放所有的ID的数组，存储到localstorage
            // let s=[];
            // s.push(i)
            // console.log(s)
            this.$store.dispatch({type: "addCart", data: {id: i, num: 1}})
            // localStorage.setItem("myid",JSON.stringify(s));
          }
          /**
           * 效果
           * @type {number}
           */

          document.querySelector('.join').style.opacity = 1
          setTimeout(() => {
            document.querySelector('.join').style.opacity = 0.4
          }, 800)

        },

      }
    }
</script>

<style scoped>
  footer{
    width:100%;
    height:.5rem;
    position:fixed;
    background:white;
    bottom:0;
    left:0;
    border-top:1px solid #ddd;
  }
  ul{
    width:100%;
    display:flex;
  }
  ul li{
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    padding:0 .04rem;
  }
  ul li img{
    width: .51rem;
    height: .5rem;
  }
  ul .buy{
    width:.97rem;
    height:.5rem;
    text-align: center;
    line-height:.5rem;
    font-size:.14rem;
    background:#fa0;
    border:none;
    color:white;
  }
  ul .join{
    background-color: #f60;
  }
</style>
