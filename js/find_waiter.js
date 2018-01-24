window.onload=function(){
    var index;
    $(".city_select").click(function(){
        $(".citys_wrap").toggle()
    })
    $(".city").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".citys_wrap").hide()
        var city_name = $(this).text()
        $(".city_name").html(city_name)
    })

    $(".screen_title").click(function(){
        $(".screen_wrap").toggle()
    })
    $(".price").click(function () {
        $(this).addClass("screen_selected").siblings().removeClass("screen_selected")
    })
    $(".reset").click(function () {
        $(".price").removeClass("screen_selected")
    })
    $(".tab_btn").click(function () {
        $(this).children(".tab_text").addClass("button_selected")
        $(this).siblings().children(".tab_text").removeClass("button_selected")
        index = $(this).index()
        $(".waiter_list").eq(index).show()
        $(".waiter_list").eq(index).siblings().hide()
    })
    $(".icon").click(function () {
        var icon_index = $(this).index()
        $(this).hide().siblings().show()
        $(".waiter_list_content").eq(icon_index).show().siblings().hide()
        if (icon_index == 0){
            $(".waiter_list_content").eq(1).show().siblings().hide()
            $(".waiter_list_content").eq(3).show().siblings().hide()
        }else{
            $(".waiter_list_content").eq(0).show().siblings().hide()
            $(".waiter_list_content").eq(2).show().siblings().hide()
        }


    })
}