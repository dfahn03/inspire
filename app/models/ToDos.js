

export default class ToDo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = data.completed
  }

  get Template() {
    return `
    <div class="input-group my-1">
			<div class="input-group-prepend">
				<div class="input-group-text checks">
					<input type="checkbox"  ${this.completed ? "checked" : ""} onchange="app.controllers.todoController.toggleTodoStatus('${this._id}')">
				</div>
			</div>
      <p class=" pt-2 ${this.completed ? 'strike' : ""}">${this.description}</p>
      <i class="far fa-trash-alt d-flex justify-content-center align-items-center ml-2" onclick="app.controllers.todoController.removeTodo('${this._id}')"></i>
		</div>
    `
  }
}