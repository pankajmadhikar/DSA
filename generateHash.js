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
