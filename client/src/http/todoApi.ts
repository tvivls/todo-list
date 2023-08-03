import {$host} from './index';
import {TodoDataType} from '../types';

export const fetchTodos = async (): Promise<TodoDataType[]> => {
  const { data } = await $host.get('todos/');
  return data;
};

export const createTodos = async (todo: {title: string}): Promise<TodoDataType>  => {
  const { data } = await $host.post('todos/', todo);
  return data;
};

export const deleteTodos = async ({id}: { id: number }) => {
  const { data } = await $host.delete(`todos/${id}`);
  return data;
};

export const updateTodos = async ({id}: { id: number }, todo: {title?: string; status?: boolean}) => {
  const { data } = await $host.patch(`todos/${id}`, todo);
  return data;
};
