import '../hojas-de-estilo/Compras.css'

function Compras(props){
    return(

    <div className="compras">
        <div className="compras-contenedor-imagen">
            <img src={props.imagen} className="compras-imagen"></img>
        </div>
        <div className="compras-detalles">
            <p>Compra</p>
            <p>{props.nombreProducto}</p>
            <p>{props.cantidad}</p>
        </div>
    </div>

    )

}

export default Compras;