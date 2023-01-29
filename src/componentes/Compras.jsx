import '../hojas-de-estilo/Compras.css'
import { buy, boughtObj, discard, deleteBought } from './Carrito'
import useUser from '../hooks/useUser'


function Compras(props){
    
    const add = ()=>{
        props.handleBuy(props.id)
    }
    const less = ()=>{
        props.handleDelete(props.id)
    }


    return(

    <div className="compras">
        <div className="compras-contenedor-imagen">
            <img src={props.imagen} className="compras-imagen"></img>
        </div>
        <div className="compras-detalles">
            <p>Compra</p>
            <p><b>Producto:</b> {props.nombreProducto}</p>
            <p><b>Cantidad:</b> {props.cantidad}</p>
            <p><b>Total:</b>  {props.precio*props.cantidad}$</p>
            <button className='boton-mas1' onClick={add}>+</button>
            <button className='boton-menos1' onClick={less}>-</button>
        </div>
    </div>

    )

}

export default Compras;