window.onload=function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        observer:true,
        observeParents:true,
        initialSlide:0
    });
    var waiter = [
        {img:"http://cdn.ayi800.com/image/af75b0b9f388ef208f732c2853051f17.jpg?imageView2/1/w/150/h/150"},
        {img:"http://cdn.ayi800.com/image/030a4690fcbc16f639c7cecaf1523f09.jpg?imageView2/1/w/150/h/150"},
        {img:"http://cdn.ayi800.com/image/08c8f28f32d8470cddcf3cbf9e27cfd6.jpg?imageView2/1/w/150/h/150"},
        {img:"http://cdn.ayi800.com/image/41c4aaaae2d625d2ccb2c3c1ed3d9be5.jpg?imageView2/1/w/150/h/150"},
        {img:"http://cdn.ayi800.com/image/95a1311606f32260626832f9fa8153f6.jpg?imageView2/1/w/150/h/150"}
    ]
   
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
    $(".waiter_img").click(function(){
        $(".big_picture").show()
    })
    $(".big_img").click(function () {
        $(".big_picture").hide()
    })
    $("._picture_employer_picture").click(function () {
        $(".big_picture").show()
    })
    $(".open_impression").click(function () {
        $(this).parents(".user_impression_wrap").hide()
        $(this).parents(".user_impression_wrap").siblings(".user_impression_wrap").show()
    })
}