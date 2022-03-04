import { url } from "./../config";
export const deleteTodo = async (id) => {
	try {
		const res = await fetch(`${url}/deleteTodo/${id}`, {
			method: "DELETE",
		});
		const mensage = await res.json();
		return mensage;
	} catch (e) {
		console.error(e);
		return { error: true };
	}
};
