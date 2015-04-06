$(document).ready(function(){

 $('.slide').hide();

var slides = ['slide-1','slide-2','slide-3','slide-4','slide-5','slide-6']
var x = 1;
var result = 0;

	$(document).on('click','button',function() {
		$('#slide-' + x).hide(1000);
		$('#slide-' + (x + 1)).show(1000);
		$(this).attr("value");
		x += 1;
	});

	$(document).on('click','.answer',function() {
	var price = Number($(this).attr('data-price'));
		result += price;
		$('.sumPrice').text("$" + result + ".00");
	});

	$( "#banner" ).click(function() {
	  $( ".image" ).animate({
	    width: [ "toggle", "swing" ],
	    height: [ "toggle", "swing" ],
	    opacity: "toggle"
	  }, 5000, "linear", function() {
	    $( this ).after();
	  });
	});
});

	// $(document).on('click','.answer',function() {
	// var answer = $('.answer').attr('data-answer');
	// var price = Number($('.answer').attr('data-price'));

	// 	$(this).attr("data-answer");
	// 	$(this).attr("data-price");

	// 	result += price;
	// });

	// for (var i = 0; i <= 3; i++) {
	// 	$($('.sumPrice')[i]).text("$" + result + ".00");
	// }

