import React from "react";
import amazonLogo from '../imagenes/amazon-logo.png'
import '../hojas-de-estilo/Header.css'

function Header(){
    return(
        <div className="header">
            <div className="contenedor-imagen-logo">
                <img className="imagen-logo" src={amazonLogo} alt="Logo"></img>
            </div>
        </div>
    
    )

}


export default Header;
