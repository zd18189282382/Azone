<template>
  <div>
    <div class="htSwiper">
      <div class="swiper-container" id="smallswiper" v-for="a in AzIndex">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="b in a.bannersmall"><img :src="b.smallimg" class="swiper-lazy"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  export default {
    name: "AzIndexBannerSmall",
    props:["AzIndex"],
    mounted() {
      var swiper = new Swiper('#smallswiper',{
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        allowTouchMove: true,
        centeredSlides: true,
        spaceBetween :7,
        slidesPerView :"auto",

      });
      window.onresize=function(){
        swiper.update();
      }
    }

  }
</script>

<style scoped>
  .htSwiper {
    width: 100%;
    height: 1rem;
    background: white;
    margin-bottom: .15rem;
  }
  .swiper-slide {
    width:3.4rem;
    height:1rem;
  }

  .swiper-slide img{
    width:3.4rem;
    border-radius: 4px;
    height:1rem;
  }

</style>
