var app = app || {};
var TodoController = TodoController || {};

(function () {
	'use strict';

	var Utils = app.Utils;

	TodoController = function (model) {
		this.model = model;
	};

	TodoController.prototype.addTodo = function (title) {
		console.log(title)
		this.model.addTodo(title);
	};

	TodoController.prototype.toggleAll = function (checked) {

		this.model.toggleAll(checked);
	};

	TodoController.prototype.toggle = function (todoToToggle) {
		this.model.toggle(todoToToggle);
	};

	TodoController.prototype.destroy = function (todo) {
		this.model.destroy(todo);
	};

	TodoController.prototype.save = function (todoToSave, text) {
		this.model.save(todoToSave, text);
	};

	TodoController.prototype.clearCompleted = function () {
		this.model.clearCompleted();
	};

})();
