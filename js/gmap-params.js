$(document).ready(function () {

	let lyon = {
		nom: 'Restaurant Atypique Lyon',
		adresse: '17, rue Delandine <br> 69007 Lyon',
		description: 'Lorem ipsum dolor sit amet...',
		horaires: 'Du mardi au dimanche de 12h30 à 23h30',
		contact: '01 23 45 67 89'
	}

	let laLoupe = {
		nom: 'Restaurant Atypique La Loupe',
		adresse: '18 Rue de la gare <br> 28240 La Loupe',
		description: 'Lorem ipsum dolor sit amet...',
		horaires: 'Du mardi au dimanche de 12h30 à 23h30',
		contact: '01 23 45 89 67'
	}

	map = new GMaps({
		div: '#map',
		lat: 45.74627029999999,
		lng: 4.826846799999998,
		zoom: 5
	});

	map.addMarker({
		lat: 45.74627029999999,
		lng: 4.826846799999998,
		title: 'Restaurant Atypique Lyon',
		// OUVERTURE DE LA FICHE RESTAURANT
		click: function (e) {
			$('.ficheRestaurant')
				.removeClass('fadeOutDown')
				.addClass('opened fadeInUp');

			$('#ficheClose').click(function () {
				$('.ficheRestaurant')
					.removeClass('fadeInUp')
					.addClass('fadeOutDown');
			});

			$('.ficheRestaurant h3').text(lyon.nom);
			$('.restaurantDescription').html(lyon.description);
			$('.restaurantAdresse').html(lyon.adresse);
			$('.restaurantHoraire').html(lyon.horaires);
			$('.restaurantContact').html(lyon.contact);
		}
		// FIN DE FONCTION OUVERTURE FICHE RESTAURANT
	});

	map.addMarker({
		lat: 48.473369,
		lng: 1.011731,
		title: 'Restaurant Atypique La Loupe',
		// OUVERTURE DE LA FICHE RESTAURANT
		click: function (e) {
			$('.ficheRestaurant')
				.removeClass('fadeOutDown')
				.addClass('opened fadeInUp');
			$('#ficheClose').click(function () {
				$('.ficheRestaurant')
					.removeClass('fadeInUp')
					.addClass('fadeOutDown');
			});
			$('.ficheRestaurant h3').text(laLoupe.nom);
			$('.restaurantDescription').html(laLoupe.description);
			$('.restaurantAdresse').html(laLoupe.adresse);
			$('.restaurantHoraire').html(laLoupe.horaires);
			$('.restaurantContact').html(laLoupe.contact);
		}
		// FIN DE FONCTION OUVERTURE FICHE RESTAURANT
	});
});