$(document).ready(function () {

	let screenWidth = window.innerWidth;
	console.log(screenWidth);

	let style = [
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#444444"
				}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ff0000"
				}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "administrative.province",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative.province",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative.neighborhood",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
				{
					"color": "#f2f2f2"
				}
			]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#f7a50b"
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ff0000"
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#da8900"
				}
			]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 45
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ff8a00"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"color": "#f2ba40"
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		}
	]

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
		zoom: 5,
		styles: style

	});


	//	map.setOptions({ style: style })

	if (screenWidth < 768) {
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
			},

			// FIN DE FONCTION OUVERTURE FICHE RESTAURANT
		});
	} else {
		map.addMarker({
			lat: 45.74627029999999,
			lng: 4.826846799999998,
			title: 'Restaurant Atypique Lyon',
			// AFFICHAGE D'UNE TOOLTIP SUR ECRAN PORTABLE
			infoWindow: {
				content: '<h3>' + lyon.nom + '</h3><p>' + lyon.description + '</p><p>' + lyon.adresse + '</p><p>' + lyon.horaires + '</p><p>' + lyon.contact + '</p>'
			},
		});
	}

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
		},

		// FIN DE FONCTION OUVERTURE FICHE RESTAURANT
	});
});