import {Button, Input} from 'antd';
import {ChangeEvent, FC, useState} from 'react';

interface IEditTodo {
  open: boolean;
  onOk: (inputData: string) => void;
  onCancel: () => void;
  title: string;
}

const EditTodo: FC<IEditTodo> = ({open, onOk, onCancel, title}) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const handleSendDataToParent = () => {
    onOk(inputData);
  };

  return open ? (
    <>
      <Input defaultValue={title} style={{margin: '5px'}} onChange={handleInputChange}/>
      <Button type="primary" onClick={onCancel} style={{margin: '5px'}}>Cancel</Button>
      <Button onClick={handleSendDataToParent} style={{margin: '5px', background: 'white', borderColor: '#198754', color: '#2e7031'}}>Save</Button>
    </>
  ) : null;
};

export default EditTodo;
