import React from "react";
import useDados from "../Dados/useDados";
import "./style.css";

export function PaginaInicial() {
  //desestruturação
  const { dados, loading, error } = useDados();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os dados da API.</p>;
  }

  return (
    <div>
      <div className="container-cats">
        <h1>Consumo de API - 10 gatos aleatórios</h1>
        <ul className="list-cats">
          {dados.map((item, index) => (
            <li key={index}>
              <img src={item.url} alt={"img" + { index }} />
            </li>
          ))}
        </ul>
      </div>
      <footer className="rodape">
        <p>Desenvolvido por Danilo Ferreira</p>
      </footer>
    </div>
  );
}
