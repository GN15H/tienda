import '../hojas-de-estilo/Compras.css'

function Compras(props){
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
        </div>
    </div>

    )

}

export default Compras;