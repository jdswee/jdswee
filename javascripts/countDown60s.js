// 倒计时60秒获取验证码
var waitTime = 60;
function countDown(o) {
    if(waitTime == 0) {
        $(o).val('获取验证码').css("color","#f23f3f");
        waitTime = 60;
        $(o).removeAttr("disabled");
    }else {
        $(o).attr("disabled",true);
        $(o).val(waitTime+"s后重新发送").css("color","#999");
        waitTime--;
        setTimeout(function () {
            countDown(o);
        },1000);
    }
}
$(".obtain").on('click',function() {
    countDown(this);
});