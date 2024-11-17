// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const link = document.querySelector("a");

// argument는 event로 하는게 관행이다
//event안에는 함수가 실행되었을 때의 정보들이 담겨있다.
function onLoginSubmit(event) {
  // console.log("Hello?", loginInput.value);
  // 어떤 event의 default behavior이 발생하지 않도록 하는 함수
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // const username = loginIn put.value;
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello  " + username;
  paintGreetings(username);
  console.log(username);
  // if (username === "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long.");
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  // greeting.innerText = "Hello" + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked");
}

// loginButton.addEventListener("click", onLogBtnClick);

// link.addEventListener("click", handleLinkClick);
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
