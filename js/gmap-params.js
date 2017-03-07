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

	let orleans = {
		nom: 'Restaurant Atypique Orléans',
		adresse: '1 Avenue du champ de Mars<br>45100 Orléans',
		description: 'Lorem ipsum dolor sit amet...',
		horaires: 'Du mardi au dimanche de 12h30 à 23h30',
		contact: '01 23 45 89 67'
	}

	let fontainebleau = {
		nom: 'Restaurant Atypique Fontainebleau',
		adresse: '35 rue Saint Honoré<br>77300 Fontainebleau',
		description: 'Lorem ipsum dolor sit amet...',
		horaires: 'Du mardi au dimanche de 12h30 à 23h30',
		contact: '01 23 45 89 67'
	}

	let bordeaux = {
		nom: 'Restaurant Atypique Bordeaux',
		adresse: '15 Place Canteloup<br>33800 Bordeaux',
		description: 'Lorem ipsum dolor sit amet...',
		horaires: 'Du mardi au dimanche de 12h30 à 23h30',
		contact: '01 23 45 89 67'
	}

	let toulouse = {
		nom: 'Restaurant Atypique Toulouse',
		adresse: '1 Place de la Bourse, 31000 Toulouse',
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

	if (screenWidth < 768) {
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
	} else {
		map.addMarker({
			lat: 48.473369,
			lng: 1.011731,
			title: 'Restaurant Atypique La Loupe',
			// AFFICHAGE D'UNE TOOLTIP SUR ECRAN PORTABLE
			infoWindow: {
				content: '<h3>' + laLoupe.nom + '</h3><p>' + laLoupe.description + '</p><p>' + laLoupe.adresse + '</p><p>' + laLoupe.horaires + '</p><p>' + laLoupe.contact + '</p>'
			},
		});
	}

	if (screenWidth < 768) {
		map.addMarker({
			lat: 47.89387010000001,
			lng: 1.8941995000000134,
			title: 'Restaurant Atypique Orléans',
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

				$('.ficheRestaurant h3').text(orleans.nom);
				$('.restaurantDescription').html(orleans.description);
				$('.restaurantAdresse').html(orleans.adresse);
				$('.restaurantHoraire').html(orleans.horaires);
				$('.restaurantContact').html(orleans.contact);
			},

			// FIN DE FONCTION OUVERTURE FICHE RESTAURANT
		});
	} else {
		map.addMarker({
			lat: 47.89387010000001,
			lng: 1.8941995000000134,
			title: 'Restaurant Atypique Orléans',
			// AFFICHAGE D'UNE TOOLTIP SUR ECRAN PORTABLE
			infoWindow: {
				content: '<h3>' + orleans.nom + '</h3><p>' + orleans.description + '</p><p>' + orleans.adresse + '</p><p>' + orleans.horaires + '</p><p>' + orleans.contact + '</p>'
			},
		});
	}

	if (screenWidth < 768) {
		map.addMarker({
			lat: 48.4037414,
			lng: 2.694321299999956,
			title: 'Restaurant Atypique Fontainebleau',
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

				$('.ficheRestaurant h3').text(fontainebleau.nom);
				$('.restaurantDescription').html(fontainebleau.description);
				$('.restaurantAdresse').html(fontainebleau.adresse);
				$('.restaurantHoraire').html(fontainebleau.horaires);
				$('.restaurantContact').html(fontainebleau.contact);
			},

			// FIN DE FONCTION OUVERTURE FICHE RESTAURANT
		});
	} else {
		map.addMarker({
			lat: 48.4037414,
			lng: 2.694321299999956,
			title: 'Restaurant Atypique Fontainebleau',
			// AFFICHAGE D'UNE TOOLTIP SUR ECRAN PORTABLE
			infoWindow: {
				content: '<h3>' + fontainebleau.nom + '</h3><p>' + fontainebleau.description + '</p><p>' + fontainebleau.adresse + '</p><p>' + fontainebleau.horaires + '</p><p>' + fontainebleau.contact + '</p>'
			},
		});
	}

	if (screenWidth < 768) {
		map.addMarker({
			lat: 44.8336476,
			lng: -0.5660190999999486,
			title: 'Restaurant Atypique Bordeaux',
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

				$('.ficheRestaurant h3').text(bordeaux.nom);
				$('.restaurantDescription').html(bordeaux.description);
				$('.restaurantAdresse').html(bordeaux.adresse);
				$('.restaurantHoraire').html(bordeaux.horaires);
				$('.restaurantContact').html(bordeaux.contact);
			},

			// FIN DE FONCTION OUVERTURE FICHE RESTAURANT
		});
	} else {
		map.addMarker({
			lat: 44.8336476,
			lng: -0.5660190999999486,
			title: 'Restaurant Atypique Bordeaux',
			// AFFICHAGE D'UNE TOOLTIP SUR ECRAN PORTABLE
			infoWindow: {
				content: '<h3>' + bordeaux.nom + '</h3><p>' + bordeaux.description + '</p><p>' + bordeaux.adresse + '</p><p>' + bordeaux.horaires + '</p><p>' + bordeaux.contact + '</p>'
			},
		});
	}

	if (screenWidth < 768) {
		map.addMarker({
			lat: 43.6015191,
			lng: 1.4420288000000028,
			title: 'Restaurant Atypique Toulouse',
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

				$('.ficheRestaurant h3').text(toulouse.nom);
				$('.restaurantDescription').html(toulouse.description);
				$('.restaurantAdresse').html(toulouse.adresse);
				$('.restaurantHoraire').html(toulouse.horaires);
				$('.restaurantContact').html(toulouse.contact);
			},

			// FIN DE FONCTION OUVERTURE FICHE RESTAURANT
		});
	} else {
		map.addMarker({
			lat: 43.6015191,
			lng: 1.4420288000000028,
			title: 'Restaurant Atypique Toulouse',
			// AFFICHAGE D'UNE TOOLTIP SUR ECRAN PORTABLE
			infoWindow: {
				content: '<h3>' + toulouse.nom + '</h3><p>' + toulouse.description + '</p><p>' + toulouse.adresse + '</p><p>' + toulouse.horaires + '</p><p>' + toulouse.contact + '</p>'
			},
		});
	}

	// fermeture de $(document).ready
});