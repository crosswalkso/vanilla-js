const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  todoList.innerText = todoValue;
  todoInput.value = "";
  console.log(todoValue);
}

todoForm.addEventListener("submit", handleToDoSubmit);
