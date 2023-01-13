const loginForm = document.querySelector("#loginform");
const loginInput = document.querySelector("#loginform input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logoutform");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const SavedUsername = localStorage.getItem(USERNAME_KEY);

function OnLoginForm(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function OnLogoutForm(event) {
  localStorage.removeItem(USERNAME_KEY);
}
function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}`;
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", OnLoginForm);
logoutForm.addEventListener("submit", OnLogoutForm);

if (SavedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(SavedUsername);
}
