const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
////////////////////////////////////////////////////////////////////////////////////////////////////////

//ELABORAZIONE FOREACH

people.forEach((currentPerson) => {
  console.log(currentPerson.name);
});
