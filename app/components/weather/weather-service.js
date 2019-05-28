import Weather from "../../models/Weather.js";

//PRIVATE
let _weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {}
}

let _subscribers = {
	weather: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

//PUBLIC
export default class WeatherService {
	get Weather() {
		return _state.weather
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}


	getWeather() {
		_weatherApi.get().then(res => {
			_setState('weather', new Weather(res.data))
		})
	}
}
