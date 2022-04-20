let num = 0;
let strNum = "";
let sum = 0;
do {
    strNum = prompt ("Dammi un numero di quattro cifre");
    num = parseInt(strNum);
} while ( num < 1000 || num > 9999); 

for (let i = 0 ; i < strNum.length ; i ++) {
    sum += parseInt(strNum[i]);
}
console.log(`La somma dei numeri ${strNum} è di ${sum}`);
