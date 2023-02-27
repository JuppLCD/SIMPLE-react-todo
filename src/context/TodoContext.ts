import { createContext } from 'react';

import type { ChangeEvent, FormEvent } from 'react';
import type { Todo } from '../types/Todo.interface';

export type TodoContextType = {
	todos: Todo[];
	loading: boolean;
	edit: boolean;
	todoToEdit: Todo | {};
	onSubmit: (e: FormEvent<HTMLFormElement>, newTodoValue: string) => void;
	handelSubmitTodoEdited: (e: FormEvent<HTMLFormElement>, todoToEdit: Todo) => void;
	onChangeChexbox: (id: string) => void;
	deleteTodo: (id: string) => void;
	handelInputEditTodo: (e: ChangeEvent<HTMLInputElement>) => void;
	editTodoValue: (id: string) => void;
	closeEditTodo: () => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default TodoContext;
