import useCart from "../hooks/useCart";
import "../hojas-de-estilo/BotonComprar.css"
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";

const URI = 'http://localhost:8000/productos/'

const StripePromesing = loadStripe('pk_test_51MWqvEH14MvRoLxV0ls6y6bbsLJsiRwd6aWUbvRfwZgMRWCL3pcKd5YtvFLh8ufk6so1AnVE1JjunhYRbx7dnyRC00IB2DhJIq')


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

