function inverterString(str) {
  let invertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }

  return invertida;
}

const original = "Target Sistemas";
const resultado = inverterString(original);

console.log("String original:", original);
console.log("String invertida:", resultado);
