import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import axios from 'axios'

function Payment(props){
    const stripe = useStripe()
    const elements = useElements()

    const submit = async (e) => {//funcion que crea un metodo de pago
        e.preventDefault();
        stripe.createPaymentMethod({
            type:"card", 
            card:elements.getElement(CardElement)
        })
        .then( async (data) =>{ //avisa en caso de ser un proceso invaido
            if(!data.paymentMethod){
                alert('No valido')
                return 
            }
            console.log('Metodo creado');
            await axios.post({ //genera una petición donde manda los datos de la compra al backend
                id:data.paymentMethod.id, 
                amount:10000,description:'Payment'
            }).then((res) =>{
                props.Checkout(e)
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