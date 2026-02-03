const isPalindrome = (str) => {
  if (!!str && str?.length > 0) {
    str = str.toLowerCase().replace(/\W/g, "");
    const r_string = str?.split("")?.reverse()?.join("");
    if (str === r_string) {
      console.log("This is palidrome string= ", r_string);
    } else {
      console.log("This is not palidrome string= ", r_string);
    }
  }
};

isPalindrome("palidromeString");
isPalindrome("a racecar a");
