window.onload=function(){
    $(".evaluate").click(function(){
        $(this).addClass("evaluate_tab_active").siblings().removeClass("evaluate_tab_active")
        var index = $(this).index()
        $(".tab_employer").eq(index).show()
        $(".tab_employer").eq(index).siblings().hide()
    })
    $(".content_text").click(function(){
        $(this).hide()
        $(this).siblings().show()
    })
}