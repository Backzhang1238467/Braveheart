/**
 * Created by IBM on 2018/3/8.
 */
$(function(){
    //固定滚动条事件
    $(window).scroll(function(){
        if($(document).scrollTop() >= $("nav").height()){
            //获取导航栏的元素 .nav 脱离文档流
            $("nav").css("position","fixed").css("top",0);
            $("span>.mark1").css("position","fixed").css("top",0);
        }else{
            $("nav").css("position","static");
            $("span>.mark1").css("position","static");
        };
    });
});