import { url } from './index';

export const TODO_LIST_REPLACE_PARAMS = {
	todoId: '{:todoId}',
};

//  Paths to TodoList
export const TODO_LIST_ROUTE_GET_ALL = `${url}/allTodos`;
export const TODO_LIST_ROUTE_NEW = `${url}/newTodo`;
export const TODO_LIST_ROUTE_UPDATE = `${url}/updateTodo/{:todoId}`;
export const TODO_LIST_ROUTE_DELETE = `${url}/deleteTodo/{:todoId}`;
