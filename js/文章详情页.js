window.onload=function (ev) {

    $(".article-more-btn").click(function () {
        $(".article-content-detail").css({"height":"auto","overflow":"auto"})
        $(this).hide()
    })
}