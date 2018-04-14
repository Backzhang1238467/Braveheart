/**
 * Created by IBM on 2018/3/7.
 */
var timer;
$(function(){
    $(window).scroll(function(){
        clearInterval(timer);
        var topScroll=getScroll();
        var topDiv="150px";
        //设置初始位置
        var top=topScroll+parseInt(topDiv);
        timer=setInterval(function(){
            $(".car1").animate({"top":top},600);
        },500)//设置时间
    })
});
function getScroll(){
    var bodyTop = 0;
    if (typeof window.pageYOffset != 'undefined') {
        bodyTop = window.pageYOffset;
    } else if (typeof document.compatMode != 'undefined' || document.compatMode != 'BackCompat') {
        bodyTop = document.documentElement.scrollTop;
    }
    else if (typeof document.body != 'undefined') {
        bodyTop = document.body.scrollTop;
    }
    return bodyTop;
}
