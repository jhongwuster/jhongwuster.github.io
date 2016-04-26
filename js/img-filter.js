(function ($) {
    "use strict";
	
	
	$(document).ready(function () {

	$(window).load(function() {
		var $container = $('#work-div');
		var columnWidth = function(){
		var columnWidth;
        if($(window).width() <= 768) {
			columnWidth = $container.width() / 2;
		} else {
			columnWidth = $container.width() / 3;
		}
		console.log("columnWidth = " + columnWidth);
		return columnWidth;
	};
	
	var gutterSize = function(){
		var gutter;
		var width = $(window).width();
        if($(window).width() <= 768) {
			gutter = 1;
		} else {
			gutter = 5;
		}
		console.log("gutterSize = " + gutter);
		return gutter;
	};
$container.isotope({
filter: '*',
resizable: false, // disable normal resizing
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: columnWidth(),gutter: gutterSize() }
}).isotope('reLayout');;


$('.caegories a').click(function () {
$('.caegories .active').removeClass('active');
$(this).addClass('active');
var selector = $(this).attr('data-filter');

$container.isotope({
filter: selector,
resizable: false, // disable normal resizing
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: columnWidth()}
}).isotope('reLayout');
return false;
});

$(window).smartresize(function(){
	
	$container.isotope({
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: columnWidth() , gutter:gutterSize()}
	});
	
	});
	});
	});
})(jQuery); //end