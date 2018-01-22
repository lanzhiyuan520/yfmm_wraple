
window.onload=function (ev) {
    $(".more_taocan").click(function () {
        $(".shade_wrap").show().css("height",$(window).height())
        $('.shade_wrap').bind("touchmove",function(e){
            e.preventDefault();
        });
    })
    $(".close_content").click(function () {
        $(".shade_wrap").hide()
    })
}