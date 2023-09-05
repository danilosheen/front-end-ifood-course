import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PaginaInicial } from "../PaginaInicial";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PaginaInicial/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;