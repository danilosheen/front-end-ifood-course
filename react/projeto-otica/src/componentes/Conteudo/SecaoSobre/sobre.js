import React from "react";
import ImgLoja from "../../../assets/loja.png";
import ImgAtendimento from "../../../assets/atendimento.png";
import "./sobre.css";

export default function SecaoSobre() {
  return (
    <section id="sobre" className="secao-sobre">
      <div className="limitar-secao container-sobre">
        <h3>QUEM SOMOS NÓS?</h3>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.{" "}
        </p>

        <div className="box-cards">
          <img src={ImgLoja} alt="img-loja" />

          <div className="card">
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className="card">
            <h4>Atendimento flexível</h4>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>

          <img src={ImgAtendimento} alt="img-atend" />
        </div>
      </div>
    </section>
  );
}
