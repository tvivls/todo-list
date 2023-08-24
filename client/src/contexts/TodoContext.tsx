import {ChangeEvent, createContext, FC, ReactNode, useState} from 'react';
import {createTodos, deleteTodos, fetchTodos, updateTodos} from '../http/todoApi';
import useSWR, {mutate} from 'swr';
import {path} from '../http';
import {TodoDataType} from '../types';

export interface ITodoContext {
  data: TodoDataType[] | undefined;
  error: Error;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  addTodo: () => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, value: Omit<Partial<TodoDataType>, 'id'>) => void;
  handleCheckboxChange: (id: number, checkboxStatus: boolean) => void;
}

export const TodoContext = createContext<ITodoContext | null>(null);

const TodoContextProvider: FC<{ children: ReactNode }> = ({children}) => {
  const { data, error, isLoading } = useSWR(path, fetchTodos);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    createTodos({title: inputValue}).then(() => mutate(path));
    setInputValue('');
  };

  const handleCheckboxChange = (id: number, checkboxStatus: boolean) => {
    const newStatus = !checkboxStatus;
    updateTodo(id, {status: newStatus});
  };

  const deleteTodo = (id: number) => {
    deleteTodos({id}).then(() => mutate(path));
  };

  const updateTodo = (id: number, value: {title?: string; status?: boolean}) => {
    updateTodos({id}, value).then(() => mutate(path));
  };

  return (
    <TodoContext.Provider value={{
      data,
      error,
      isLoading,
      handleInputChange,
      inputValue,
      addTodo,
      deleteTodo,
      updateTodo,
      handleCheckboxChange,
    }}>
      {children}
    </TodoContext.Provider>
  );
};


export default TodoContextProvider;
