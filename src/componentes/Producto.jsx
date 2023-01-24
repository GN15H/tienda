import productoPrueba from '../imagenes/producto-prueba.webp'
import '../hojas-de-estilo/Producto.css'
import  { Link } from 'react-router-dom'


function Producto(props){
   
    return(
        <div className="contenedor-producto" >
           
                <div className="contenedor-imagen-producto">
                    <img src={`${props.imagen}`} alt="Imagen de Producto"></img>
                </div>
                <div className="detalles-producto">
                    <h4>{props.nombreProducto}</h4>
                    <p>{props.detallesProducto}</p>
                    <p>{props.precio}$</p>
                    {/* <Link to={`/producto`}><button className='btn btn-info'>COMPRAR</button></Link> */}
                    <Link to={`/productos/${props.id}`}><button className='btn btn-info'>COMPRAR</button></Link>
                </div>

        </div>

    )
}

export default Producto; 