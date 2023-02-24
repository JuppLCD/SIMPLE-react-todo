import { useState } from 'react';

import Button from './../Button';

import './styles.css';

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
			<form className='form-newTodo' onSubmit={(e) => onSubmit(e, newTodoValue)}>
				<div>
					<label htmlFor='createTodo'>New ToDo</label>
					<div className='form-group'>
						<input id='createTodo' placeholder='Write you ToDo...' value={newTodoValue} onChange={handelInputTodo} />
						<Button clickFuntion={() => setNewTodoValue('')} classBtn={'btn-reset'}>
							Reset
						</Button>
					</div>
				</div>

				<Button classBtn={'btn-add'} typeBtn='submit'>
					Add
				</Button>
			</form>
		</>
	);
}
