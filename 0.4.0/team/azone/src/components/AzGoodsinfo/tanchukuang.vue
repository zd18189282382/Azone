<template>
  <div class="shop-header">
    <nav class="shop-nav" :style="{backgroundImage:`url(${info.bgImg})`}">
      <i @click="$router.back()" class="iconfont icon-arrow1"></i>
    </nav>
    <div class="shop-card">
      <div class="shop-log-img">
        <span>品牌</span>
        <img :src="info.avatar">
      </div>
      <div class="shop-content" @click="toggleShopShow">
        <h2>
          <span>{{info.name}}</span>
          <i class="iconfont icon-arrowright"></i>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">评分{{info.score}}</span>
          <span class="shop-message-detail">月售{{info.sellCount}}单</span>
          <span class="shop-message-detail">蜂鸟快送约{{info.deliveryTime}}分钟</span>
          <span class="shop-message-detail">距离{{info.distance}}</span>
        </div>
      </div>
      <div class="red-packet" @click="toggleRedShow">
        <div class="con">
          <em class="e"></em>
          <em class="m"></em>
          <p class="money">
            <span>￥8</span>
            <span>
                <span class="pic"></span>
                无门槛
              </span>
          </p>
          <p class="ling">领取</p>
        </div>
      </div>
      <div class="shop-discounts" v-if="info.supports" @click="toggleSupportShow">
        <div class="leftbox">
          <span class="mini-tag">{{info.supports[0].name}}</span>
          <span class="txt">满50{{info.supports[0].content}}</span>
        </div>
        <div class="rightbox">{{info.supports.length}}个优惠 <i class="iconfont icon-arrowdown-copy"></i></div>
      </div>
      <p class="shop-notice txt">
        公告：{{info.name}}公告：
        {{info.bulletin}}
      </p>
    </div>
    <transition name="fade">
      <div class="shop-brief-modal maskWrap" v-show="shopShow">
        <div class="shop-modal-content">
          <h2 class="content-title">
            <span class="mini-tag">品牌</span>
            <span class="content-name">{{info.name}}</span>
          </h2>
          <ul class="brief-modal-msg">
            <li><h3>{{info.score}}</h3><p>评分</p> </li>
            <li><h3>{{info.sellCount}}单</h3><p>月售</p></li>
            <li><h3>{{info.description}}</h3><p>约{{info.deliveryTime}}分钟</p></li>
            <li><h3>{{info.deliveryPrice}}元</h3><p>配送费</p></li>
            <li><h3>{{info.distance}}Km</h3><p>距离</p></li>
          </ul>
          <h3 class="brief-modal-title">公告</h3>
          <div class="brief-modal-notice">{{info.bulletin}}</div>
        </div>
        <div class="shop-modal-toggle">
          <i @click="toggleShopShow" class="iconfont icon-buoumaotubiao20"></i>
        </div>
        <div class="shop-modal-cover cover" @click="toggleShopShow"></div>
      </div>
    </transition>
    <transition name="fade">
      <div class="shop-redPacket maskWrap" v-show="redPacket">
        <div class="redPacket-content">
          <div class="red-header">
            <h2>店铺专享红包</h2>
            <i @click="toggleRedShow" class="iconfont icon-guanbi"></i>
          </div>
          <div class="red-content">
            <div class="red-item">
              <h3 class="title">可领红包</h3>
              <div class="red-card">
                <div class="card-left">
                  <div class="color-red">￥ <span class="big">10</span></div>
                  <div class="card-content">
                    <h4>满￥119可用</h4>
                    <p>限本店使用, 2019-05-31到期</p>
                  </div>
                </div>
                <div class="card-right">
                  <span @click="getRedPacket">领取</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="redPacket-cover cover"></div>
      </div>
    </transition>
    <transition name="fade">
      <div class="activity-sheet maskWrap" v-show="supportShow">
        <div class="activity-sheet-content">
          <div class="activity-sheet-title">
            <h2>优惠活动</h2>
            <i @click="toggleSupportShow" class="iconfont icon-guanbi"></i>
          </div>
          <ul class="list">
            <li class="activity-item" v-for="(support,index) in info.supports" :key="index"
                :class="supportClass[support.type]">
              <span class="mini-tag">{{support.name}}</span>
              <span class="activity-content">{{support.content}}</span>
            </li>
          </ul>
        </div>
        <div class="activity-sheet-cover cover" @click="toggleSupportShow">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "EShopHearder",
    data(){
      return {
        supportClass:['activity-green','activity-red','activity-orange'],
        shopShow:false,
        supportShow:false,
        redPacket:false,
      }
    },
    computed:{
      ...mapState(['info'])
    },
    methods:{
      toggleShopShow(){
        this.shopShow=!this.shopShow
      },
      toggleSupportShow(){
        this.supportShow=!this.supportShow
      },
      toggleRedShow(){
        this.redPacket=!this.redPacket
      },
      getRedPacket(){
        alert(`领取红包成功！`)
      }
    },
    created(){}
  }
</script>

<style lang="stylus">
  .maskWrap{
    position: fixed
    top:0
    left:0
    right:0
    bottom: 0
    width: 100%
    height: 100%
    z-index:30
    display: flex
    flex-direction:column
    align-items:center
    &.fade-enter-active,&.fade-leave-active{
      -webkit-transition: opacity .5s
      -moz-transition: opacity .5s
      -ms-transition: opacity .5s
      -o-transition: opacity .5s
      transition: opacity .5s
    }
    &.fade-enter,&.fade-leave-to{
      opacity: 0;
    }
  }
  .cover{
    position: absolute
    top:0
    left: 0
    width: 100%
    height: 100%
    z-index 1
    background:rgba(0,0,0,.5)
  }
  .shop-header
    padding-top: 26.67vw
    position: relative
    border-bottom: 1px solid #eeeeee
    color: #333
  .txt
    -ms-text-overflow: ellipsis
    text-overflow: ellipsis
    overflow: hidden
    white-space:nowrap
  .shop-nav
    width: 100%;
    height: 100%
    position: absolute
    top: 0;
    .iconfont{
      position: relative
      top: .08rem
      left: .1rem
      color: #fff
      font-size:20px
      font-weight:700
    }

</style>
