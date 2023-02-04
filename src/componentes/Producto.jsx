import '../hojas-de-estilo/Producto.css'
import  { Link } from 'react-router-dom'


function Producto(props){
    
    const esAdmin = localStorage.getItem('isAdmin')//obtiene el admin desde el localstorage
  
    //carta contenedora de los datos del producto
    //en caso de no ser admin redirecciona al carrito al comprar, si es admin redirecciona al componente de editar
    return(
        <div className="contenedor-producto" >
           
                <div className="contenedor-imagen-producto">
                    <img src={`${props.imagen}`} alt="Imagen de Producto"></img>
                </div>
                <div className="detalles-producto">
                    <h4>{props.nombreProducto}</h4>
                    <p>{props.detallesProducto}</p>
                    <p>{props.precio}$</p>
                    <Link to={`/${esAdmin === 'true' ? 'editar': 'productos'}/${props.id}`}><button className='boton-comprar'>{esAdmin === 'true' ? 'EDITAR': 'COMPRAR'}</button></Link>
                </div>

        </div>

    )
}

export default Producto; 