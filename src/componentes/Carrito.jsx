import { useState, useEffect } from "react"
import '../hojas-de-estilo/Carrito.css'
import axios from 'axios'
import Compras from './Compras'
import useUser from "../hooks/useUser"
import { Link, Navigate, useLocation } from 'react-router-dom'
import useCart from "../hooks/useCart"
import BotonComprar from "./BotonComprar"

const URI = 'http://localhost:8000/productos/'







function Carrito() {

    const cart = useCart()
    const user = useUser()

    const buy = id => {
        if (cart.boughtObj.hasOwnProperty(id)) {
            cart.boughtObj[id]++;
        } else {
            cart.boughtObj[id] = 1;
        }
        cart.setBoughtObj({...cart.boughtObj})
    }
    
     const deleteBought = id => {
        if (cart.boughtObj[id] >= 0) {
            cart.boughtObj[id]--;
        }
        if (cart.boughtObj[id] == 0) {
            delete cart.boughtObj[id];
        }
        cart.setBoughtObj({...cart.boughtObj})
    }
    

    const [prods, setProd] = useState([]);
    useEffect(() => {
        getProds()
    }, [cart]);

    const getProds = async () => {
        const res = await axios.get(URI)
        const resImage = await axios.get(URI + 'images/')
        let response = []
        for (let i = 0; i < res.data.length; i++) {
            response.push({ info: res.data[i], imagen: resImage.data[i] })
        }
        const bought = []
        Object.keys(cart.boughtObj).map(id => bought.push(response[id - 1]))
        setProd(bought)
    }

    if (!user.auth) {
        return <Navigate to={'/login'} />
    }

    let total = 0
    
    return (
        <div className="contenedor-contador-carrito">
            <div className="contenedor-contador-carrito-detalles">
                <h3>CANTIDAD DE PRODUCTOS:</h3>
            </div>
            <div className="contenedor-compras">
                {
                    prods.map((product, index) =>
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