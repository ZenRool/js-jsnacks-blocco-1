let num = 0;
let strNum = "";
let sum = 0;
do {
    strNum = prompt ("Dammi un numero di quattro cifre");
    num = parseInt(strNum);
} while ( num < 999 || num > 9999); 
// console.log(strNum);
// strNum.forEach(elementNumb => sum += parseInt(elementNumb));
for (let i = 0 ; i < strNum.length ; i ++) {
    sum += parseInt(strNum[i]);
}
console.log(`La somma dei numeri ${strNum} è di ${sum}`);