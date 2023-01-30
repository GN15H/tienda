import useCart from "../hooks/useCart";
import "../hojas-de-estilo/BotonComprar.css"
import axios from "axios";

const URI = 'http://localhost:8000/productos/'

function BotonComprar({objList, total}) {
    const cart = useCart();

    //Function that allows buying by a cycle that makes update petitions to the DB
    const Checkout = async (e) =>{
        e.preventDefault();
        for(let i=0;i<Object.keys(cart.boughtObj).length; i++){
            await axios.put(URI + objList[i].info.id, 
                {stock: parseInt(objList[i].info.stock)-parseInt(cart.boughtObj[objList[i].info.id])})
                .then(({data}) =>{
                    alert('Compra Realizada')
                })
                .catch(({response})=>{
                    alert(response.message)
                })
        }
        window.location.href = '/productos';
    }

    if (Object.keys(cart.boughtObj).length !== 0){
        return (

            <div className="contenedor-boton-comprar-total">
                <button className="boton-comprar-total" onClick={Checkout}>COMPRAR</button> 
                <h3 className="total-compra">TOTAL: {total}$</h3>
            </div>
        )
    }


}

export default BotonComprar;