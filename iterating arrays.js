let seatingchart = [
  ["ram", "shyam", "hari"],
  ["sita", "geeta", "parbati"],
  ["nayeem", "john", "jonas"],
];
// for (let index = 0; index < seatingchart.length; index++) {
//   const element1 = seatingchart[index];
//   for (let j = 0; j < element1.length; j++) {
//     const element = element1[j];
//     console.log(element);
//   }
// }

// This is the better method for arrays

for (const row of seatingchart) {
  for (const students of row) {
    console.log(students);
  }
}

//This can be used to iterate over  strings also
for (const character of "hello world") {
  console.log(character);
}
