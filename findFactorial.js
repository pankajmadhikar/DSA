const findFactorial = (num) => {
  if (!!num) {
    let result = 1;
    for (i = 1; i <= num; i++) {
      result = result * i;
    }
    console.log(result);
  }
};

findFactorial(2);
findFactorial(3);
// findFactorial(4);
