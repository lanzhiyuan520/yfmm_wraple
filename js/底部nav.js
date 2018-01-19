window.onload=function (ev) {
    $(".nav_bar").click(function () {
        var index = $(this).index()
        if (index == 0){
            $(this).find(".icon").css("background-position","-77px -20px")
            $(this).find(".icon").siblings().addClass("active")
            $(".find_icon").css("background-position","-158px -62px").siblings().removeClass("active")
            $(".class_icon").css("background-position","-239px -62px").siblings().removeClass("active")
            $(".my_icon").css("background-position","-320px -62px").siblings().removeClass("active")
        }else if(index == 1){
            $(this).find(".icon").css("background-position","-158px -20px")
            $(this).find(".icon").siblings().addClass("active")
            $(".home_icon").css("background-position","-77px -62px").siblings().removeClass("active")
            $(".class_icon").css("background-position","-239px -62px").siblings().removeClass("active")
            $(".my_icon").css("background-position","-320px -62px").siblings().removeClass("active")
        }else if (index == 2){
            $(this).find(".icon").css("background-position","-239px -20px")
            $(this).find(".icon").siblings().addClass("active")
            $(".home_icon").css("background-position","-77px -62px").siblings().removeClass("active")
            $(".find_icon").css("background-position","-158px -62px").siblings().removeClass("active")
            $(".my_icon").css("background-position","-320px -62px").siblings().removeClass("active")
        }else if (index == 3){
            $(this).find(".icon").css("background-position","-320px -20px")
            $(this).find(".icon").siblings().addClass("active")
            $(".home_icon").css("background-position","-77px -62px").siblings().removeClass("active")
            $(".find_icon").css("background-position","-158px -62px").siblings().removeClass("active")
            $(".class_icon").css("background-position","-239px -62px").siblings().removeClass("active")
        }
    })
}