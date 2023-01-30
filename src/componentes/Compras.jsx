import '../hojas-de-estilo/Compras.css'
import { buy, boughtObj, discard, deleteBought } from './Carrito'
import useUser from '../hooks/useUser'
import useCart from '../hooks/useCart'
import axios from 'axios'

const cond = 'http://localhost:8000/productos'

function Compras(props){
    const cart = useCart()
    
    const add = async ()=>{
        const res = await axios.get(cond + '/book/' + props.id + '?f=book')
        if (res.data === 'Booked'){
            props.handleBuy(props.id)
            //console.log(props.objList);
        }else if(res.data === 'Stockout'){
            return alert('Item out of stock')
        }

    }
    const less = async()=>{
        const res = await axios.get(cond + '/book/' + props.id + '?f=unbook')

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