import { useState } from "react"
import Producto from "./Producto";
import productos from './ProductosPrueba'
import '../hojas-de-estilo/ContenedorProductos.css'


function ContenedorProductos(props){  
     return(
        <>
            <div className="contenedor-lista-productos">
                {
                    productos.map((producto) => 
                        <Producto 
                            nombreProducto={producto.nombre}
                            detallesProducto={producto.detalles}
                        />
                       
                    ) 
                }
                
            </div>
        </>
     )
 }

 export default ContenedorProductos
