const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

h1.style.color = "black"

function handleh1Click(){
    console.log("h1 was clicked!");
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier");
}

function handleWindowOffline(){
    alert(" SoS no WIFI");
}

function handleWindowOnline(){
    alert("All Good!");
}

h1.addEventListener("click", handleh1Click);
// h1.onclick = handleh1Click;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
console.dir


    