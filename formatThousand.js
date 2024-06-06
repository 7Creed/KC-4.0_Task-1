function formatThousand(num) {
  // const formattedNum = num.toLocaleString();
  // return formattedNum;

  const newNum = num.toString().split("").reverse().join("");
  let result = "";

  for (let i = 0; i < newNum.length; i += 3) {
    if (i > 0) {
      result += ",";
    }
    result += newNum.slice(i, i + 3);
  }

  return result.split("").reverse().join("");
}

console.log(formatThousand(1000));
