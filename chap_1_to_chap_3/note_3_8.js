const h1 = document.querySelector("div.hello:first-child h1");

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

h1.addEventListener("click", handleh1Click);
// h1.onclick = handleh1Click;