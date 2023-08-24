import {Input, List} from 'antd';
import TodoItem from './TodoItem';
import {TodoDataType} from '../types';
import React, {ChangeEvent, useContext, useState} from 'react';
import {ITodoContext, TodoContext} from '../contexts/TodoContext';
import Errors from './Errors';

const TodoList = () => {
  const {data, error, isLoading} = useContext(TodoContext) as ITodoContext ;

  const [filter, setFilter] = useState('');
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredTodos = data?.filter(({title}) =>
    title.toLowerCase().includes(filter.toLowerCase()))
    .sort((firstTodo, secondTodo) => firstTodo.id - secondTodo.id);

  if (error || isLoading) return <Errors error={error} isLoading={isLoading}/>;

  return (
    <>
      <Input
        type="text"
        value={filter}
        placeholder="Search..."
        onChange={handleFilterChange}
      />
      <List
        itemLayout="horizontal"
        dataSource={filteredTodos}
        renderItem={(item: TodoDataType) => (
          <TodoItem key={item.id} id={item.id} title={item.title || ''} status={item.status}/>
        )}
      />
    </>
  );
};

export default TodoList;
