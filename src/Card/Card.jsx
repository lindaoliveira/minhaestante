import React from "react";
import "./Card.css"
import LivroAvaliado from "../LivroAvaliado/LivroAvaliado";
import foto from "../books.png"

function Card(props){
    return(
        <div id="card-conteudo">
                <div id="imagem">
                 <LivroAvaliado nota="3" capa= {foto}/>
                </div>
                <div id="texto">
                    <h3>{props.titulo}</h3>
                    <p>{props.texto}</p>
                </div>
        </div>
);
};

export default Card;