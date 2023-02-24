import { useEffect, useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

import TodoContext from './TodoContext';

import { getTodos } from '../utilities/getTodos';
import { updateTodo } from '../utilities/updateTodo';
import { deleteTodo } from '../utilities/deleteTodo';
import { newTodo } from '../utilities/newTodo';

import type { FormEvent } from 'react';
import type { Todo } from '../types/Todo.interface';

export default function TodoProvider({ children }: { children: JSX.Element }) {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [renderAgain, setrenderAgain] = useState(false);
	const [todoToEdit, setTodoToEdit] = useState<Todo | {}>({});
	const [edit, setEdit] = useState(false);
	const [loading, setloading] = useState(false);

	useEffect(() => {
		(async () => {
			setloading(true);
			const data = await getTodos();
			if (data.error) {
				toast.error('Error getting ToDos');
				setloading(false);

				return;
			}
			setTodos(data);
			setloading(false);
		})();
	}, [renderAgain]);

	// New Todo
	const onSubmit = async (e: FormEvent<HTMLFormElement>, newTodoValue: string) => {
		e.preventDefault();
		setloading(true);
		const todo = await newTodo(newTodoValue);
		if (todo.error) {
			toast.error('Error creating ToDo');
			setloading(false);
			return;
		}
		toast.success('Successful action');
		setTodos((prevTodos) => {
			return [...prevTodos, todo];
		});
		setloading(false);
		setrenderAgain(!renderAgain);
	};
	// Delete Todo
	const BorrarTodo = async (id: string) => {
		const menssage = await deleteTodo(id);
		if (!menssage.deleted || menssage.error) {
			toast.error('Error to delete ToDo');
			return;
		}
		toast.success('Successful action');

		const todosNotDelete = todos.filter((todo) => todo._id !== id);
		setTodos(todosNotDelete);
	};
	// EditCompletedTodo
	const onChangeChexbox = async (id: string) => {
		// Mofificate completed todo
		const indexTodo = todos.findIndex((todo) => todo._id === id);
		const newtodos = [...todos];
		const todoMofificado = newtodos[indexTodo];
		todoMofificado.completed = !todoMofificado.completed;

		// Put Todo
		const menssage = await updateTodo(id, todoMofificado);
		if (!menssage.edited || menssage.error) {
			todoMofificado.completed = !todoMofificado.completed;
			toast.error('Error to modificate ToDo');
			return;
		}
		toast.success('Successful action');

		setTodos(newtodos);
	};
	// EditTextTodo
	const handelSubmitForm = async (e: FormEvent<HTMLFormElement>, todoToEdit: Todo) => {
		e.preventDefault();
		if (todoToEdit.text === '') {
			return;
		}
		const menssage = await updateTodo(todoToEdit._id, todoToEdit);
		if (!menssage.edited || menssage.error) {
			toast.error('Error to modificate ToDo');
			return;
		}
		toast.success('Successful action');
		const indexTodo = todos.findIndex((todo) => todo._id === todoToEdit._id);
		const newtodos = [...todos];
		newtodos[indexTodo] = todoToEdit;
		setEdit(false);
		setTodos(newtodos);
	};
	const btnEditTodoValue = (id: string) => {
		const todoToEditValue = todos.filter((todo) => todo._id === id)[0];
		setTodoToEdit(todoToEditValue);
		setEdit(true);
	};

	const valueProvider = {
		todos,
		loading,
		edit,
		todoToEdit,
		onSubmit,
		handelSubmitForm,
		onChangeChexbox,
		BorrarTodo,
		btnEditTodoValue,
		setTodoToEdit,
		setEdit,
	};

	return (
		<TodoContext.Provider value={valueProvider}>
			{children}
			<Toaster position='top-center' />
		</TodoContext.Provider>
	);
}
