const h1 = document.querySelector("div.hello:first-child h1");
// const body = document.body;

console.dir(h1);

function handleh1Click(){ 
    // const clickedClass = "clicked"

    // if(h1.className === clickedClass 
    // ){
    //     h1.className = "";
    // } else{
    //     h1.className = clickedClass;
    // }

    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else{
    //     h1.classList.add(clickedClass);
    // }

    h1.classList.toggle("clicked")
  
  console.log("click!")
}

function handleMouseEnter(){
    h1.innerText = "The mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "The mouse is gone!";
}

function handleRightClick(){
    h1.innerText = "That was a right click!";
}

function handleWindowResize(){
    h1.innerText = "You just resized!";
}
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("click", handleh1Click);
window.addEventListener("contextmenu", handleRightClick);
window.addEventListener("resize", handleWindowResize);
// h1.onclick = handleh1Click;


