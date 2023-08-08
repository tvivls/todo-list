import './App.css';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';
import InputTodo from './components/InputTodo';

function App() {
  return (
    <TodoContextProvider>
      <InputTodo/>
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
