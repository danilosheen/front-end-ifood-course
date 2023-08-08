import React from "react";
import Logo from "../../assets/logo.png";
import "./topo.css";

export default function Topo() {
  return (
    <header>
      <div className="limitar-secao">
        <img
          src={Logo}
          alt="imagem de um óculos à direita e o nome da ótica à esquerda"
        />

        <nav>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}
