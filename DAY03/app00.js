//노마드코더 바닐라js챌린지 3일차 과제 노가다의 흔적
//이것도 작동은 하는데 규칙에 어긋나서 사용못함
// let handleMouseEvent = document.getElementsByTagName("h1");

// handleMouseEvent.addEventListener("mouseover", function () {
//   text.innerText = "The mouse is here!";
//   text.style.color = "#1abc9c";
// });

// handleMouseEvent.addEventListener("mouseleave", function () {
//   text.innerText = "The mouse is gone!";
//   text.style.color = "#3498db";
// });

// function handleCilckType(event) {
//   if (event.button === 0) {
//     text.innerText = "That was left click!";
//     text.style.color = "black";
//   } else if (event.button === 2) {
//     text.innerText = "That was right click!";
//     text.style.color = "#9b59b6";
//   } else {
//     text.innerText = "That was wheel(or middle) click!";
//     text.style.color = "tomato";
//   }
// }
// handleMouseEvent.addEventListener("mousedown", handleCilckType);

// window.addEventListener("resize", function () {
//   text.innerText = "You just resized!";
//   text.style.color = "#f39c12";
// });


// const body = document.querySelector("body");
// const title = document.querySelector("h2");

// const superEventHandler = {
//   handleResize: function () {
//     title.innerHTML = "You just resized!";
//     title.style.color = colors[0];
//   },
//   handleClick: function () {
//     title.innerHTML = "That was a right click!";
//     title.style.color = colors[1];
//   },
//   mouseOver: function () {
//     title.innerHTML = "The mouse is here!";
//     title.style.color = colors[2];
//   },
//   mouseOut: function () {
//     title.innerHTML = " The mouse is gone!";
//     title.style.color = colors[4];
//   }
// };

// window.addEventListener("resize", superEventHandler.handleResize);
// title.addEventListener("click", superEventHandler.handleClick);
// title.addEventListener("mouseover", superEventHandler.mouseOver);
// title.addEventListener("mouseleave", superEventHandler.mouseOut);


// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

//노마드코더 바닐라js챌린지 3일차 과제 노가다의 흔적
const title = document.querySelector("h2");

const superEventHandler = {
  handleResize: function () {
    title.innerHTML = "You just resized!";
    title.style.color = colors[0];
  },

  //controll all kind of clicks
  handleCilckType: function (event) {
    if (event.button === 2) {
      title.innerHTML = "That was right click!";
      title.style.color = colors[4];
    } else if (event.button === 0) {
      title.innerHTML = "That was left click!";
      title.style.color = "black";
    } else {
      title.innerHTML = "That was wheel(or middle) click!";
      title.style.color = "tomato";
    }
  },

  mouseOver: function () {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[2];
  },

  mouseLeave: function () {
    title.innerHTML = " The mouse is gone!";
    title.style.color = colors[1];
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
title.addEventListener("mousedown", superEventHandler.handleCilckType);
title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);