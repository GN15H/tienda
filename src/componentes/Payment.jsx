import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import axios from 'axios'

function Payment(){
    const stripe = useStripe()
    const elements = useElements()

    function submit(e){//funcion que crea un metodo de pago
        e.preventDefault();
        stripe.createPaymentMethod({
            type:"card", 
            card:elements.getElement(CardElement)
        })
        .then((data) =>{ //avisa en caso de ser un proceso invaido
            if(!data.paymentMethod){
                alert('No vaido')
                return 
            }
            axios.post({ //genera una petición donde manda los datos de la compra al backend
                id:data.paymentMethod.id, 
                amount:10000,description:'Payment'
            }).then((res) =>{
                if(res.status == 204){//Aviso en caso de haber sido exitoso
                    console.log('Exito');
                }
            })
        })
    }
    //boton para hacer el checkout
    return (
        <form onSubmit={submit}>
            <CardElement/>
            <button>
                PAGAR
            </button>
        </form>



    )

 }

 export default Payment;