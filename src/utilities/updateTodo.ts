import { url } from '../config';

import type { Todo } from '../types/Todo.interface';

export const updateTodo = async (id: string, todo: Todo) => {
	const todoModificate = { text: todo.text, completed: todo.completed };
	const infoMethod = {
		method: 'PUT',
		body: JSON.stringify(todoModificate),
		headers: { 'Content-Type': 'application/json' },
	};
	try {
		const res = await fetch(`${url}/updateTodo/${id}`, infoMethod);
		const message = await res.json();
		return message;
	} catch (e) {
		console.error(e);
		return { error: true };
	}
};
