const string = "JavaScript es un maravilloso lenguaje de programación. Aprendamos JavaScript!";

const replacedString = string.replace("JavaScript", "TypeScript");
const replacedAllString = string.replaceAll("JavaScript", "TypeScript");

console.log(replacedString);
// TypeScript es un maravilloso lenguaje de programación. Aprendamos JavaScript!
console.log(replacedAllString);
// TypeScript es un maravilloso lenguaje de programación. Aprendamos TypeScript!