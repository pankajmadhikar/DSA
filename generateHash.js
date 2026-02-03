// Question: Write a function that takes a string and generates a hashtag by capitalizing
// the first letter of each word and joining them with no spaces (e.g., "hello world" → "#HelloWorld").
// Only process if the string is non-empty and length is 280 characters or less.

const myString = "hello pankaj madhikar";

const generateHash = (str) => {
  if (!!str && str?.trim()?.length > 0 && str?.length <= 280) {
    str = str?.split(" ");

    console.log(str);

    str = str.map((ele) => {
      console.log(ele);
      return ele.replace(ele[0], ele[0].toUpperCase());
    });

    console.log("#" + str.join(""));
  }
};

generateHash(myString);
