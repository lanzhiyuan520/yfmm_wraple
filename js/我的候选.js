window.onload=function (ev) {
    $(".tab_btn").click(function () {
        $(this).children(".tab_text").addClass("button_selected")
        $(this).siblings().children(".tab_text").removeClass("button_selected")
        var index = $(this).index()
        $(".no_order_wrap").eq(index).show()
        $(".no_order_wrap").eq(index).siblings(".no_order_wrap").hide()
    })
}