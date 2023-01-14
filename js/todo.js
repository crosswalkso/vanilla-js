const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  toDos.push(newToDo);
  makeToDoList(newToDo);
  todoInput.value = "";
  saveToDos();
}

function makeToDoList(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo;
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
  const parseToDos = JSON.parse(savedToDos);
  parseToDos.forEach((item) => console.log(item));
}

todoForm.addEventListener("submit", handleToDoSubmit);
