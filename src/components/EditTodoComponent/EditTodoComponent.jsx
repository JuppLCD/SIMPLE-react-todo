import { Button } from "../Button/Button";

import "./styles.css";
export function EditTodoComponent({ todoToEdit, setTodoToEdit, setEdit, handelSubmitForm }) {
	const handelInputTodo = (e) => {
		setTodoToEdit((prev) => ({ ...todoToEdit, text: e.target.value }));
	};
	return (
		<form className="formEdit" onSubmit={(e) => handelSubmitForm(e, todoToEdit)}>
			<div className="formEdit-group">
				<label htmlFor="editTodo">ToDo to Edit</label>
				<input id="editTodo" autoFocus placeholder="Edit you ToDo" value={todoToEdit.text} onChange={handelInputTodo} />
			</div>
			<div className="formEdit-btnContainer">
				<Button classBtn={"btn-edit"} typeBtn="submit">
					Edit
				</Button>
				<Button classBtn={"btn-delete"} clickFuntion={() => setEdit(false)}>
					Cancel
				</Button>
			</div>
		</form>
	);
}
