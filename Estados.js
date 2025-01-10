const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const valores = Object.values(faturamentoEstados);
const valorTotal = valores.reduce((acc, curr) => acc + curr, 0);

for (const estado in faturamentoEstados) {
  const percentual = (faturamentoEstados[estado] / valorTotal) * 100;
  console.log(
    `${estado} – R$${faturamentoEstados[estado].toFixed(2)}  |  ` +
      `Percentual: ${percentual.toFixed(2)}%`
  );
}

console.log(
  "\nValor Total:",
  valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
);
