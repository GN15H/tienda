import { useState, useEffect } from "react"
import '../hojas-de-estilo/Carrito.css'
import axios from 'axios'
import Compras from './Compras'
import useUser from "../hooks/useUser"
import { Navigate } from 'react-router-dom'
import useCart from "../hooks/useCart"
import BotonComprar from "./BotonComprar"

// const URI = 'http://localhost:8000/productos/'
const URI = 'https://react-backend.onrender.com/productos/'



function Carrito() {

    const cart = useCart()//obtiene el contexto del carro
    const user = useUser() //obtiene e contexto del usuario

    const buy = id => { //funcion que le suma cantidad al objeto comprado, afectando el contexto
        if (cart.boughtObj.hasOwnProperty(id)) {
            cart.boughtObj[id]++;
        } else {
            cart.boughtObj[id] = 1;
        }
        cart.setBoughtObj({...cart.boughtObj})
    }
    
     const deleteBought = id => { //funcion que le quita cantidad al objeto comprado, afectando el contexto
        if (cart.boughtObj[id] >= 0) {
            cart.boughtObj[id]--;
        }
        if (cart.boughtObj[id] === 0) { //en caso de haber cero cantidad quitarlo del objeto
            delete cart.boughtObj[id];
        }
        cart.setBoughtObj({...cart.boughtObj})
    }
    

    const [prods, setProd] = useState([]); //usestate que se utilizara para almacenear la información de los registros
    useEffect(() => {
        const getProds = async () => { //genera petición de todos los productos e imagenes
            const res = await axios.get(URI)
            const resImage = await axios.get(URI + 'images/')
            let response = []
            for (let i = 0; i < res.data.length; i++) {
                response.push({ info: res.data[i], imagen: resImage.data[i] })//arreglo con productos e imagen
            }
            const bought = []
            Object.keys(cart.boughtObj).map(id => bought.push(response[id - 1]))//arreglo que solo obtiene los productos que han sido añadidos
            setProd(bought)
        }
    

        getProds()
    }, [cart]);

   
    if (!user.auth) { //en caso de no estar registrado lo retorna al login
        return <Navigate to={'/login'} />
    }

    let total = 0
    
    return ( //contenedor que mapea el arreglo de los productos que han sido añadidos al carrito
        <div className="contenedor-contador-carrito">
            <div className="contenedor-contador-carrito-detalles">
                <h3>CANTIDAD DE PRODUCTOS:</h3>
            </div>
            <div className="contenedor-compras">
                {
                    prods.map((product, index) => //naepo del arreglo que muestra los productos
                        {total = total + product.info.precio*cart.boughtObj[product.info.id]
                          return(  
                            <Compras
                                key={index}
                                id={product.info.id}
                                nombreProducto={product.info.nombreProducto}
                                precio={product.info.precio}
                                cantidad={cart.boughtObj[product.info.id]}
                                imagen={product.imagen}
                                handleBuy={buy}
                                handleDelete={deleteBought}
                                objList={prods}
                            />
                          )

                        }

                    )
                }
            </div>
                
            <BotonComprar 
                objList={prods}
                total={total}
             />
        </div>
    )
}

// export default {Carrito, boughtObj, buy};
export default Carrito;