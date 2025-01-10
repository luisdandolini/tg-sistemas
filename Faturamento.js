const fs = require("fs");
const path = require("path");

const dadosPath = path.join(__dirname, "dados.json");
const dadosRaw = fs.readFileSync(dadosPath, "utf8");
const dados = JSON.parse(dadosRaw);

const diasComFaturamento = dados.filter((item) => item.valor > 0);

let menorValor = diasComFaturamento[0].valor;
let maiorValor = diasComFaturamento[0].valor;

diasComFaturamento.forEach((item) => {
  if (item.valor < menorValor) menorValor = item.valor;
  if (item.valor > maiorValor) maiorValor = item.valor;
});

const somaFaturamento = diasComFaturamento.reduce(
  (acc, curr) => acc + curr.valor,
  0
);
const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(
  (item) => item.valor > mediaFaturamento
).length;

const formatadorBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(
  "Menor valor de faturamento em um dia do mês:",
  formatadorBRL.format(menorValor)
);
console.log(
  "Maior valor de faturamento em um dia do mês:",
  formatadorBRL.format(maiorValor)
);
console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
