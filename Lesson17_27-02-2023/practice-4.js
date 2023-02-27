// Bài 4: Cho 2 array có cùng số phần tử với nhau. 
let array1 = [10, 20, 30, 40];
let array2 = [100, 200, 300, 400]

// Hãy in các thành phần trong 2 array theo format dưới đây (document.write)
/**
 * 10 400
 * 20 300
 * 30 200
 * 40 100
 */

let arrayv2 = array2.reverse();
let array3 = [];
for (let i in array1) {
    array3.push(array1[i] + " " + arrayv2[i]);
  }
  console.log(array3);