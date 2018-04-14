
$(function(){
	var k = $(window).height(); // 当前屏幕的高度
	var flag = false;  // 控制动画
      $('#fullpage').fullpage({
      	navigation: true,
		scrollingSpeed: 1200,// 滚动速度，单位为毫秒
		afterLoad:function(anchorlink, index){
			if(index == 2 && flag == false){
				$(".search").show().animate({"right":370},1500,function() {
					$(".search-wrods").animate({"opacity":1},500,function(){
						$(".search").hide();
						$(".search-02-1").show().animate({"height":30,"right":250,"bottom":452},1000,function() {
							flag = true;
						});
						$(".goods-02").show().animate({"height":218},1000)
						$(".words-02").animate({"opacity":1},500)
					});
				});
			}
		},
		onLeave:function(index,nextIndex,direction){
			if(index == 2 && nextIndex == 3 && flag == true){
		// 当第二屏幕往第三屏幕滚动的时候， 沙发显示并且往第三屏幕跑  白色盒子显示
				// 沙发要往第三屏幕走，  走的距离 就是  当前哦屏幕的高度 - main 到底部的高度 - 沙发到main的距离    (当前屏幕的高度  - 250 )
				$(".shirt-02").show().animate({"bottom": -(k - 250), "width": 207 , "left": 260}, 2000, function() {
    				$(".img-01-a").animate({"opacity": 1}, 500, function() {
    					$(".btn-01-a").animate({"opacity": 1}, 500);
    				})
    			});
    			$(".cover").show();
			}
			// 当第三屏幕往第四屏幕滚动的时候
			if(index == 3 && nextIndex == 4) {
				$(".shirt-02").hide();
				$(".t1f").show().animate({"bottom" : -((k - 250) + 50), "left": 260 }, 2000, function() {
					$(this).hide();  // 动画完毕之后，自动隐藏
					$(".car-img").show();
					// 这购物车就开始往右走
					$(".car").animate({"left": "150%"}, 3000,"easeInOutQuart",function() {
						$(".note").show();
						$(".note-img,.words-04-a").animate({"opacity": 1},1000,function(){
							$(".next").fadeIn();
						});
					});	
			   })
			}

			// 第4屏幕到第5屏幕过渡
			if(index == 4 && nextIndex == 5) {
				// 小手上来
				$(".hand-05").animate({"bottom": 0},2000,function() {
					$(".mouse-05-a").animate({"opacity": 1});
					$(".t1f-05").show().animate({"bottom": 70}, 1000, function(){
						  // 单子上走 走完之后， 我们的文字翻转
						  $(".order-05").animate({"bottom": 390},function() {
							  $(".word-05").addClass("words-05-a");
							  $(".next").fadeIn();
						  });
					})
				});
			}
			 // 第5屏幕到第6屏幕过渡
			if(index == 5 && nextIndex == 6) {
				$(".t1f-05").animate({"bottom": -(k - 500),"left": "40%","width": 65},1500,function() {
					$(".t1f-05").hide();
				});
				$(".box-06").animate({"left":"38%"},1500,function(){
					$(this).animate({"bottom":40},500, function() {
						$(this).hide();
						// 行走的过程就是 背景移动的过程
							// 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标 
					$(".section6").animate({"backgroundPositionX": "100%"},4000,function() {
						$(".boy").animate({"height": 305, "bottom": 116}, 1000, function() {
							$(this).animate({"right":500}, 500, function() {
								$(".door").animate({"opacity": 1}, 200, function() {
									$(".girl").show().animate({"right": 350, "height": 306}, 500, function() {
										$(".pop-07").show();
										$(".next").fadeIn();
									})
								});
							});
						});
					});
					//光的速度
					$(".words-06-a").show().animate({"left":"30%"},2000,"easeOutElastic");
					$(".pop-06").show();
					})
				});
			}
			// 第6屏幕到第7屏幕过渡
			if(index ==6 && nextIndex == 7) {
				setTimeout(function(){
					$(".star").animate({"width": 120}, 500, function(){
						$(".good-07").show();
						$(".next").fadeIn();
					})
				},2000)
			}
		 // 这是第8屏幕动画
		 $(".beginShoping").hover(function() {
			 $(".btn-08-a").toggle();
		 });
		 $(document).mousemove(function(event) {
			 var x = event.pageX - $(".hand-08").width()/2;
			 var y = event.pageY + 10;
			 var minY = k - 449;
			 if(y< minY) {
				 y = minY;
			 }
			 $(".hand-08").css({"left": x, "top": y});
		 });
		 $(".again").click(function(event) {
			 $.fn.fullpage.moveTo(1);
			 $("img, .move").attr("style", "");
		 });
		}
	});   
	});   