var React = require("react");
var ReactDOM = require("react-dom");

var TodoList = require('./components/todo_list.jsx');

$(document).ready(function(e) {
	ReactDOM.render(
		<TodoList />,
		$("main")[0]
	);
});
