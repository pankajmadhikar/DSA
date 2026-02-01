const checkTriangleType = (a, b, c) => {
  if (a === b && b === c && c === a) {
    console.log("Equilateral", "3 Match");
  } else if (a === b || b === c || c === a) {
    console.log("Isosceles", "2 match");
  } else if (a !== b && b !== c && c !== a) {
    console.log("scelene", "Not match to triangle ");
  }
};

checkTriangleType(3, 1, 2);
