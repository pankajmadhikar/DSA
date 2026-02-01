// const countCahr = (str, char) => {
//   if (!!str && !!char && str?.trim()?.length > 0) {
//     let count = 0;
//     for (i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//         console.log(count);
//       }
//     }
//   } else {
//     console.log("Pass string and character as a argument");
//   }
// };

const countCahr = (str, char) => {
  if (!!str && !!char && str?.trim()?.length > 0) {
    const totalCount = str.split("").reduce((accum, curChar) => {
      if (curChar === char) {
        accum++;
      }
      return accum;
    }, 0);
    console.log(totalCount);
  } else {
    console.log("Pass string and character as a argument");
  }
};

countCahr("Hello", "l");
