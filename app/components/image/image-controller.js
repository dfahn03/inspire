import ImageService from "./image-service.js";

let _is = new ImageService()

function _drawImages() {
  document.querySelector('#bg-image').style.backgroundImage = `url('${_is.ApiImage.url}')`
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImages)


    _is.getAllImages()
  }

}

