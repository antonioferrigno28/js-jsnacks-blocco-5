const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
////////////////////////////////////////////////////////////////////////
//ELABORAZIONE CICLO FOR
// const incrementedNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i] + 1;
//   incrementedNumbers.push(numbers[i]);
// }
// console.log(numbers);

//ELABORAZIONE MAP
const incrementedNumbers = numbers.map(
  (currentNumber) => (currentNumber = currentNumber + 1)
);
console.log(incrementedNumbers);
