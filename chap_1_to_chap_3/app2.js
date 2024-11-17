const h2 = document.querySelector("body h2");
// const h2 = document.querySelector('h2'); 숙제 답안에 있는 코드
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

console.log(h2);
console.dir(h2);

const superEventHandler = {
    handleMouseEnter: function () {
      h2.innerText = 'The mouse is here!';
      h2.style.color = colors[0];
    },
  
    handleMouseLeave: function () {
      h2.innerText = 'The mouse is gone!';
      h2.style.color = colors[1];
    },
  
    handleRightClick: function () {
      h2.innerText = 'That was a right click!';
      h2.style.color = colors[4];
    },
  
    handleWindowResize: function () {
      h2.innerText = 'You just resized!';
      h2.style.color = colors[2];
    },
  };
  
  h2.addEventListener('mouseenter', superEventHandler.handleMouseEnter);
  h2.addEventListener('mouseleave', superEventHandler.handleMouseLeave);
  window.addEventListener('contextmenu', superEventHandler.handleRightClick);
  window.addEventListener('resize', superEventHandler.handleWindowResize);
