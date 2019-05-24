import Quote from "../../models/Quotes.js";

//PRIVATE
// @ts-ignore
let _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: {}
}

let _subscribers = {
	quotes: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}


//PUBLIC
export default class QuoteService {
	constructor() { }

	addSubscribers(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get Quotes() {
		return _state.quotes
	}

	getApiQuotes() {
		_quoteApi.get()
			.then(res => {
				let quote = new Quote(res.data.quote)
				_setState('quotes', quote)
			})
	}



}
