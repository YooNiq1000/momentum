function handleMouseEnter(){
    h1.innerText = "The mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "The mouse is gone!"
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("")

const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);