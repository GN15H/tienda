import React from "react";
import amazonLogo from '../imagenes/amazon-logo.png'
import '../hojas-de-estilo/Header.css'
import { Link } from "react-router-dom";
import LoginRegisterProfile from "./LoginRegisterProfile";

function Header({setGlobal}){
    
    //div que muestra, dependiendo de la autentiiación ciertos componentes
    //header

    return(
        <div className="header">
            <Link className="link-productos" to={'/productos'}>
                <div className="contenedor-imagen-logo">
                    <img className="imagen-logo" src={amazonLogo} alt="Logo"></img>
                </div>
            </Link>
            <div className="contenedor-links">
                {/* componente donde se puede renderizar el carrito o el login */}
                <LoginRegisterProfile setGlobal={setGlobal} className="contenedor-links"/>
             
                

            </div>

        </div>
    
    )

}


export default Header;
