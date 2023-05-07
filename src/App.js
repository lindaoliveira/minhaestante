import React, { useState } from 'react';
import './App.css';
import Cabecalho from './Header/Header';
import logo from './Blackcat.svg';
import Linhas from './Line/Line';
import Estante from './Catalogo/Catalogo';
import Card from './Card/Card';
import Menu from './Menu/Menu';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Resenha from './Resenha/Resenha';
import BtnContagem from './BtnContagem/BtnContagem';
import ContagemContext from './Context/ContagemContext';
import Lidos from './Lidos/Lidos';

function App() {
  const [contagem, setContagem] = useState(0)
  return (
    <div className="App">
    <Router>

    <ContagemContext.Provider value={{contagem, setContagem}}>
        <Cabecalho imagem= {logo}
      titulo= "Linda Oliveira"
         contagem={contagem} />
      </ContagemContext.Provider>


    <Linhas />

    <main>

      <div id="main-um">
        <Menu/>      
      </div>

      <Routes> 
        <Route path="/" element= {""} />
        <Route path="/Avaliados" element={ <Resenha/>} />
      </Routes>

      <div id="catalogo">
        <div class="tituloh2">
          <h2>Minha Estante:</h2>
        </div>

        <div id="main-dois"> 
        <Estante />
        </div>
      </div>

    </main>

      <Linhas />

      <div class="tituloh2">
        <h2>Últimas Avaliações:</h2>
      </div>

    <footer>

      <Card 
      titulo= "Título da Resenha"
      texto= "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."/>

      <Card 
      titulo= "Título da Resenha"
      texto= "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."/>

    </footer>

    </Router>
    </div>
  );
}

export default App;
