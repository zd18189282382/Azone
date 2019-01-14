<template>
  <div class="banner">
    <div class="swiper-container" id="swiper" v-for="a in AzIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="c in a.banner"><img :src="c.bannerImg" alt=""/></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"

  export default {
    name: "AzIndexBanner",
    props: ["AzIndex"],
    mounted() {
      new Swiper("#swiper", {
        direction: 'horizontal',
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
    // data() {
    //   // return{
    //   //
    //   //       banner:[
    //   //         {
    //   //           "bannerImg":"../../static/img/index_banner1.jpg"
    //   //         },
    //   //         {
    //   //           "bannerImg":"../../static/img/index_banner2.jpg"
    //   //         },
    //   //         {
    //   //           "bannerImg":"../../static/img/index_banner3.jpg"
    //   //         },
    //   //         {
    //   //           "bannerImg":"../../static/img/index_banner4.jpg"
    //   //         },
    //   //         {
    //   //           "bannerImg":"../../static/img/index_banner5.jpg"
    //   //         },
    //   //         {
    //   //           "bannerImg":"../../static/img/index_banner6.jpg"
    //   //         },
    //   //         {
    //   //           "bannerImg":"../../static/img/index_banner7.jpg"
    //   //         },
    //   //         {
    //   //           "bannerImg":"../../static/img/index_banner8.jpg"
    //   //         }
    //   //       ],
    //   //
    //   //
    //   // }
    // }
  }

</script>

<style scoped>
  .banner {
    width: 100%;
    height: 1.84rem;
  }

  .swiper-container {
    width: 100%;
    height: 1.84rem;
    overflow: hidden;
    position: relative;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex: 0;
  }

  .swiper-slide {
    width: 3.75rem;
    height: 1.84rem;
  }

  .swiper-slide img {
    width: 3.75rem;
    height: 1.84rem;
  }

  .swiper-pagination {
    bottom: -16px;
    left: -3px;
  }
</style>
