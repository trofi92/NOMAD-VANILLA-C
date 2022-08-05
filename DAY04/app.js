
//innerWidth

// #914EAD purple
// #2E8CD5 blue
// #eebc12 yellow

//small : blue
//medium : purple
//big : yellow(default)
//if - else
//add/remove classList
//window.blabla


const bgColor = document.querySelector("body")
const text = document.getElementById("text")

text.style.color = "white";
bgColor.style.backgroundColor = "#eebc12";


function colorChange() {
    const bgSize = window.innerWidth;
    if (bgSize >= 600 && bgSize <1300 ) {
      
        bgColor.style.backgroundColor = "#2E8CD5";
    } else if (bgSize < 600 && bgSize > 0) {
    
        bgColor.style.backgroundColor = "#914EAD";

    } else {
        bgColor.style.backgroundColor = "#eebc12";
      
    }
}
window.addEventListener("resize", colorChange);
