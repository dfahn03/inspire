

export default class Quote {
  constructor(data) {
    this.body = data.body
    this.author = data.author
  }

  get Template() {
    return `
				<h5 class="quotes">"${this.body}"</h5>
        <h6 class="lead quotes float-right mr-5">-${this.author}</h6>
    `
  }
}