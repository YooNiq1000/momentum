const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // localStorage에는 text만 저장할 수 있다. array는 저장할 수 없다.??
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  // toDos.filter(toDo) : toDos에 있는 모든 array에 대해 toDo함수를 실행, toDo 함수가 true면 그 item은 유지
  // false면 그 item은 삭제

  // const arr = ["pizza", "banana", "tomato"];
  // function sexyfilter(food) {
  //   return food !== "banana";
  // }
  // arr.filter(sexyFilter)
  //filter function은 false인 item을 제거하고 새로운 array를 생성하는 함수다
  //기존의 array를 수정하지 않는다

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");

  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

// array의 어떤 item에 대해 함수가 실해되는지 자바스크립트가 주는 정보
// function sayHello(item) {
//   console.log("This is the turn of", item);
// }

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // array의 각각의 item에 대해 function을 실행할 수 있게 해줌
  // console.log(parsedToDos);

  // parsedToDos.forEach(sayHello);

  //각각의 item에 대해서 console.log를 실행시켜라(arrow function)
  parsedToDos.forEach(paintToDo);
}
