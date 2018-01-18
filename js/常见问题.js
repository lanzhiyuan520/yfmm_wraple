window.onload=function (ev) {
    $(".tab_btn").click(function () {
        $(this).children(".tab_text").addClass("button_selected")
        $(this).siblings().children(".tab_text").removeClass("button_selected")
        var index = $(this).index()
        $(".problem_list").eq(index).show()
        $(".problem_list").eq(index).siblings().hide()
    })
}