import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import axios from 'axios'

function Payment(){
    const stripe = useStripe()
    const elements = useElements()

    function submit(e){
        e.preventDefault();
        stripe.createPaymentMethod({
            type:"card", 
            card:elements.getElement(CardElement)
        })
        .then((data) =>{
            if(!data.paymentMethod){
                alert('No vaido')
                return 
            }
            axios.post({
                id:data.paymentMethod.id, 
                amount:10000,description:'Payment'
            }).then((res) =>{
                if(res.status == 204){
                    console.log('Exito');
                }
            })
        })
    }

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