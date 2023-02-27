import Button from '../Button';

import styles from './EditTodo.module.css';

import type { Todo } from '../../types/Todo.interface';
import type { FormEvent, ChangeEvent } from 'react';

interface Props {
	todoToEdit: Todo | {};
	handelSubmitTodoEdited: (e: FormEvent<HTMLFormElement>, todoToEdit: Todo) => void;
	handelInputEditTodo: (e: ChangeEvent<HTMLInputElement>) => void;
	closeEditTodo: () => void;
}

export default function EditTodoComponent({
	todoToEdit,
	handelInputEditTodo,
	closeEditTodo,
	handelSubmitTodoEdited,
}: Props) {
	return (
		<form className={styles['formEdit']} onSubmit={(e) => handelSubmitTodoEdited(e, todoToEdit as Todo)}>
			<div className={styles['formEdit-group']}>
				<label htmlFor='editTodo'>ToDo to Edit</label>
				<input
					id='editTodo'
					autoFocus
					placeholder='Edit you ToDo'
					value={(todoToEdit as Todo).text}
					onChange={handelInputEditTodo}
				/>
			</div>
			<div className={styles['formEdit-btnContainer']}>
				<Button className='btn-edit' type='submit'>
					Edit
				</Button>
				<Button className='btn-delete' onClick={closeEditTodo}>
					Cancel
				</Button>
			</div>
		</form>
	);
}
