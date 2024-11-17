const clock = document.querySelector("h2#clock");
// const clock = document.querySelector("#clock");
// const clock = document.getElementById("clock");
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // console.log(hours, minutes, seconds);
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 1000);
getClock();
setInterval(getClock, 1000);
// setTimeout(getClock, 1000);  1000ms뒤에 getClock() 한번 실행

// "1".padStart(2,"0"); 자리수가 2자리가 아니면 앞에 0을 붙여라
// "1".padEnd(2,"0"); 자리수가 2자리가 아니면 뒤에 0을 붙여라
// "hello".padStart(20,"x");

// mdn 잘 살펴보면 한번에 해결하는 방법도 있네요!

// function sayHello(){
//   clock.innerText = new Date().toLocaleTimeString();
// 24시간표시 :  clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false });
//   }
//   sayHello()
//   setInterval(sayHello, 1000);
