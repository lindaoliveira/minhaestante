import React from "react";
import "./Menu.css"
import BtnMenu from "../BtnMenu/BtnMenu";
import { FcHome, FcLike, FcOk, FcSms, FcReading } from "react-icons/fc";
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <div>
            <Link to="/">
                <BtnMenu icone={<FcHome/>} nomeBtn="Home" />
            </Link>
            <Link to="/Avaliados"> 
                <BtnMenu icone={<FcOk />} nomeBtn="Avaliados" />
            </Link>
            <BtnMenu icone={<FcLike />} nomeBtn="Favoritos" />
            <BtnMenu icone={<FcReading />} nomeBtn="Desejados" />
            <BtnMenu icone={<FcSms />} nomeBtn="Resenhas" />
        </div>
    );
}

export default Menu;