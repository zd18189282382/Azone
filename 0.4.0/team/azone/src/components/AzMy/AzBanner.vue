<template>
    <!-- banner-vip -->
    <div>
    <div class="nav_banner" :key="j" v-for="(k,j) in datas[num].box" :style="{backgroundImage: 'url(' + k.img + ')', backgroundSize:'100% 100%'}">
        <a href="#" class="set" :style="{backgroundImage: 'url(' + k.imgs + ')', backgroundSize:'100% 100%'}"></a>
        <div class="user_info">
            <div class="user_logo">
                <a href="#" class="aimg">
                    <img class="img" :src="k.aimg" alt="">
                </a>
                <a class="realNameAuth" href="#">{{k.real}}</a>
            </div>
            <div class="user_detail">
                <div class="user_name">
                    <span @click="loginfn">{{username}}</span>
                    <a href="#" :style="{backgroundImage: 'url(' + k.code + ')', backgroundSize:'100% 100%'}"></a>
                </div>
                <div class="user_content">
                    <a href="#">
                        <div class="user_level">
                            <span>{{k.equity}}</span>
                            <i :style="{backgroundImage: 'url(' + k.arrow + ')', backgroundSize:'100% 100%'}"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <a href="#" class="superVip" :style="{backgroundImage: 'url(' + k.admission + ')', backgroundSize:'100% 100%'}">
            <span>{{k.spani}}}</span>
        </a>
    </div>
    </div>
</template>

<script>
export default {
    name: "AzBanner",
    props:["datas","num"],
  data() {
    return {
      username: ''
    }
  },
  created() {
    /**
     * 判断vuex中username是否存在,若存在则读取赋值,否则显示请登录
     */
    // if (this.$store.getters.GETUSERNAME != '') {
    //   this.username = this.$store.getters.GETUSERNAME
    // } else {
    //   this.username = '请登录'
    // }
     let s=localStorage.getItem("username")
    if (s != ' ') {
      this.username = s
    } else {
      this.username = '请登录'
    }
  },
  methods: {
    /**
     * 点击事件判断username的状态,判断是否跳转登录
     */
    loginfn() {
      if (this.username == '请登录') {
        this.$router.push('/login')
      } else {
        return
      }
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/iconfont.css";
/* banner-vip */
.nav_banner{
  width: 100%;
  height: 1.29rem;
  padding: .35rem 0.14rem 0;
  /* background: url(../../../static/img/my2.jpg) no-repeat;
  background-size: cover; */
  position: relative;
}
.set{
  display: block;
  width:.24rem;
  height: .24rem;
  /* background: url(../../../static/img/my7.png) no-repeat;
  background-size: contain; */
  position: absolute;
  top: .13rem;
  right: .125rem;
}
.user_info{
  width: 3.47rem;
  height: .65rem;
  clear: both;
  display: flex;
}
.user_logo{
  width: .65rem;
  height: .65rem;
  position: relative;
}
.user_logo .aimg{
  display: block;
  width: .65rem;
  height: .65rem;
}
.user_logo .aimg .img{
  display: block;
  width: 0.64rem;
  height: 0.64rem;
  border-radius: .32rem;
  border: 2px solid #eaaa00;
}
.realNameAuth{
  width: .65rem;
  height: 0.15rem;
  line-height: 0.15rem;
  text-align: center;
  background-color: #666;
  position: absolute;
  top: 0.525rem;
  left: 0;
  z-index: 10;
  border-radius: 0.1rem;
  font-size: 0.12rem;
  color: #fff;
}
.user_detail{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: 0.1rem;
}
.user_name{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 0.08rem;
}
.user_name span{
  display: block;
  font-size: 0.14rem;
  margin-right: 0.05rem;
  max-width: .71625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user_name a{
    display: block;
    width: 0.13rem;
    height: 0.13rem;
    /* background: url(../../../static/img/code.png) no-repeat;
    background-size: contain; */
}
.user_content{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.user_content a{
  display: block;
  width: .715rem;
  height: .125rem;
}
.user_level{
  height: 0.15rem;
  color: #fff;
  margin-right: 0.05rem;
  margin-top: -0.025rem;
  background: #000;
  border-radius: .1rem;
  padding: 0 .06rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.user_level span{
  display: block;
  font-size: .12rem;
}
.user_level i{
  font-size: 0;
  display: block;
  width: .035rem;
  height: .07rem;
  margin-left: .03rem;
  /* background: url(../../../static/img/my8.png) no-repeat center;
  background-size: contain; */
}
.superVip{
  display: block;
  width: 1.2rem;
  height: .7rem;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-top: .25rem;
  padding-left: 0.1rem;
  /* background: url(../../../static/img/my9.png) no-repeat;
  background-size: contain; */
}
.superVip span{
  font-size: 0.12rem;
  color: #000;
  position: absolute;
  top: .4225rem;
  left: .45rem;
  transform: rotate(5deg);
}
</style>


