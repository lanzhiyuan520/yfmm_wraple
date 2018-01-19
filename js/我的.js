window.onload=function (ev) {
    var phone
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    var time,count
    $(".login_wrap").css("height",$(window).height())
    $(".submit").click(function () {
        phone = $(".phone").val()
        if (!reg.test(phone)){
            $("#page-loading-wrap").show()
            $(".dialog-inner").html("手机号不正确")
            setTimeout(function(){
                $("#page-loading-wrap").hide()
            },1000)
            return false
        }else{
            var verification = $(".verification").val()
            if(verification.trim()==""){
                $("#page-loading-wrap").show()
                $(".dialog-inner").html("验证码不能为空")
                setTimeout(function(){
                    $("#page-loading-wrap").hide()
                },1000)
                return false
            }else{
                $("#page-loading-wrap").show()
                $(".dialog-inner").html("登录成功")
                setTimeout(function(){
                    $("#page-loading-wrap").hide()
                },1000)
            }
        }
    })
    $(".send_verification").click(verification)
    function verification(){
        phone = $(".phone").val()
        if (!reg.test(phone)){
            $("#page-loading-wrap").show()
            $(".dialog-inner").html("手机号不正确")
            setTimeout(function(){
                $("#page-loading-wrap").hide()
            },1000)
            return false
        }else{
            $(".send_verification").unbind();
            count = 60
            time = setInterval(function(){
                count--
                $(".send_verification").children("span").html(count + "秒后重试")
                if (count <= 0){
                    $(".send_verification").children("span").html("点击重试")
                    $(".send_verification").live("click",function(){
                        verification()
                    })
                    clearInterval(time)
                }
            },1000)
        }
    }
}