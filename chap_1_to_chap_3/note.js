const toBuy = ["potato", "tomato", "pizza"]; //array 생성

toBuy[2] = "water"; // arry 안에 내용 수정가능
toBuy.push("meat"); //arry 안에 내용 추가
console.log(toBuy);


function say(a,b) {
    console.log("hello my name is " + a + " and I'm " + b)
}

say("nico", 10);


const player = {
    name : "nico",
    age : 19,
    sayHello: function(name){
        console.log("Hello??" + name);

    },
};

console.log(player.name, player.age);
player.name = "nicolas";
delete player.age;
console.log(player); 
player.sayHello("lynn");

age1 = 95;

function cal(age1){
    return age1 + 2;  //return하는 순간 function 끝남. return 이후 라인은 무시됨
}

const krAge = cal(age1);
console.log(krAge);

const age = prompt("how old are you?"); //message 표시해주고 값 받기, 값 받기전까지 멈춤, prompt 더이상 쓰지 않음
//요즘에는 html, css로 만든 것으로 값받음

console.log(typeof age); // prompt로 받은 값은 다 stringsss

parseInt(age); //string --> an integer 

console.log(typeof parseInt(age));

isNaN(); //argument가 NaN인지 아닌지 Boolean으로 값 return

if(isNaN(age) || age < 0 ) {
    console.log("Please write a real positive number");
} else if(age<18){
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) { 
    console.log("You can drink!");
} else if(age === 100) { // !== : not equals to
    console.log("You");
} 


document.title = "Hidd"

const title = document.querySelector(".hello h1:first-child");
const title = document.querySelectorAll(".hello h1");

const title = document.querySelector("#hello"); //두개는 같은 작업을 한다.
const title = document.getElementById("hello");

title.style.color = "blue"
  