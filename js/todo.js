const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos) {
  const parseToDos = JSON.parse(savedToDos);
  console.log(parseToDos);
  parseToDos.forEach((item) => console.log(item));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  toDos.push(todoValue);
  handleToDoList(todoValue);
  todoInput.value = "";
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

const toDos = [];

function deleteButton(event) {
  const li = event.target.parentElement;
  li.remove();
}
function handleToDoList(todoValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❎";
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = todoValue;
  todoList.appendChild(li);
  button.addEventListener("click", deleteButton);
}

todoForm.addEventListener("submit", handleToDoSubmit);
