var _todos = {};
var _callbacks = [];

var TodoStore = {
	changed: function () {
		_callbacks.forEach(function (handler) {
			handler();
		});
	},

	addChangeHandler: function (handler) {
		_callbacks.push(handler);
	},

	removeChangeHandler: function (handler) {
		for (var i = 0; i < _callbacks.length; i++) {
			if (_callbacks[i] === handler) {
				_callbacks.splice(i, 1);
				return;
			}
		}
	},

	all: function () {
		var todos = [];
		for (var id in _todos) {
			if (_todos.hasOwnProperty(id)) {
				todos.push(_todos[id]);
			}
		}
		return todos;
	},

	find: function (id) {
		return _todos[id];
	},

	destroy: function (id) {
		var target = this.find(id);
		if (target) {
			delete _todos.id;
		}
	},

	fetch: function() {
		$.ajax({
			type: "GET",
			url: "/api/todos",
			dataType: "json",
			success: function(todos) {
				_todos = {};
				todos.forEach(function(todo) {
					_todos[todo.id] = todo;
				});

				TodoStore.changed();
			},
			error: function() {
				console.log("TodoStore#fetch error!");
			}
		});
	},

	toggleDone: function(id) {
		var that = this;
		debugger
		$.ajax({
			type: "PATCH",
			url: "api/todos/" + id,
			dataType: "json",
			data: {todos: {done: !_todos[id].done}},
			success: function (todo) {
				_todos[todo.id] = todo;
				TodoStore.changed();
			},

			error: function() {
					console.log("TodoStore#toggleDone error!");
			}
		});
	}
};

module.exports = TodoStore;
