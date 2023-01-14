const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  handleToDoList(todoValue);
  todoInput.value = "";
}

function handleToDoList(todoValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todoValue;
  todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleToDoSubmit);
