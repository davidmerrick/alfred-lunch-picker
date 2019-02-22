const alfy = require('alfy');
const fs = require('fs');

const RESTAURANTS_FILE = "restaurants.json";

fs.readFile(RESTAURANTS_FILE, 'utf8', (err, data) => {
	let restaurants = JSON.parse(data);
	
	let index = Math.floor(Math.random() * restaurants.length);
	let randomPlace = restaurants[index];
	
	alfy.output([
		{
			title: randomPlace.name,
			subtitle: "Order food from " + randomPlace.name,
			arg: randomPlace.url
		}
	]);
});

