window.onload=function () {
    $(".city_input").focus(function () {
        $(".city_list").show()
    })
    $(".city_text").click(function () {
        $(".city_input").val($(this).text())
        $(".city_list").hide()
    })
}