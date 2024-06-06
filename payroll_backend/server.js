// // Function to initialize the map
// function initMap() {
//     // Check if geolocation is supported
//     if (navigator.geolocation) {
//         // Get user's current location
//         navigator.geolocation.getCurrentPosition(position => {
//             const userLatLng = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };

//             // Initialize map centered at user's current location
//             const map = new google.maps.Map(document.getElementById('map'), {
//                 center: userLatLng,
//                 zoom: 10
//             });

//             // Create a red marker icon
//             const redMarkerIcon = {
//                 url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // URL of the red marker icon
//                 scaledSize: new google.maps.Size(32, 32) // Size of the marker icon
//             };

//             // Add a marker for the user's current location
//             new google.maps.Marker({
//                 position: userLatLng,
//                 map: map,
//                 icon: redMarkerIcon, // Use the red marker icon
//                 title: 'Your Location'
//             });

//             // Example marker data (replace with actual data)
//             const tourismPlaces = [
//                 { name: 'Place 1', location: { lat: 59.855685, lng: 38.364285 } },
//                 { name: 'Place 2', location: { lat: 59.85, lng: 38.37 } },
//                 // Add more places as needed
//             ];

//             // Add markers for tourism places
//             tourismPlaces.forEach(place => {
//                 new google.maps.Marker({
//                     position: place.location,
//                     map: map,
//                     title: place.name
//                 });
//             });
//         }, error => {
//             console.error('Error getting user location:', error);
//         });
//     } else {
//         console.error('Geolocation is not supported by this browser.');
//     }
// }
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'opentripmap-places-v1.p.rapidapi.com',
	port: null,
	path: '/%7Blang%7D/places/geoname?name=London',
	headers: {
		'X-RapidAPI-Key': '05e6b8edccmsh7ef028db4983267p1abf89jsnc05651039ac0',
		'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();