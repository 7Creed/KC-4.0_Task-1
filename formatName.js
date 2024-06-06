function formatName(string) {
  const newString = string.trim().split(" ");
  let result = "";

  console.log(newString);

  for (let i = 0; i < newString.length; i++) {
    result +=
      newString[i][0].toUpperCase() + newString[i].slice(1).toLowerCase();
    if (i < newString.length - 1) {
      result += " ";
    }
  }
  return result;
}

console.log(formatName("string name"));
console.log(formatName("   victor red   "));
