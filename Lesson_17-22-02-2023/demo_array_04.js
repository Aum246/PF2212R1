//Các thuộc tính và phương thức của mảng
let nameList = ["Annie","Babe","Carol"]; 

//Đảo ngược mảng
document.write(`Mảng ban đầu: ${nameList}<br>`);
nameList.reverse(); //đảo ngược thứ tự của mảng
document.write(`Mảng sau khi reverse: ${nameList}<br>`);

//Thêm phần tử vào mảng
nameList.push("Dave");
document.write(`Mảng ban đầu: ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

//Sắp xếp lại các phần tử trong mảng
document.write(`Mảng trước khi sort: ${nameList}<br>`);
nameList.sort(); //Sắp xếp lại thứ tự các phần tử trong mảng
document.write(`Mảng sau khi sort: ${nameList}<br>`);

//Nối các phần tử trong mảng lại thành chuỗi
document.write(nameList.join());
console.log(nameList);
console.log(nameList.join(`---`));
