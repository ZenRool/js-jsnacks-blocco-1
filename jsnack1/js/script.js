const firstWord = prompt("inserisci la prima parola");
const secondWord = prompt("inserisci la seconda parola");
console.log((firstWord.length == secondWord.length) ? "Le parole sono lunghe uguali" : (firstWord.length < secondWord.length) ? firstWord + '\n' + secondWord : secondWord + '\n' + firstWord );