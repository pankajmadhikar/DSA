// Question: Write a function that takes a string and returns (or logs) the longest word in it.
// If the string is empty or only whitespace, log the string and return.

let myString = "Hello Pankaj Madhikar, hows your day";

const LongGetWordString = (myString) => {
  if (myString?.trim()?.length < 1) {
    console.log(myString);
    return;
  }
  const words = myString?.split(" ");
  const descendingWord = words?.sort((a, b) => b.length - a.length);
  console.log(descendingWord[0]);
};

LongGetWordString(myString);
