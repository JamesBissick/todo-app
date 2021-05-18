import { useState } from 'react';
import styles from './App.module.css';


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

  const handleDoneTask = (id) => (event) => {
    console.log(event);
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
  };

  const handleRemove = (id) => (event) => {
    // Filter out all the todos that don't have the current id
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input type='text' placeholder="What's next?" value={ text } onChange={ handleChange } autoFocus />
        <button>Submit</button>
      </form>
      <ul>
        { todos.map(({ id, text, done }) => (
          <li key={ id } className={ done ? styles.done : null }>
            <span onClick={ handleDoneTask(id) }>{ text }</span>
            <button onClick={ handleRemove(id) }>x</button>
          </li>
        )) }
      </ul>
    </>
  );
}

export default App;
