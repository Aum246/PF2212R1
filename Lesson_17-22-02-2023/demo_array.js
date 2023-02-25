//Khai báo mảng
let nameList = ["Thu", "Hien", "Phuc"]; //danh sách tên
let numberList = [1, 2, 3, 4, 5]; //danh sách số tự nhiên
let info = ["Thu", "thu.t@gmail.com", true, 5.0 ]; //thông tin

let weekdays = new Array ("Sunday", "Monday", "Tuesday", "Wednesday");

console.log(weekdays);
document.write (weekdays + "<br>");

//Kiểm tra kiểu dữ liệu của mảng
document.write(typeof(weekdays)+`<br>`);

//Truy vấn 01 phần tử trong mảng
let numbers = [1, 2, 3, 4, 5]; 

//In ra giá trị 4 trong mảng
document.write(`Mảng ban đầu: ${numbers}<br>`);
document.write(`Phần tử tại vị trí số 03 trong mảng có giá trị là:${numbers[3]}<br>`);

//Thay đổi giá trị tại index 3
numbers[3] = 10;
document.write(`Phần tử tại vị trí số 03 trong mảng có giá trị là:${numbers[3]}`);s