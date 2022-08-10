const clockTitle = document.querySelector(".js-clock");

const christmas = new Date(2022, 11, 24, 0, 0, 0).getTime();
const countdown = setInterval(function () { 
    const now = new Date();
    const deadline = christmas - now;
    const days = Math.floor(deadline / (1000 * 60 * 60 * 24));
    const hours = Math.floor(deadline % (1000*60*60*24)/(1000*60*60));
    const minutes = Math.floor((deadline % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((deadline % (1000 * 60)) / 1000);
    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (deadline < 0) {
        clearInterval(countdown);
        alert("Happy Holiday My Dear!")
    }
    // console.log(deadline / 1000*60*60*24)
}, 1000);



// function getClock() {
//   const date = new Date();
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");
//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);