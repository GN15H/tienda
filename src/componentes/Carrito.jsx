import { useState, useEffect } from "react"
import '../hojas-de-estilo/Carrito.css'
import axios from 'axios'
import Compras from './Compras'

export let boughtObj= [1,0,0,0,0,0,0,0,0,0]

export const buy = (id)=>{
    boughtObj[id-1] ++
    console.log(boughtObj);
}

export const discard = (id)=>{
    if (boughtObj[id-1]>0){
        boughtObj[id-1] --
    }
    console.log(boughtObj);
}

// export let boughtObj = {};


const URI = 'http://localhost:8000/productos/'


function Carrito(){
    
    
    // const [prods, setProd] = useState([])
    // useEffect( ()=>{
    //     getProds()
    // }, [])
    
    // const getProds= async ()=>{
    //     const res = await axios.get(URI)
    //     const resImage = await axios.get(URI + 'images/')
    //     //console.log(res.data);
    //     //console.log(images.data);
    //     for (let i = 0; i< res.data.length; i++){
    //         response.push({datos: res.data[i], imagen: resImage.data[i]})
    //     }
    //     let response = []
    //     //console.log(blogs[0].imagen);
    //     setProd(response)
    //     //console.log(response);
    // }
    // //console.log(response[0].datos);


    return(
        <div className="contenedor-contador-carrito">
            <div className="contenedor-contador-carrito-detalles">
                <h3>CANTIDAD DE PRODUCTOS:</h3>
            </div>
            <div className="contenedor-compras">
                {
                    // boughtObj.map((product, index)=>{
                    //     if (product>0){
                    //         return ( 
                    //         <Compras
                    //           key={index}
                    //           id={index}
                    //           nombreProducto={index+1}
                    //           cantidad={product}
                    //           />
                    //         )
                    //     }

                    // }
                     

                    //     )
                }
            </div>
        </div>
    )
}

// export default {Carrito, boughtObj, buy};
export default Carrito;