import '../hojas-de-estilo/Carrito.css'

function Carrito(props){
    return(
        <div className="contenedor-contador-carrito">
            <div className="contenedor-contador-carrito-detalles">
                <h3>CANTIDAD DE PRODUCTOS:</h3>
            </div>
            <div className="contenedor-carrito-cantidad">
                <h1>{`${props.carrito}`}</h1>
            </div>
        </div>
    )
}

export default Carrito;