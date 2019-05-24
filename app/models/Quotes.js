

export default class Quote {
  constructor(data) {
    this.body = data.body
    this.author = data.author
  }

  get Template() {
    return `
    <div class="jumbotron">
			<div class="container">
				<h5 class="display-4 quotes">"${this.body}"</h5>
				<h6 class="lead float-right mr-5 quotes">-${this.author}</h6>
			</div>
		</div>
    
    `
  }
}