import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profissionais from "../pages/Profissionais";
import Vagas from "../pages/Vagas";
import Publicacoes from "../pages/Publicacoes";
import Atuacao from '../pages/Atuacao';
import Contato from "../pages/Contato";


const Rotas = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/atuacao" element={<Atuacao />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>
    </BrowserRouter>
    
  );
};

export default Rotas;