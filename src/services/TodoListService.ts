import {
	TODO_LIST_REPLACE_PARAMS,
	TODO_LIST_ROUTE_DELETE,
	TODO_LIST_ROUTE_GET_ALL,
	TODO_LIST_ROUTE_NEW,
	TODO_LIST_ROUTE_UPDATE,
} from '../config';

import replacePramasFromUrl from '../utilities/replacePramasFromUrl';

import type { Todo } from '../types/Todo.interface';

export default class TodoListService {
	getTodos = async () => {
		const url = TODO_LIST_ROUTE_GET_ALL;

		try {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		} catch (e) {
			console.error(e);
			return { error: true };
		}
	};

	newTodo = async (newTodoValue: string) => {
		const url = TODO_LIST_ROUTE_NEW;

		const createTodo = { text: newTodoValue };
		const infoMethod = {
			method: 'POST',
			body: JSON.stringify(createTodo),
			headers: { 'Content-Type': 'application/json' },
		};

		try {
			const res = await fetch(url, infoMethod);
			const data = await res.json();
			return data;
		} catch (e) {
			console.error(e);
			return { error: true };
		}
	};

	updateTodo = async (todoId: string, todo: Todo) => {
		const url = replacePramasFromUrl(TODO_LIST_ROUTE_UPDATE, { [todoId]: TODO_LIST_REPLACE_PARAMS.todoId });

		const todoModificate = { text: todo.text, completed: todo.completed };
		const infoMethod = {
			method: 'PUT',
			body: JSON.stringify(todoModificate),
			headers: { 'Content-Type': 'application/json' },
		};
		try {
			const res = await fetch(url, infoMethod);
			const message = await res.json();
			return message;
		} catch (e) {
			console.error(e);
			return { error: true };
		}
	};

	deleteTodo = async (todoId: string) => {
		try {
			const url = replacePramasFromUrl(TODO_LIST_ROUTE_DELETE, { [todoId]: TODO_LIST_REPLACE_PARAMS.todoId });

			const res = await fetch(url, {
				method: 'DELETE',
			});
			const mensage = await res.json();
			return mensage;
		} catch (e) {
			console.error(e);
			return { error: true };
		}
	};
}
