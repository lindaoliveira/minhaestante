import React from "react";
import catalogo from "./Catalogo.css"


function Estante (props){
    return (
        <div>
        <img src={props.imagemlivro} alt="imagem"  />
        <p>{props.icone}</p>

        </div>


    )
};

export default Estante;
