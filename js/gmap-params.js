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

	let style = [
		{
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				},
				{
					"color": "#f49f53"
				}
			]
		},
		{
			"featureType": "landscape",
			"stylers": [
				{
					"color": "#f9ddc5"
				},
				{
					"lightness": -7
				}
			]
		},
		{
			"featureType": "road",
			"stylers": [
				{
					"color": "#813033"
				},
				{
					"lightness": 43
				}
			]
		},
		{
			"featureType": "poi.business",
			"stylers": [
				{
					"color": "#645c20"
				},
				{
					"lightness": 38
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{
					"color": "#1994bf"
				},
				{
					"saturation": -69
				},
				{
					"gamma": 0.99
				},
				{
					"lightness": 43
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#f19f53"
				},
				{
					"weight": 1.3
				},
				{
					"visibility": "on"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "poi.business"
		},
		{
			"featureType": "poi.park",
			"stylers": [
				{
					"color": "#645c20"
				},
				{
					"lightness": 39
				}
			]
		},
		{
			"featureType": "poi.school",
			"stylers": [
				{
					"color": "#a95521"
				},
				{
					"lightness": 35
				}
			]
		},
		{},
		{
			"featureType": "poi.medical",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#813033"
				},
				{
					"lightness": 38
				},
				{
					"visibility": "off"
				}
			]
		},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{
			"elementType": "labels"
		},
		{
			"featureType": "poi.sports_complex",
			"stylers": [
				{
					"color": "#9e5916"
				},
				{
					"lightness": 32
				}
			]
		},
		{},
		{
			"featureType": "poi.government",
			"stylers": [
				{
					"color": "#9e5916"
				},
				{
					"lightness": 46
				}
			]
		},
		{
			"featureType": "transit.station",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit.line",
			"stylers": [
				{
					"color": "#813033"
				},
				{
					"lightness": 22
				}
			]
		},
		{
			"featureType": "transit",
			"stylers": [
				{
					"lightness": 38
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#f19f53"
				},
				{
					"lightness": -10
				}
			]
		},
		{},
		{},
		{}
	];

	map.setOptions({ style: style })

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