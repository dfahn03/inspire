import WeatherService from "./weather-service.js";

//PRIVATE
var _weatherService = new WeatherService()

function drawWeather() {
	let weather = _weatherService.Weather
	let template = weather.Template
	document.querySelector('#weather').innerHTML = template
}


//PUBLIC
export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)

		_weatherService.getWeather()
	}

}
