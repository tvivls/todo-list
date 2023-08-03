import {Alert, Spin} from 'antd';
import {ITodoContext} from '../contexts/TodoContext';

const Errors = ({error, isLoading}: Pick<Partial<ITodoContext>, 'error' | 'isLoading'>) => {
  if (error)
    return <Alert
      message="Error"
      description="Failed to load."
      type="error"
      showIcon
    />;
  if (isLoading) return <Spin />;
  return null;
};

export default Errors;
