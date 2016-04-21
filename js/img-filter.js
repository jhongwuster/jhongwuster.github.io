(function ($) {
    "use strict";
	var columnSize = function(){
		var columns;
		var width = $(window).width();
        if($(window).width() <= 768) {
			columns = 2;
		} else {
			columns = 3;
		}
		console.log("columnSize = " + columns);
		return 3;
	};
	
	$(document).ready(function () {

	$(window).load(function() {
		var $container = $('#work-div');
$container.isotope({
filter: '*',
resizable: false, // disable normal resizing
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: $container.width() / 3 }
}).isotope('reLayout');


$('.caegories a').click(function () {
$('.caegories .active').removeClass('active');
$(this).addClass('active');
var selector = $(this).attr('data-filter');

$container.isotope({
filter: selector,
resizable: false, // disable normal resizing
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: $container.width() / columnSize() }
});
return false;
});

$(window).smartresize(function(){
	
	$container.isotope({
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: $container.width() / columnSize() }
	});
	
	});
	});
	});
})(jQuery); //end