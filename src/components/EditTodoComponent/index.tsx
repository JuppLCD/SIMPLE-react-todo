import Button from '../Button';

import './styles.css';

import type { Todo } from '../../types/Todo.interface';
import type { Dispatch, FormEvent, ChangeEventHandler, ChangeEvent } from 'react';

interface Props {
	todoToEdit: Todo | {};
	handelSubmitForm: (e: FormEvent<HTMLFormElement>, todoToEdit: Todo) => void;
	setTodoToEdit: Dispatch<React.SetStateAction<{} | Todo>>;
	setEdit: Dispatch<React.SetStateAction<boolean>>;
}
export default function EditTodoComponent({ todoToEdit, setTodoToEdit, setEdit, handelSubmitForm }: Props) {
	const handelInputTodo = (e: ChangeEvent<HTMLInputElement>) => {
		setTodoToEdit((prev) => ({ ...todoToEdit, text: e.target.value }));
	};
	return (
		<form className='formEdit' onSubmit={(e) => handelSubmitForm(e, todoToEdit as Todo)}>
			<div className='formEdit-group'>
				<label htmlFor='editTodo'>ToDo to Edit</label>
				<input
					id='editTodo'
					autoFocus
					placeholder='Edit you ToDo'
					value={(todoToEdit as Todo).text}
					onChange={handelInputTodo}
				/>
			</div>
			<div className='formEdit-btnContainer'>
				<Button classBtn={'btn-edit'} typeBtn='submit'>
					Edit
				</Button>
				<Button classBtn={'btn-delete'} clickFuntion={() => setEdit(false)}>
					Cancel
				</Button>
			</div>
		</form>
	);
}
