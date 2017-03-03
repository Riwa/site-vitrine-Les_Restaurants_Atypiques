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

	function resizeHeaderOnScroll() {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 200,
			headerEl = document.getElementById('jsHeader');

		if (distanceY > shrinkOn) {
			headerEl.classList.add("smaller");
		} else {
			headerEl.classList.remove("smaller");
		}
	}

	window.addEventListener('scroll', resizeHeaderOnScroll);

});