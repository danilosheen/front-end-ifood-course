import React from "react";
import { SecaoCapa } from "./SecaoCapa/capa";
import { SecaoProdutos } from "./SecaoProdutos/produtos";
import { SecaoSobre } from "./SecaoSobre/sobre";
import { SecaoContato } from "./SecaoContato/contato";

export default function Conteudo(){
    return(
        <body>
            <SecaoCapa></SecaoCapa>
            <SecaoProdutos></SecaoProdutos>
            <SecaoSobre></SecaoSobre>
            <SecaoContato></SecaoContato>
        </body>
    )
}