const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function handleForm(event) {
  event.preventDefault();
  const userInput = toDoInput.value;
  toDoInput.value = "";
  const userInputObj = {
    id: Date.now(),
    text: userInput,
  };
  toDos.push(userInputObj);
  makeList(userInputObj);
  saveToDos();
}

function makeList(userInputObj) {
  const li = document.createElement("li");
  li.id = userInputObj.id;
  const span = document.createElement("span");
  span.innerText = userInputObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteList);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(makeList);
}

function deleteList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

toDoForm.addEventListener("submit", handleForm);
