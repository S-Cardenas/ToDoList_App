var React = require("react");
var TodoStore = require("./../stores/todo_store.js");

var TodoList = React.createClass({

	getInitialState: function() {
		return { todos: []};
	},

	componentDidMount: function () {
		TodoStore.addChangeHandler(this.setStateFromStore);
		TodoStore.fetch();
	},

	setStateFromStore: function () {
		this.setState({todos: TodoStore.all()});
	},

	render: function() {
		var todoItems = this.state.todos.map(function(todo, i) {
			return (
				<li key={i}>{ todo.title } : {todo.body}</li>
			);
		});
		return (
			<div>
				<ul>
					{todoItems}
				</ul>
			</div>
		);
	}

});

module.exports = TodoList;
