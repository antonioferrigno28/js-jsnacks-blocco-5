const zucchine = [
  { type: "Napoletana", weight: 10, length: 4 },
  { type: "Trombetta", weight: 13, length: 16 },
  { type: "Napoletana", weight: 4, length: 23 },
  { type: "Trombetta", weight: 11, length: 6 },
  { type: "Napoletana", weight: 2, length: 17 },
  { type: "Romana", weight: 5, length: 10 },
  { type: "Romana", weight: 7, length: 9 },
  { type: "Trombetta", weight: 3, length: 8 },
  { type: "Calabrese", weight: 6, length: 27 },
  { type: "Calabrese", weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ELABORAZIONE CICLO FOR
// const shorterThanFifteen = [];
// const longerThanFifteen = [];

// for (let i = 0; i < zucchine.length; i++) {
//   if (zucchine[i].length > 15) {
//     longerThanFifteen.push(zucchine[i]);
//   } else {
//     shorterThanFifteen.push(zucchine[i]);
//   }
// }

// console.log(longerThanFifteen);
// console.log(shorterThanFifteen);

//ELABORAZIONE FILTER
const longerThanFifteen = zucchine.filter(
  (currentElement) => currentElement.length > 15
);

const shorterThanFifteen = zucchine.filter(
  (currentElement) => currentElement.length < 15
);

console.log("Array con zucchine più lunghe di 15cm");
console.log(longerThanFifteen);
console.log("Array con zucchine più corte di 15 cm");
console.log(shorterThanFifteen);
