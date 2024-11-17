const screenWidth = screen.width; //Monitor Resolution
const body = document.querySelector("body")
console.log(screenWidth);
const colors = ['#EEBC12', '#904FAD', '#2E8CD5'];

function handleWindowResize(){
        
    let windowOuterWidth = window.outerWidth; //Size of Browser outer frame
    
    
    //Outer frame bigger than 80% of monitor resolution
    if(windowOuterWidth >= 0.9 * screenWidth){    
        console.log("ok!");
        body.style.backgroundColor = colors[0];
    // Outer frame smaller than 80% of monitor resolution or bigger than 60% of monitor resolution
    } else if(windowOuterWidth <0.9 * screenWidth && windowOuterWidth > 0.6 * screenWidth ){  
        body.style.backgroundColor = colors[1];
    // Outer frame smaller than 60% of monitor resolution
    } else{
        body.style.backgroundColor = colors[2];
    }

}

window.addEventListener("resize", handleWindowResize);

