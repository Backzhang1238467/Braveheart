/**
 * Created by IBM on 2018/3/8.
 */
$(function(){
    //�̶��������¼�
    $(window).scroll(function(){
        if($(document).scrollTop() >= $("nav").height()){
            //��ȡ��������Ԫ�� .nav �����ĵ���
            $("nav").css("position","fixed").css("top",0);
            $("span>.mark1").css("position","fixed").css("top",0);
        }else{
            $("nav").css("position","static");
            $("span>.mark1").css("position","static");
        };
    });
});