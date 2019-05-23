import Image from "../../models/images.js";

// @ts-ignore
let _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}
export default class ImageService {
	constructor() { }

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get ApiImage() {
		return new Image(_state.image)
	}

	getAllImages() {
		_imgApi.get()
			.then(res => {
				let image = new Image(res.data)
				_setState('image', image)
			})
	}

}
