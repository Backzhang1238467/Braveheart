/**
 * Created by IBM on 2018/3/7.
 */
$(function(){
    //设置定时器让图自动播放
    var slide = $(".slide");
    ul =slide.find("ul");
    showNumber=slide.find(".showNav span");//获取按钮
    oneWidth=slide.find("ul li").eq(0).width();
    var timer=null; //定时器返回值，主要用于关闭定时器
    var iNow=0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
    showNumber.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");//高亮显示
            var index = $(this).index();//获取哪个按钮被点击，也就是找到被点击按钮的索引值
        ul.animate({"left":-oneWidth*iNow},200);
    });
    timer=setInterval(function(){ //打开定时器
        iNow++;    //让图片的索引值次序加1，这样就可以实现顺序轮播图片
        if(iNow>showNumber.length-1){ //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
            iNow=0;
        }
        showNumber.eq(iNow).trigger("click"); //模拟触发数字按钮的click
    },1000); //2000为轮播的时间
    $(".slide").mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer=setInterval(function(){ //打开定时器
            iNow++;    //让图片的索引值次序加1，这样就可以实现顺序轮播图片
            if(iNow>showNumber.length-1){ //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
                iNow=0;
            }
            showNumber.eq(iNow).trigger("click"); //模拟触发数字按钮的click
        },1000); //2000为轮播的时间
    });

});







