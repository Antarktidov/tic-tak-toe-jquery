$(document).ready(function() {
$(".sharp").click(function() {
		$(this).text("0")
		.removeClass("sharp")
		.addClass("zero");
		
		const idix = $('.sharp')
		const index = Math.floor(Math.random() * idix.length);
		
		$(`.sharp:eq(${index})`)
		.text('X')
		.removeClass("sharp")
		.addClass("ix");
	});
});