window.onload=function (ev) {
    var width = $(".tab_list").children("li").length*94 + "px"
    console.log(width)
    $(".tab_list").css("width",width)
    $(".tab_title").click(function () {
        var index = $(this).index()
        $(this).addClass("tab_selected").siblings().removeClass("tab_selected")
        $(".youfushuo_list").eq(index).show()
        $(".youfushuo_list").eq(index).siblings().hide()
    })
}