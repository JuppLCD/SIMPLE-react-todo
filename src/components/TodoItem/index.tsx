import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import Button from '../Button';

import styles from './TodoItem.module.css';

import type { Todo } from './../../types/Todo.interface';

interface Props {
	todo: Todo;
	deleteTodo: (id: string) => void;
	onChangeChexbox: (id: string) => void;
	editTodoValue: (id: string) => void;
}
export default function TodoItem({ todo, deleteTodo, onChangeChexbox, editTodoValue }: Props) {
	const { text, completed, _id } = todo;
	return (
		<li className={styles.TodoItem}>
			<input type='checkbox' id={`checkbox-${_id}`} defaultChecked={completed} onChange={() => onChangeChexbox(_id)} />
			<label
				htmlFor={`checkbox-${_id}`}
				className={`${styles['TodoItem-text']} ${completed && styles['TodoItem-text--complete']}`}
			>
				<span className={`${styles['TodoItem-Icon']} ${completed && styles['TodoItem-Icon--complete']}`}>
					<AiOutlineCheckCircle />
				</span>
				{text}
			</label>
			<div className={styles['TodoItem-btns']}>
				<Button className={'btn-edit'} onClick={() => editTodoValue(_id)}>
					<AiOutlineEdit />
				</Button>
				<Button className={'btn-delete'} onClick={() => deleteTodo(_id)}>
					<AiFillDelete />
				</Button>
			</div>
		</li>
	);
}
