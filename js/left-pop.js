
var leftPop = {
	
	init : function (el){
		var $triggerEle = $( "#" + el);
		$triggerEle.click(function(){
		$(".join-us").animate({
			"left" : 0
		},300).children(".back").addClass("back-show")
		$("body").css({
			"overflow" : "hidden"
		})
		
		$(".back").click(function(){
		$(this).parent().animate({
			"left" : "100%"
		},300).children(".back").removeClass("back-show")
		$("body").css({
			"overflow" : "auto"
		})
	})
	})
	}
	
}