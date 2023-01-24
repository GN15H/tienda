import React from "react";
import amazonLogo from '../imagenes/amazon-logo.png'
import carrito from '../imagenes/carrito.webp'
import '../hojas-de-estilo/Header.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <Link className="link-productos" to={'/productos'}>
                <div className="contenedor-imagen-logo">
                    <img className="imagen-logo" src={amazonLogo} alt="Logo"></img>
                </div>
            </Link>
            <Link className="link-carrito" to={'/carrito'}>
                <div className="contenedor-carrito">
                    <img className="imagen-carrito" src={carrito}></img>
                </div>
            </Link>
        </div>
    
    )

}


export default Header;
