const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  handleToDoList(todoValue);
  todoInput.value = "";
}

// add list, delete list

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
