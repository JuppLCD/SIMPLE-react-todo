import { useState } from "react";

import { Button } from "../Button/Button";

import "./styles.css";
export function FormTodo({ onSubmit }) {
	const [newTodoValue, setNewTodoValue] = useState("");

	const handelInputTodo = (e) => {
		setNewTodoValue(e.target.value);
	};
	return (
		<>
			<form className="form-newTodo" onSubmit={(e) => onSubmit(e, newTodoValue)}>
				<div>
					<label htmlFor="createTodo">New ToDo</label>
					<div className="form-group">
						<input id="createTodo" placeholder="Write you ToDo..." value={newTodoValue} onChange={handelInputTodo} />
						<Button clickFuntion={() => setNewTodoValue("")} classBtn={"btn-reset"}>
							Reset
						</Button>
					</div>
				</div>

				<Button classBtn={"btn-add"} typeBtn="submit">
					Add
				</Button>
			</form>
		</>
	);
}
