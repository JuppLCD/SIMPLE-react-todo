import { useState } from 'react';

import Button from './../Button';

import styles from './FormTodo.module.css';

import type { FormEvent, ChangeEvent } from 'react';

interface Props {
	onSubmit: (e: FormEvent<HTMLFormElement>, newTodoValue: string) => void;
}

export default function FormTodo({ onSubmit }: Props) {
	const [newTodoValue, setNewTodoValue] = useState('');

	const handelInputTodo = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodoValue(e.target.value);
	};
	return (
		<>
			<form className={styles['form-newTodo']} onSubmit={(e) => onSubmit(e, newTodoValue)}>
				<div>
					<label htmlFor='createTodo'>New ToDo</label>
					<div className={styles['form-group']}>
						<input id='createTodo' placeholder='Write you ToDo...' value={newTodoValue} onChange={handelInputTodo} />
						<Button onClick={() => setNewTodoValue('')} className={`${styles['btn-reset']} btn-reset`} type='reset'>
							Reset
						</Button>
					</div>
				</div>

				<Button className={'btn-add'} type='submit'>
					Add
				</Button>
			</form>
		</>
	);
}
