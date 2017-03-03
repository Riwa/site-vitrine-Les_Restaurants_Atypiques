$(document).ready(function () {
	$('#menuButton').click(function () {
		$('nav')
			.toggleClass('navOpen')
			.toggleClass('bounceInUp')

	});
	$('#navClose').click(function () {
		$('nav')
			.toggleClass('navOpen')
			.toggleClass('bounceInUp');
	});
});