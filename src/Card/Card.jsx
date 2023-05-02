import React from "react";
import "./Card.css"

function Card(props){
    return(
        <div id="card-conteudo">
                <div id="imagem">
                    <img src={props.imglivro} alt="imagem"  />
                </div>
                <div id="texto">
                    <h2>{props.titulo}</h2>
                    <p>{props.texto}</p>
                </div>
        </div>
);
};

export default Card;