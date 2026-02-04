const calculateAverage = (arr) => {
  if (!!arr && arr?.length > 0) {
    const ans = arr.reduce((a, b) => a + b);
    console.log(ans);
  }
};

calculateAverage([1, 2, 3]);
calculateAverage([10, 20, 30, 100]);
calculateAverage([12, 233, 313]);
