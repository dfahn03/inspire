

export default class Quote {
  constructor(data) {
    this.body = data.body
    this.author = data.author
  }

  get Template() {
    return `
				<h5 class="quotes">"${this.body}"</h5>
				<h6 class="float-right mr-5 quotes">-${this.author}</h6>
    
    `
  }
}