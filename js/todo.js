const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);
  makeToDoList(newToDoObj);
  todoInput.value = "";
  saveToDos();
}

function makeToDoList(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDoObj.text;
  button.innerText = "❌";
  todoList.appendChild(li);
  button.addEventListener("click", deleteButton);
}

function deleteButton(event) {
  const li = event.target.parentElement;
  li.remove();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(makeToDoList);
}

todoForm.addEventListener("submit", handleToDoSubmit);
