const request = require('request');
const argv = require('minimist')(process.argv.slice(2));

let apiKey = '918ede7f348b9717944a2663f7f58958';
let city = argv.c||'portland';  
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
	console.log('error:', error);
  } else {
	let weather = JSON.parse(body)
	let message = `It is ${weather.main.temp} degress in ${weather.name} !! `;
	console.log(message);
  }
});

