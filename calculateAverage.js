const calculateAverage = (arr) => {
  if (!!arr && arr?.length > 0) {
    const ans = arr.reduce((a, b) => a + b, 0);
    console.log(ans / arr?.length);
  }
};

calculateAverage([1, 2, 3]);
calculateAverage([5, 10, 2, 8]);
calculateAverage([10, 20, 30, 100]);
calculateAverage([12, 233, 313]);
