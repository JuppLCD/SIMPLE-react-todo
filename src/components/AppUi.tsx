import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

import FormTodo from './FormTodo';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';
import TodoList from './TodoList';
import Loading from './Loading';

import type { TodoContextType } from '../context/TodoContext';

export default function AppUi() {
	const {
		todos,
		onSubmit,
		onChangeChexbox,
		deleteTodo,
		handelSubmitTodoEdited,
		editTodoValue,
		todoToEdit,
		handelInputEditTodo,
		edit,
		closeEditTodo,
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
						<EditTodo
							todoToEdit={todoToEdit}
							closeEditTodo={closeEditTodo}
							handelInputEditTodo={handelInputEditTodo}
							handelSubmitTodoEdited={handelSubmitTodoEdited}
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
								deleteTodo={deleteTodo}
								onChangeChexbox={onChangeChexbox}
								editTodoValue={editTodoValue}
							/>
						))}
					</TodoList>
				</div>
			</div>
		</>
	);
}
