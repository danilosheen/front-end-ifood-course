import rl from "readline-sync";

console.log("---- Aplicação de Juros ----\n");

let valorDevido = rl.question("Informe o valor devido: ");
let diasDeAtraso = rl.question(
  "Informe quantos dias se passaram desde o vencimento do boleto: "
);

function mostraDiasAtrasados(valorDevido, diasDeAtraso) {
  console.log("\nValor original da dívida: R$", valorDevido);
  console.log("Dias atrasados: ", diasDeAtraso);
}

function mostraValorDivida(valorDevido) {
  console.log("Valor total com juros: R$", valorDevido);
}

if (diasDeAtraso == 0) {
  console.log("Você está em dia!");
} else if (diasDeAtraso > 15) {
  mostraDiasAtrasados(valorDevido, diasDeAtraso);
  valorDevido = (valorDevido * 1.1).toFixed(0);
  console.log("Taxa de juros: 10%");
  mostraValorDivida(valorDevido);
} else {
  mostraDiasAtrasados(valorDevido, diasDeAtraso);
  valorDevido = (valorDevido * 1.05).toFixed(0);
  console.log("Taxa de juros: 5%");
  mostraValorDivida(valorDevido);
}
