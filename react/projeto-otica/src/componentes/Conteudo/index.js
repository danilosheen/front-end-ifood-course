import React from "react";
import SecaoCapa from "./SecaoCapa/capa";
import SecaoProdutos from "./SecaoProdutos/produtos";
import SecaoSobre from "./SecaoSobre/sobre";
import SecaoContato from "./SecaoContato/contato";

export default function Conteudo() {
  return (
    <main>
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </main>
  );
}
