
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

// --------------------------------------------------삽질의 흔적--------------------------------------------------


//각 입력을 감지해서 값을 받아오도록 하되, 버튼 클릭시 모든 이벤트가 동시에 수행되도록 설정
//유저가 입력하는 숫자만큼의 아이템을 가지는는 배열을 생성한다.
//(배열의 키 혹은 인덱스 값은 0부터 시작하므로, 입력한 숫자까지 포함되기 위해서는 유저 입력값에 +1을 해주어야한다.)
//생성된 배열에서 임의의 값을 불러오도록 선언하고, 소수점 아래를 탈락시킨다.
const machineNumber = () => {
    document.querySelector("button").addEventListener("click", function () {
        
        const getMNum = document.getElementById("macNum");
        const mnArray = Array.from(Array(parseInt(getMNum.value)+1).keys());
        const newArray = Math.floor([Math.random() * mnArray.length]);
        document.getElementById("macChosen").innerText = `the machine chose: ${newArray}.`

});
};






//첫번째 함수에서 난수로 출력되는 값은 함수가 실행될때 마다 바뀐다.
//따라서 고정된 값을 불러오기 위해 화면에 출력된 문자열을 배열로 바꾸어 필요한 숫자값을 가져온다.
//주어진 조건에 따라 마침표 앞에 공백이 없는 상태로 출력해야한다.
//즉 공백을 따라서 새롭게 생성된 아이템 중 "n."인 것을 찾는다. 이때 내부적으로 "."은 마침표가 아닌 소수점으로 인식된다.
//마침표를 분리한 최종값을 유저가 입력한 값과 비교하여 결과에 따라 승패여부를 브라우저에 출력한다.

 const userNumber = () => {document.querySelector("button").addEventListener("click", function () {
  
     const userNum = document.getElementById("userNum");
     const deliveredMacNum =  document.getElementById("macChosen").innerText;
     const dmnArray = `${deliveredMacNum}`.split(" ");
     const dmnFind = dmnArray.find(element => element >= 0);
     const dmnDot = dmnFind.split("."); 
     const dmnLast = dmnDot.find(element => element >= 0);
    console.log(dmnFind)
     console.log(dmnLast);
     document.getElementById("userChosen").innerText = `You chose: ${userNum.value} ,`
     if (userNum.value === dmnLast) {
                document.getElementById("result").innerText = `You won!`
            } else {
                document.getElementById("result").innerText = `You lost!`;
     }
            
 })
};