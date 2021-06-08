import { useEffect, useState } from 'react';

import List from './list/list';
import Form from './form/form';

import * as api from './api/fetch';

import './styles.css';

function App() {
  const [ todos, setTodos ] = useState([]);

  const fetchTodos = async () => {
    const todos = await api.fetchAll('todos');
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const [ text, setText ] = useState('');

  const handleSubmit = async (event) => {
    await api.create('todos', { text, done: false });
    fetchTodos();
  };

  const handleChange = (event) => {
    // const input = event.target;
    setText(event.target.value);
  };

  const handleDoneTask = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
  };

  const handleRemove = (id) => {
    // Filter out all the todos that don't have the current id
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <div className='container'>
        <Form text={ text } onTextChange={ handleChange } onTextSubmit={ handleSubmit } />
        <List todos={ todos } onDoneTask={ handleDoneTask } onRemove={ handleRemove } />
      </div>
    </>
  );
}

export default App;
