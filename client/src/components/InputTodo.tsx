import {useContext} from 'react';
import {Button, Col, Form, Input, Row} from 'antd';
import {ITodoContext, TodoContext} from '../contexts/TodoContext';

const InputTodo = () => {
  const { handleInputChange, inputValue, addTodo } = useContext(TodoContext) as ITodoContext;

  return (
    <Form
      name="basic"
      autoComplete="off"
      style={{margin: '15px 0', width: '900px'}}
    >
      <Row>
        <Col flex="auto">
          <Input
            onChange={handleInputChange}
            value={inputValue || ''}
            placeholder="Create new task"
          />
        </Col>
        <Col flex="50px">
          <Button type="primary" htmlType="submit" onClick={addTodo} style={{marginLeft: '15px'}}>
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};


export default InputTodo;
