const findMax = (arr) => {
  if (!!arr && arr?.length > 0 && Array.isArray(arr)) {
    console.log(Math.max(...arr));
  }
};

// const findMax = (arr) => {
//   if (!!arr && arr?.length > 0 && Array.isArray(arr)) {
//     if (arr?.length === 1) {
//       console.log(arr[0]);
//     } else {
//       const maxNum = arr.sort((a, b) => b - a);
//       console.log(maxNum[0]);
//     }
//   }
// };

findMax([100]);
findMax([1, 5, 3, 9, 2]);
findMax([-10, -5, -3, -9, -2, -1]);
