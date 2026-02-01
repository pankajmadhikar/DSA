const sortAscending = (arr) => {
  if (!!arr && Array.isArray(arr)) {
    const result = arr.sort((a, b) => a - b);
    // const result = arr.sort();
    console.log(result);
  }
};

sortAscending([77, 1, 2, 34, 12, 25, 10]);
