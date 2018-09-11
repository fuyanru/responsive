$(function(){
	//导航栏固定
	$(window).scroll(function(){
		var winHigh=$(this).scrollTop();
		if(winHigh>=$('.header').height()){
			$('.nav').css({'position':'fixed','top':'0px'})
			$('.main').eq(0).css('padding-top','68px');
		}else{
			$('.nav').css({'position':'relative'})
			$('.main').eq(0).css('padding-top','0px');
		}
		if(0<=winHigh&&winHigh<=$('.header').height()){
			
	 		$('.nav .left ul').children().eq(1).css('border-bottom','1px dashed #f85d5d').siblings().css('border-bottom','1px dashed transparent')
	        nav('.nav .left ul li',1)	
		}
		if($('.main').offset().top<=winHigh&&winHigh<=$('.main').offset().top+$('.main').height()){
	 		$('.nav .left ul').children().eq(2).css('border-bottom','1px dashed #f85d5d').siblings().css('border-bottom','1px dashed transparent')
	        nav('.nav .left ul li',2)
		}
		if($('.main1').offset().top<=winHigh&&winHigh<=$('.main1').offset().top+$('.main1').height()+$('.main2').height()){
	 		$('.nav .left ul').children().eq(3).css('border-bottom','1px dashed #f85d5d').siblings().css('border-bottom','1px dashed transparent')
	        nav('.nav .left ul li',3)
		}
		if($('.main3').offset().top<=winHigh&&winHigh<=$('.main3').offset().top+$('.main3').height()){
	 		$('.nav .left ul').children().eq(4).css('border-bottom','1px dashed #f85d5d').siblings().css('border-bottom','1px dashed transparent')
	        nav('.nav .left ul li',4)
		}
		if($('.main4').offset().top<=winHigh&&winHigh<=$('.main4').offset().top+$('.main4').height()){
	 		$('.nav .left ul').children().eq(5).css('border-bottom','1px dashed #f85d5d').siblings().css('border-bottom','1px dashed transparent')
	        nav('.nav .left ul li',5)
		}
		if($('.main5').offset().top-200<=winHigh&&winHigh<=$('.main5').offset().top+$('.main5').height()){
	 		$('.nav .left ul').children().eq(6).css('border-bottom','1px dashed #f85d5d').siblings().css('border-bottom','1px dashed transparent')
	        nav('.nav .left ul li',6)
		}

		
	})

	
	//点击到指定的位置
	$('.next').click(function(){
		$('html').animate({scrollTop: $('.nav').offset().top}, 800);
//		$('.nav').css({'position':'fixed','top':'0px'})
	})
	
	 function nav(a,b){
		
		$(a).hover(
			function(){
				$('.nav .left ul').children().eq(b).css('border-bottom','1px dashed transparent')
				$(this).css('border-bottom','1px dashed #f85d5d').parent().siblings().children().css('border-bottom','1px dashed transparent')
			},
			function(){
				$('.nav .left ul').children().eq(b).css('border-bottom','1px dashed #f85d5d').siblings().css('border-bottom','1px dashed transparent')
				$(a).children().eq(b).css('border-bottom','1px dashed transparent')
				$(this).children().css('border-bottom','1px dashed transparent')
				
//				$(a).children().parent().eq(b).children().css('border-bottom','1px dashed #f85d5d').parent().siblings().children().css('border-bottom','1px dashed transparent')
			}
		)
	}
	nav('.nav .left ul li',1)
	//导航栏hover效果
	$('.nav .left ul').children().click(function(){
			move($(this).index());
	})
	$('.mune .left ul').children().click(function(){
			move($(this).index()+1);
	})
	function move(a){
		switch(a){
			case 2: $('html').animate({scrollTop:$('.main').offset().top}, 800);break;
			case 3: $('html').animate({scrollTop:$('.main1').offset().top}, 800);break;
			case 4: $('html').animate({scrollTop:$('.main3').offset().top+10}, 800);break;
			case 5: $('html').animate({scrollTop:$('.main4').offset().top+10}, 800);break;
			case 6: $('html').animate({scrollTop:$('.main5').offset().top}, 800);break;
			default:$('html').animate({scrollTop:$('.header').offset().top}, 800);
		}
	}
	var Width =0;
	var Width1 =0;
	
	//
	$(window).resize(function(){
		Width =  $(window).width()
		if(Width>Width1){
			$('.mune').removeClass('block')
			$('.flow').removeClass('block')
			
			$('body').css('overflow-y','auto')
		}
	})
	//小页面时的菜单栏
	$('.btn-nav').click(function(){
		$('body').css('overflow-y','hidden')
		$('.mune').addClass('block');
		Width1 = $(window).width()
		
	})
	$('.mune').click(function(){
//		console.log()
		$('body').css('overflow-y','auto')
		$('.mune').removeClass('block')
	
	})
	
	$('.header-box').click(function(){
		$('body').css('overflow-y','hidden')
		$('.flow').addClass('block');
	})
	$('.flow').click(function(){
//		console.log()
		$('body').css('overflow-y','auto')
		$('.flow').removeClass('block')
	
	})
	
	$('.btn-sign').click(function(){
		$('body').css('overflow-y','hidden')
		$('.flow').addClass('block');
	})

})
