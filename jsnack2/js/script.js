const arr = [];
for (let i = 0 ; i < 6 ; i++) {
    const num = parseInt(prompt("Mi dia un numero"));
    if (num % 2) 
        arr.push(num); 
}
console.log(arr);