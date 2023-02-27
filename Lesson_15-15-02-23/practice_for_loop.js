//Bài 1
let btnAction1 = document.getElementById(`btn-action_1`);
btnAction1.addEventListener("click", () => {
    let n = parseInt(document.getElementById(`num-n`).value);
    let total = 0;
    for (let i=0; i<n+1;i++ ){
       total +=i;
    }
    alert(`Tổng là: ${total}`)
});