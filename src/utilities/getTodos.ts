import { url } from '../config';
export const getTodos = async () => {
	try {
		const res = await fetch(`${url}/allTodos`);
		const data = await res.json();
		return data;
	} catch (e) {
		console.error(e);
		return { error: true };
	}
};
