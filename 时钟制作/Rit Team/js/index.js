/**
 * Created by IBM on 2018/3/7.
 */
$(function(){
    //���ö�ʱ����ͼ�Զ�����
    var slide = $(".slide");
    ul =slide.find("ul");
    showNumber=slide.find(".showNav span");//��ȡ��ť
    oneWidth=slide.find("ul li").eq(0).width();
    var timer=null; //��ʱ������ֵ����Ҫ���ڹرն�ʱ��
    var iNow=0; //iNowΪ����չʾ��ͼƬ����ֵ�����û�����ҳʱ������ʾ��һ��ͼ��������ֵΪ0
    showNumber.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");//������ʾ
            var index = $(this).index();//��ȡ�ĸ���ť�������Ҳ�����ҵ��������ť������ֵ
        ul.animate({"left":-oneWidth*iNow},200);
    });
    timer=setInterval(function(){ //�򿪶�ʱ��
        iNow++;    //��ͼƬ������ֵ�����1�������Ϳ���ʵ��˳���ֲ�ͼƬ
        if(iNow>showNumber.length-1){ //���������һ��ͼ��ʱ����iNow��ֵΪ��һ��ͼ������ֵ���ֲ�Ч����ת����һ��ͼ���¿�ʼ
            iNow=0;
        }
        showNumber.eq(iNow).trigger("click"); //ģ�ⴥ�����ְ�ť��click
    },1000); //2000Ϊ�ֲ���ʱ��
    $(".slide").mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer=setInterval(function(){ //�򿪶�ʱ��
            iNow++;    //��ͼƬ������ֵ�����1�������Ϳ���ʵ��˳���ֲ�ͼƬ
            if(iNow>showNumber.length-1){ //���������һ��ͼ��ʱ����iNow��ֵΪ��һ��ͼ������ֵ���ֲ�Ч����ת����һ��ͼ���¿�ʼ
                iNow=0;
            }
            showNumber.eq(iNow).trigger("click"); //ģ�ⴥ�����ְ�ť��click
        },1000); //2000Ϊ�ֲ���ʱ��
    });

});







