import { useState, useEffect } from "react"
import '../hojas-de-estilo/Carrito.css'
import axios from 'axios'
import Compras from './Compras'

const URI = 'http://localhost:8000/productos/'


 export let boughtObj = {};

 export const buy = id => {
    if (boughtObj.hasOwnProperty(id)) {
        boughtObj[id]++;
    } else {
        boughtObj[id] = 1;
    }
   return boughtObj;
}

export const deleteBought = id => {
    if (boughtObj[id] >= 0){
        boughtObj[id]--;
    }
    if (boughtObj[id] == 0) {
        delete boughtObj[id];
    }
    return boughtObj;
}



function Carrito(){
    
    

    const [prods, setProd] = useState([]);
    useEffect(() => {
        getProds()
    }, []);

    const getProds = async ()=> {
        const res = await axios.get(URI)
        const resImage = await axios.get(URI + 'images/')
        let response = []
        for (let i= 0; i < res.data.length; i++){
            response.push({ info: res.data[i], imagen: resImage.data[i]})
        }
        const bought = []
        Object.keys(boughtObj).map(id => bought.push(response[id-1]))
        console.log(bought);
        setProd(bought)
    }


    return(
        <div className="contenedor-contador-carrito">
            <div className="contenedor-contador-carrito-detalles">
                <h3>CANTIDAD DE PRODUCTOS:</h3>
            </div>
            <div className="contenedor-compras">
                {
                    prods.map((product,index)=>
                        <Compras
                        key={index}
                        id={product.info.name}
                        nombreProducto={product.info.nombreProducto}
                        precio={product.info.precio}
                        cantidad={boughtObj[product.info.id]}
                        imagen={product.imagen}
                        />
                       
                    )
                }
            </div>
        </div>
    )
}

// export default {Carrito, boughtObj, buy};
export default Carrito;