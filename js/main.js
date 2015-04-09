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

	$(document).on('click','.previousSlide',function() {
		$('#slide-' + x).hide(1000);
		$('#slide-' + (x - 1)).show(1000);
		$(this).attr("value");
		x -= 1;
	});

	$(document).on('click','.answer',function() {
	var price = Number($(this).attr('data-price'));
		result += price;
		$('.sumPrice').text("$" + result + ".00");
	});

	$(document).on('click','#submit-form',function() {
		alert('Thank You! I will be in touch soon.');
	});

	// function printRadioCheckedValue(radio_button) {
 //   		var radio = document.forms[1].elements[radio_button];
 
 //   		for(var i = 0; i < 5; i++) {
 //      		if(radio[i].checked) {
 //         	console.log(radio[i].value);
 //      		}
 //   			}
 
 //   			return ('');
	// 		}

});
