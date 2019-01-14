$(function(){
    $("li").each(function(index){
        $(this).click(function(){
            $("li").removeClass("lis");
            $("li").eq(index).addClass("lis");
        });
    });
})
// var swiper = new Swiper('.swiper-container', {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     loop:true,
//   });
