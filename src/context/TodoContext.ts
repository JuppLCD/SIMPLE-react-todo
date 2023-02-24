import { createContext } from 'react';

import type { Dispatch, FormEvent } from 'react';
import type { Todo } from '../types/Todo.interface';

export type TodoContextType = {
	todos: Todo[];
	loading: boolean;
	edit: boolean;
	todoToEdit: Todo | {};
	onSubmit: (e: FormEvent<HTMLFormElement>, newTodoValue: string) => void;
	handelSubmitForm: (e: FormEvent<HTMLFormElement>, todoToEdit: Todo) => void;
	onChangeChexbox: (id: string) => void;
	BorrarTodo: (id: string) => void;
	btnEditTodoValue: (id: string) => void;
	setTodoToEdit: Dispatch<React.SetStateAction<{} | Todo>>;
	setEdit: Dispatch<React.SetStateAction<boolean>>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default TodoContext;
