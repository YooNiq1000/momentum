// Math.random() * 10;
// Math.round()
// MAth.ceil()
// Math.floor()
// [1.2.3.4.5].length
const numberInput = document.querySelector("#number_input");
const randomNumberMax = document.querySelector("#random_number_max");
const userNumber = document.querySelector("#user_number");
const gameProcess = document.querySelector(".process");
const gameResult = document.querySelector(".result");

const RANDOM_MAX_NUMBER = "random";
const USER_NUMBER = "user";
const COMPUTER_NUMBER = "computer";

function setValue() {
  userNumber.value = null;
}

function onLogicSubmitSave(event) {
  event.preventDefault();
  localStorage.setItem(RANDOM_MAX_NUMBER, randomNumberMax.value);

  localStorage.setItem(USER_NUMBER, userNumber.value);
  localStorage.setItem(
    COMPUTER_NUMBER,
    Math.ceil(randomNumberMax.value * Math.random())
  );
  console.log("save");
  gameStart();

  // gameProcess.innerText = `You chose: ${user}, the machine chose: ${computer}`;
}

function onLoginSubmitGame(event) {
  event.preventDefault();
  // gameProcess.innerText = `You chose: ${user}, the machine chose: ${computer}`;
  console.log("game");
  gameStart();
}

function gameProcessing(computer, user) {
  if (computer < user) {
    gameProcess.innerText = `You chose: ${user}, the machine chose: ${computer}`;
    gameResult.innerText = `You lost!`;
    localStorage.setItem(
      COMPUTER_NUMBER,
      Math.ceil(randomNumberMax.value * Math.random())
    );
  } else if (computer > user) {
    gameProcess.innerText = `You chose: ${user}, the machine chose: ${computer}`;
    gameResult.innerText = `You lost!`;
    localStorage.setItem(
      COMPUTER_NUMBER,
      Math.ceil(randomNumberMax.value * Math.random())
    );
  } else if (computer === user) {
    gameProcess.innerText = `You chose: ${user}, the machine chose: ${computer}`;
    gameResult.innerText = `You won!`;
    localStorage.clear();
  }
}

function gameStart() {
  const user = localStorage.getItem(USER_NUMBER);
  const computer = localStorage.getItem(COMPUTER_NUMBER);
  const randomMax = localStorage.getItem(RANDOM_MAX_NUMBER);
  // console.log(user, computer, randomMax);

  if (user > randomMax) {
    alert(`Your Number must be ${randomMax} or less than ${randomMax}`);
    setValue();
    // document.querySelector("#number_input").value = 0;
  } else {
    gameProcessing(computer, user);
  }
}

const savedUserNumber = localStorage.getItem(USER_NUMBER);

// numberInput.addEventListener("submit", onLogicSubmitSave);

// 이거 왜 안되는지 모르겠따!
console.log(savedUserNumber);

localStorage.clear();

if (savedUserNumber === null) {
  console.log(savedUserNumber);
  numberInput.addEventListener("submit", onLogicSubmitSave);
} else {
  console.log(savedUserNumber);
  numberInput.addEventListener("submit", onLoginSubmitGame);
}
