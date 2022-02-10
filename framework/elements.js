const div = (strings, ...args) => {
  return strings.reduce(
    (previouse, currentString, index) =>
      previouse + currentString + (args[index] || ""),
    ""
  );
};

const firstName = "Kyohei";
const lastName = "Yama";

const result = div`Hello ${firstName} ${lastName} san`;
console.log(result);
