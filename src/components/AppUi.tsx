import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

import FormTodo from './FormTodo';
import TodoItem from './TodoItem';
import EditTodoComponent from './EditTodoComponent';
import TodoList from './TodoList';
import Loading from './Loading';

import type { TodoContextType } from '../context/TodoContext';

export default function AppUi() {
	const {
		todos,
		onSubmit,
		onChangeChexbox,
		BorrarTodo,
		handelSubmitForm,
		btnEditTodoValue,
		todoToEdit,
		setTodoToEdit,
		edit,
		setEdit,
		loading,
	} = useContext(TodoContext) as TodoContextType;
	return (
		<>
			<header className='header'>
				<h1> ToDo React </h1>
			</header>
			<div className='conteiner'>
				<div className='conteiner-todo'>
					<FormTodo onSubmit={onSubmit} />
					{edit && (
						<EditTodoComponent
							todoToEdit={todoToEdit}
							setEdit={setEdit}
							setTodoToEdit={setTodoToEdit}
							handelSubmitForm={handelSubmitForm}
						/>
					)}
					<div className='subtitle'>
						<h2>Your ToDos:</h2>
						{todos.length === 0 && <p>Create your ToDo ...</p>}
					</div>
					{loading && <Loading />}
					<TodoList>
						{todos.map((todo) => (
							<TodoItem
								key={todo._id}
								todo={todo}
								BorrarTodo={BorrarTodo}
								onChangeChexbox={onChangeChexbox}
								btnEditTodoValue={btnEditTodoValue}
							/>
						))}
					</TodoList>
				</div>
			</div>
		</>
	);
}
