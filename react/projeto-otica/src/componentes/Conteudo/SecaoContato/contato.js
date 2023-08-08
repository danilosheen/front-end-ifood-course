import React from "react";
import ImgLocal from "../../../assets/local.png";
import ImgTelefone from "../../../assets/telefone.png";
import ImgEmail from "../../../assets/email.png";

import ImgFb from "../../../assets/fb.png";
import ImgIg from "../../../assets/ig.png";
import ImgTt from "../../../assets/tt.png";

import "./contato.css";

export default function SecaoContato() {
  return (
    <section id="contato" className="secao-contato">
      <div className="limitar-secao">
        <h3>Fale conosco</h3>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>

        <div className="contato-container">
          <div className="contato-conteudo">
            <h4>Contato</h4>
            <div>
              <img
                src={ImgLocal}
                title="Ícone local"
                alt="Pino de localização"
              />
              <span>Nova Iguaçu, RJ</span>
            </div>
            <div>
              <img
                src={ImgTelefone}
                title="Ícone telefone"
                alt="Ícone de um telefone"
              />
              <span>(21) 9999-9999</span>
            </div>
            <div>
              <img
                src={ImgEmail}
                title="Ícone email"
                alt="Ícone de uma carta"
              />
              <span>contato@oticavida.com</span>
            </div>
          </div>
          <div className="contato-conteudo">
            <h4>Nossas Redes Sociais</h4>
            <div>
              <img src={ImgFb} title="Ícone facebook" alt="logo do facebook" />
              <span>/OticaVida</span>
            </div>
            <div>
              <img
                src={ImgIg}
                title="Ícone instagram"
                alt="logo do instagram"
              />
              <span>@oticavidarj</span>
            </div>
            <div>
              <img src={ImgTt} title="Ícone twitter" alt="logo do twitter" />
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
