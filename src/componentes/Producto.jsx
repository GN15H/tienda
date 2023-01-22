import productoPrueba from '../imagenes/producto-prueba.webp'
import { useState } from 'react';
import '../hojas-de-estilo/Producto.css'

function Producto(props){
    return(
        <div className="contenedor-producto">
            <div className="contenedor-imagen-producto">
                <img src={productoPrueba} alt="Imagen de Producto"></img>
            </div>
            <div className="detalles-producto">
                <h4>{props.nombreProducto}</h4>
                <p>{props.detallesProducto}</p>
            </div>
        </div>

    )
}

export default Producto;