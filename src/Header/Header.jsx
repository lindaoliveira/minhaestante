import React from "react";
import Header from './Header.css'
import Lidos from "../Lidos/Lidos";


function Cabecalho (props) {     
    return (
        <header>
            <div id= 'principal'>
                <img src={props.imagem}/>
                <h1>{props.titulo}</h1>
            </div>

            <div class= 'leituras'>
                <Lidos 
                numero="130"
                leituras="lidos"/>
            </div>

            <div class='leituras'>
                <Lidos 
                numero="60"
                leituras="vou ler"/>
            </div>


        </header>
    )
}

export default Cabecalho;