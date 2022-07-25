var students = [{
    name: "Mike",
    track: "track-a",
    achievements: 23,
    points: 400,
  },
  {
    name: "james",
    track: "track-a",
    achievements: 2,
    points: 21,
  },
]

students.forEach(myFunction);

function myFunction(item, index) {
  for (var key in item) {
    console.log(item[key])
  }
}

//   items.forEach(myFunction);

// function myFunction(items, index) {
//   for (var key in items) {
//     const j = expandStockInput(key);
//     jibu.push(...j); // this is called spreading ...
//   }
// }