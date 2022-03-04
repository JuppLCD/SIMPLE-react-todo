import { Button } from "../Button/Button";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

import "./styles.css";
export function TodoItem({ todo, BorrarTodo, onChangeChexbox, btnEditTodoValue }) {
	const { text, completed, _id } = todo;
	return (
		<li className="TodoItem">
			<input type="checkbox" id={`checkbox-${_id}`} defaultChecked={completed} onChange={() => onChangeChexbox(_id)} />
			<label htmlFor={`checkbox-${_id}`} className={`TodoItem-text ${completed && "TodoItem-text--complete"}`}>
				<span className={`TodoItem-Icon ${completed && "TodoItem-Icon--complete"}`}>
					<AiOutlineCheckCircle />
				</span>
				{text}
			</label>
			<div className="TodoItem-btns">
				<Button classBtn={"btn-edit"} clickFuntion={() => btnEditTodoValue(_id)}>
					<AiOutlineEdit />
				</Button>
				<Button classBtn={"btn-delete"} clickFuntion={() => BorrarTodo(_id)}>
					<AiFillDelete />
				</Button>
			</div>
		</li>
	);
}
