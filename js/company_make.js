window.onload=function(){
    var index
    $(".picture_wrap").click(function(){
        $(".big_picture").show().css("height",$(window).height())
        $('.big_picture').bind("touchmove",function(e){
            e.preventDefault();
        });
        index = $(this).index()
    })
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        observer:true,
        observeParents:true,
        initialSlide:index
    });

    $(".big_img").click(function(){
        $(".big_picture").hide()
    })

}