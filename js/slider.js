	var currentSlide = 1;
	var $slider = $(".slides");
	var slideCount = $slider.children().length;
	var slideTime = 5000;
	var animationTime = 2000;

	setInterval(function(){
		$slider.animate({
			marginLeft : '-=900px' 
		} , animationTime , function() {
			currentSlide++;
			if(currentSlide === slideCount){
				currentSlide = 1;
				$(this).css("margin-left" , "0px");
			}
		});
	} , slideTime);
