import { useState } from 'react';

import List from './list/list';
import Form from './form/form';

import './styles.css';

function App() {
  const [ todos, setTodos ] = useState([
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Seek for a job', done: false },
    { id: 3, text: 'Forget everything', done: false },
  ]);

  const [ text, setText ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const maxId = todos.length ? todos[todos.length - 1].id : 0;
    setTodos([ ...todos, { id: maxId + 1, text: text, done: false } ]);
    setText('');
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
