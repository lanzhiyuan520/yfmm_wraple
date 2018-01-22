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
    times = null
       var times = setInterval(function(){
            $(".info-rolling").find("ul:first").animate({
                    marginTop: "-20px"
                },
                2000,
                function() {
                    $(this).css({
                        marginTop: "0px"
                    }).find("li:first").appendTo(this);
                });
        }, 1000)
}
