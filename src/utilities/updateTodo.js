import { url } from "./../config";
export const updateTodo = async (id, todo) => {
	const todoModificate = { text: todo.text, completed: todo.completed };
	const infoMethod = {
		method: "PUT",
		body: JSON.stringify(todoModificate),
		headers: { "Content-Type": "application/json" },
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
