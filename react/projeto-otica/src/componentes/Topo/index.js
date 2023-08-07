import React from 'react';
import Logo from '../../assets/logo.png'

export default function Topo(){
    return(
        <header>
            <div>
                
                <img src={Logo} alt="" />
                <nav>
                    <a href="../Conteudo/SecaoProdutos/">PRODUTOS</a>
                    <a href="../Conteudo/SecaoSobre/">SOBRE</a>
                    <a href="../Conteudo/SecaoContato/">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}