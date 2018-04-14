$(function() {
    setTimeout(function(){
        $(".section1").addClass("comein")
    }, 200);
    $('#fullpage').fullpage({
        //显示项目符号
        navigation:true,
        //循环滚动
        loopBottom:true,
    })
});