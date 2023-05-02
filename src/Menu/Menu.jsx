import React from "react";
import menu from "./Menu.css"

function Botoes(props){
    return(
        <div className="confBotoes" >
        <button>{props.icones} {props.texto}</button>
        </div>

    );
}
export default Botoes;