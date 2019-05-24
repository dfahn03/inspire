import QuoteService from "./QuoteService.js";

//PRIVATE
let _qs = new QuoteService()

function _drawApiQuote() {
  let quotes = _qs.Quotes
  let template = quotes.Template
  document.querySelector('#quote').innerHTML = template
}



//PUBLIC
export default class QuoteController {
  constructor() {
    _qs.addSubscribers('quotes', _drawApiQuote)

    _qs.getApiQuotes()
  }
}
