import {Button, Checkbox, List, Modal, Typography} from 'antd';
import {TodoDataType} from '../types';
import {FC, useContext, useState} from 'react';
import {ITodoContext, TodoContext} from '../contexts/TodoContext';
import EditTodo from './EditTodo';

const { Text } = Typography;

const TodoItem: FC<TodoDataType> = ({id, title, status}) => {
  const { updateTodo, handleCheckboxChange, deleteTodo } = useContext(TodoContext) as ITodoContext;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsInputOpen(false);
  };

  const showInput = () => {
    setIsInputOpen(true);
  };

  const handleInput = (inputData: string) => {
    updateTodo(id, {title: inputData});
    setIsInputOpen(false);
  };

  return (
    <List.Item key={id}>
      {!isInputOpen &&
        <>
          <Checkbox checked={status} onClick={() => handleCheckboxChange(id, status)}/>
          <List.Item.Meta
            style={{margin: '5px'}}
            title={status
              ? <Text delete>{title}</Text>
              : <Text>{title}</Text>
          }/>
          <Button type="primary" style={{ margin: '5px' }} onClick={showInput}>
            Edit
          </Button>
          <Button danger style={{ margin: '5px' }} onClick={showModal}>
            Delete
          </Button>
        </>
      }
      <Modal
        title="Delete?"
        okText="Ok"
        cancelText="Cancel"
        open={isModalOpen}
        onOk={() => {
          deleteTodo(id);
          setIsModalOpen(false);
        }}
        onCancel={handleCancel}>
      </Modal>
      {isInputOpen && (
        <EditTodo
          open={isInputOpen}
          onOk={handleInput}
          onCancel={handleCancel} title={title}/>
      )}
    </List.Item>
  );
};

export default TodoItem;
