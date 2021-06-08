import styles from '../app.module.css';

import './list.css';

const List = ({ todos, onDoneTask, onRemove }) => {
  return (
    <ul className='todo-list'>
      { todos.map(({ id, text, done }) => (
        <li key={ id } >
          <span className={ done ? styles.done : null } onClick={ event => onDoneTask(id) }>{ text }</span>
          <button className='delete-button' onClick={ event => onRemove(id) }>x</button>
        </li>
      )) }
    </ul>
  );
};

export default List;
