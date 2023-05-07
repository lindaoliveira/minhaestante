import React from "react";
import "./BtnMenu.css"

function BtnMenu(props){
    return(
        <div className="btn-menu">
            <button>{props.icone}{props.nomeBtn}</button>
        </div>
    );
}

export default BtnMenu;