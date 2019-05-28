import TodoService from "./TodoService.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todos
	let template = ''
	for (let i = 0; i < todos.length; i++) {
		let todo = todos[i];
		template += todo.Template
	}
	document.querySelector('#todos').innerHTML = template
}

function _drawTodoForm() {
	document.querySelector('#form-content').innerHTML = `
	<div class="form-group">
		<div class="input-group mb-3">
			<input type="text" class="form-control" name="description" placeholder="Your ToDo" required>
			<div class="input-group-append">
				<button class="btn btn-success" type="submit">Add ToDo</button>
			</div>
		</div>
	</div>
	`
}


function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)

		_todoService.getTodos()

		_drawTodoForm()
	}


	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			description: form.description.value
		}
		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}



}
