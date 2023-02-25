//Các thuộc tính và phương thức của mảng
let nameList = ["Annie", "Babe", "Carol"]; 
    document.write(`Mảng ban đầu: ${nameList}<br>`);

//Độ dài của mảng
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

//Thêm phần tử vào mảng
nameList.push("Dave");
document.write(`Mảng ban đầu: ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

nameList[nameList.length] = "Emmy";
document.write(`Mảng ban đầu: ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

//Xoá phần tử ra khỏi mảng
//Cách 1 - shift: first element
let removedItem = nameList.shift(); //Xoá phần tử đầu tiên của mảng
document.write(`Phần tử bị xoá: ${removedItem}<br>`);
document.write(`Mảng ban đầu: ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

//Cách 2 - pop: last element
removedItem = nameList.pop(); //Xoá phần tử đầu tiên của mảng
document.write(`Phần tử bị xoá: ${removedItem}<br>`);
document.write(`Mảng ban đầu: ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);


