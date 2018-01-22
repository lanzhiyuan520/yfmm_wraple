window.onload=function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        // 如果需要分页器
        pagination: '.swiper-pagination',

    });
   $(".city_select").click(function(){
       $(".citys_wrap").toggle()
   })
    $(".city").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".citys_wrap").hide()
        var city_name = $(this).text()
        $(".city_name").html(city_name)
    })

    var times=null;
    times=setInterval(function(){
        $(".rolling-group").animate('rolling',
            1000,
           "linear",
            function(){
                $('.rolling-group').children().first().appendTo( $('.rolling-group') );
                $('.rolling-group').css("margin-top",0);
            }
        );
    },2000);
}
