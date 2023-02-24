import { url } from '../config';
export const newTodo = async (newTodoValue: string) => {
	const createTodo = { text: newTodoValue };
	const infoMethod = {
		method: 'POST',
		body: JSON.stringify(createTodo),
		headers: { 'Content-Type': 'application/json' },
	};
	try {
		const res = await fetch(url + '/newTodo', infoMethod);
		const data = await res.json();
		return data;
	} catch (e) {
		console.error(e);
		return { error: true };
	}
};
