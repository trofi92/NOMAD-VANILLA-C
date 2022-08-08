
// const machineNumber = () => {
//     document.querySelector("button").addEventListener("click", function () {
//     const getMNum = document.getElementById("macNum");
//     const a = Array.from(Array(parseInt(getMNum.value) + 1).keys());
//     const newArray = Math.floor([Math.random() * a.length]);
//     document.getElementById("macChosen").innerText = `the machine chose: ${newArray}.`
//     console.log(a);
// });
// };

//  function userNumber() {document.querySelector("button").addEventListener("click", function () {
//             const userNum = document.getElementById("userNum");
//             document.getElementById("userChosen").innerText = `You chose: ${userNum.value},`
//             if (userNum.value == a.value) {
//                 document.getElementById("result").innerText = `You won!`
//             } else {
//                 document.getElementById("result").innerText = `You lost!`;
//      }
            
//  })
// };




// const userNumber = () => {
    
// };   

// console.log(a);
//  const b = getGNum(Math.random() * a.length);






const machineNumber = () => {
    document.querySelector("button").addEventListener("click", function () {
        
        const getMNum = document.getElementById("macNum");
        const a = Array.from(Array(parseInt(getMNum.value)+1).keys());
        const newArray = Math.floor([Math.random() * a.length]);
        document.getElementById("macChosen").innerText = `the machine chose: ${newArray}.`
        // console.log(newArray);
        // console.log(a)
});
};







 function userNumber() {document.querySelector("button").addEventListener("click", function () {
     const userNum = document.getElementById("userNum");
     const deliveredMacNum = document.getElementsByClassName("deliver");
     console.log(deliveredMacNum);
    //  딜리버드맥넘 배열로 변경 => 숫자부분만 받아오기
     document.getElementById("userChosen").innerText = `You chose: ${userNum.value},`
     if (userNum.value === deliveredMacNum) {
                document.getElementById("resultA").innerText = `You won!`
            } else {
                document.getElementById("resultA").innerText = `You lost!`;
     }
            
 })
};