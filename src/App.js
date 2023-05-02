import './App.css';
import Cabecalho from './Header/Header';
import logo from './Blackcat.svg';
import Linhas from './Line/Line';
import Botoes from "./Menu/Menu";
import Estante from './Catalogo/Catalogo';
import foto from "./books.png"
import Card from './Card/Card';
import { FcLike } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcReading } from "react-icons/fc";


function App() {
  return (
    <div className="App">
      
      <Cabecalho
      imagem= {logo}
      titulo= "Linda Oliveira" />
      
      <Linhas />

      <main>

      <div id="main-um">
      <Botoes icones= {<FcLike/>} texto="Favoritos" />
      <Botoes icones= {<FcReading/>} texto="Desejados" />
      <Botoes icones= {<FcCheckmark/>} texto="Avaliados" />
      <Botoes icones= {<FcSms/>} texto="Resenhas" />
  
      </div>

      <div class="tituloh2">
        <h2>Minha Estante:</h2>
      </div>

      <div id="main-dois"> 
      <Estante 
      imagemlivro= {foto}
      icone={<FcLike/>}/>

      <Estante 
      imagemlivro= {foto}
      icone={<FcLike/>} />

     <Estante 
      imagemlivro= {foto}
      icone={<FcLike/>}/>

      <Estante 
      imagemlivro= {foto}
      icone={<FcLike/>}/>

      </div>


      </main>

      <Linhas />

      <div class="tituloh2">
        <h2>Últimas Avaliações:</h2>
      </div>

      <footer>

      <Card 
      imglivro= {foto}
      titulo= "Título da Resenha"
      texto= "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."/>

      <Card 
      imglivro= {foto}
      titulo= "Título da Resenha"
      texto= "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."/>

      </footer>

    </div>
  );
}

export default App;
