<template>
  <transition>
    <div>
      <div class="return"></div>
    </div>
  </transition>
</template>

<script>
  import $ from "jquery"

  export default {
    name: "AzIndexReturn",
    mounted() {
      $(window).scroll(
        function () {
          var scroTop = $(window).scrollTop();
          if (scroTop > 600) {
            $('.return').show();
          } else {
            $('.return').hide();
          }
        }
      );
      $(".return").click(
        function(){
          if ($(window).scrollTop() > 0) {
            $("html,body").stop().animate({ scrollTop: 0 }, 600);
          }
        }
      )
    }

  }
</script>
<style scoped>
  .return {
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    background: url("../../../static/img/index_return.png") center no-repeat #5B6167;
    background-size: .18rem .2rem;
    position: fixed;
    right: .1rem;
    bottom: .7rem;
    display:none;
  }


</style>
