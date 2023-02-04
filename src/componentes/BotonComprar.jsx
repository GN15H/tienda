import useCart from "../hooks/useCart";
import "../hojas-de-estilo/BotonComprar.css"
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";
//Componente que contiene el boton de comprar

// const URI = 'http://localhost:8000/productos/'
const URI = 'https://react-backend.onrender.com/productos/'

const StripePromesing = loadStripe('pk_test_51MWqvEH14MvRoLxV0ls6y6bbsLJsiRwd6aWUbvRfwZgMRWCL3pcKd5YtvFLh8ufk6so1AnVE1JjunhYRbx7dnyRC00IB2DhJIq')
//se carga la clave publica del checkout

function BotonComprar({objList, total}) {

    const cart = useCart(); //obtiene el contexto de carrito

    //función que cicla peticiones de actualizar el stock de la base de datos
    //volviendo a arreglo el objeto de compra
    const Checkout = async (e) =>{
        e.preventDefault();
        for(let i=0;i<Object.keys(cart.boughtObj).length; i++){
            await axios.put(URI + objList[i].info.id,               
                {stock: parseInt(objList[i].info.stock)-parseInt(cart.boughtObj[objList[i].info.id])}) //hace el calculo de restar el stock actual con la cantidad comprada
                .then(({data}) =>{
                    alert('Compra Realizada')
                })
                .catch(({response})=>{
                    alert(response.message)
                })
        }
        window.location.href = '/productos';
    }
    //renderiza el boton de comprar
    //en caso de no haber productos en el carrito no se muestra el boton
    if (Object.keys(cart.boughtObj).length !== 0){
        return (
            <>
            <Elements stripe={StripePromesing}>
                <Payment/>
            </Elements>

            <div className="contenedor-boton-comprar-total">
                <button className="boton-comprar-total" onClick={Checkout}>COMPRAR</button> 
                <h3 className="total-compra">TOTAL: {total}$</h3>
            </div>
            
            </>
        )
    }


}


export default BotonComprar;

