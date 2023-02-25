export const URL_BACKEND: string = import.meta.env.VITE_HOST_BAKEND;

export const TODO_LIST_REPLACE_PARAMS = {
	todoId: '{:todoId}',
};

//  Paths to TodoList
export const TODO_LIST_ROUTE_GET_ALL = `${URL_BACKEND}/allTodos`;
export const TODO_LIST_ROUTE_NEW = `${URL_BACKEND}/newTodo`;
export const TODO_LIST_ROUTE_UPDATE = `${URL_BACKEND}/updateTodo/{:todoId}`;
export const TODO_LIST_ROUTE_DELETE = `${URL_BACKEND}/deleteTodo/{:todoId}`;
