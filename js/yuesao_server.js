window.onload=function(){
    $(".server_tab_header").click(function(){
        $(this).addClass("server_brief_tab_header_active").siblings().removeClass("server_brief_tab_header_active")
        var index = $(this).index()
        $(".server_tab_content").eq(index).show()
        $(".server_tab_content").eq(index).siblings().hide()
    })
}