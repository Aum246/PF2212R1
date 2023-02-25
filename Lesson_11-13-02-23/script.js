// Bài 1
let btnAction1 = document.getElementById(`btn-action1`);
btnAction1.addEventListener("click", () => {
  let length = parseInt(document.getElementById(`chieudai`).value);
  let width = parseInt(document.getElementById(`chieurong`).value);

  if (length == width) {
    alert("Đây là hình vuông.");
  } else {
    alert("Đây là hình chữ nhật.");
  }
});

let btnAction2 = document.getElementById(`btn-action-2`);
btnAction2.addEventListener("click", () => {
  let numA = parseInt(document.getElementById(`number-a`).value);
  let numB = parseInt(document.getElementById(`number-b`).value);

  if (numA > numB) {
    alert(`Số lớn nhất là: ${numA} `);
  } else {
    if (numA == numB) {
      alert(`Hai số bằng nhau.`);
    } else {
      alert(`Số lớn nhất là: ${numB} `);
    }
  }
});

let btnAction3 = document.getElementById(`btn-action-3`);
btnAction3.addEventListener("click", () => {
  let numN = parseInt(document.getElementById(`number-n`).value);

  // if ( numN >= 0) {
  //     alert (`Trị tuyệt đối là: ${numN} `);
  // } else {
  //             alert (`Trị tuyệt đối là: ${-numN}`);
  //     }
  // Toán tử ba ngôi ~ Tenary Operator
  numN >= 0
    ? alert(`Trị tuyệt đối là: ${numN} `)
    : alert(`Trị tuyệt đối là: ${-numN}`);
});

let btnActionDay = document.getElementById(`btn-action-day`);
btnActionDay.addEventListener("click", () => {
  let today = parseInt(document.getElementById(`day`).value);

  today == 2 ? alert (`Today is: Monday `) :
  today == 3 ? alert (`Today is: Tueday `) :
  today == 4 ? alert (`Today is: Wednesday `) :
  today == 5 ? alert (`Today is: Thurday `) :
  today == 6 ? alert (`Today is: Friday `) :
  today == 7 ? alert (`Today is: Saturday `) :
  alert (`Today is: Sunday `);

//   if (today==2) alert("Monday");
//   else if (today==3) alert("Tuesday");
//   else if (today==4) alert("Wednesday");
//   else if (today==5) alert("Thursday");
//   else if (today==6) alert("Friday");
//   else if (today==7) alert("Saturday");
//   else alert("Sunday");
    

//   switch (today) {
//     case 2:
//       alert("Monday");
//       break;
//     case 3:
//       alert("Tueday");
//       break;
//     case 4:
//       alert("Wednesday");
//       break;
//     case 5:
//       alert("Thursday");
//       break;
//     case 6:
//       alert("Friday");
//       break;
//     case 7:
//       alert("Saturday");
//       break;
//     default:
//       alert("Sunday");
//       break;
//   }



});
