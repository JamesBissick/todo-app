export async function fetchAll(collection) {
  const response = await fetch(`http://localhost:3000/${ collection }`);
  const body = await response.json();
  return body;
}

export async function create(collection, body) {
  // const maxId = todos.length ? todos[todos.length - 1].id : 0;
  // setTodos([ ...todos, { id: maxId + 1, text: text, done: false } ]);
  // setText('');
  return fetch(`http://localhost:3000/${collection}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
}
