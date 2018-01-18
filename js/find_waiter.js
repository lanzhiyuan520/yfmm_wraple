window.onload=function(){
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
        var index = $(this).index()
        $(".waiter_list").eq(index).show()
        $(".waiter_list").eq(index).siblings().hide()
    })
}