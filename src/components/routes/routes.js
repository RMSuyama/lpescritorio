// Rotas.js
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profissionais from "../pages/Profissionais";
import Vagas from "../pages/Vagas";
import Publicacoes from "../pages/Publicacoes";
import Atuacao from '../pages/Atuacao';
import Politicasdeprivacidade from "../pages/Politicasdeprivacidade";
import PBlogView from "../../components/pages/pBlogView";
import posts from "../services/posts"; // Importe o array de posts do Blogview

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/atuacao" element={<Atuacao />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
        <Route path="/politicasdeprivacidade" element={<Politicasdeprivacidade />} />
        <Route
          path="/posts/:postId"
          element={<PBlogView posts={posts} />} // Passar o array de posts como prop
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;

