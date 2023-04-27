const input = document.querySelector('input');
const button = document.querySelector('.add-button');
const todoContainer = document.querySelector('div.todo-container');

const errorMessage = document.querySelector('span');

const showMessage = (message) => {
  errorMessage.innerText = message;

  setTimeout(() => errorMessage.innerText = '', 3000);
};

const createTodo = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');

  const p = document.createElement('p');
  p.innerText = todo;

  const checkButton = document.createElement('span');
  checkButton.innerText = 'Check';

  const deleteButton = document.createElement('span');
  deleteButton.innerText = 'Delete';

  const buttonsContainer = document.createElement('div');

  checkButton.addEventListener('click', () => {
    if (p.style.textDecoration) {
      p.style.textDecoration = '';
    } else {
      p.style.textDecoration = 'line-through';
    }
  });
  deleteButton.addEventListener('click', () => {
    deleteTodo(todo);
    div.remove();
  });

  buttonsContainer.append(checkButton, deleteButton);
  div.append(p, buttonsContainer);
  todoContainer.append(div);
};

const saveTodo = () => {
  const todo = input.value;
  const todos = JSON.parse(localStorage.getItem('todos'));

  if (todos.length) {
    const isTodoExist = todos.find(item => item === todo);

    if (isTodoExist) {
      showMessage('Todo already exists.');
      return;
    }
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  createTodo(todo);
  input.value = '';
  watchTodoInput();
};

const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));

  if (!todos) {
    localStorage.setItem('todos', JSON.stringify([]));
    return;
  }

  if (todos.length) {
    todos.map(item => createTodo(item));
  }
};

const deleteTodo = (todo) => {
  const todos = JSON.parse(localStorage.getItem('todos'));

  const index = todos.findIndex(item => item === todo);

  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const watchTodoInput = () => {
  if (input.value) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

button.addEventListener('click', saveTodo);
input.addEventListener('keyup', watchTodoInput);

watchTodoInput();
loadTodos();