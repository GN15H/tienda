import productoPrueba from '../imagenes/producto-prueba.webp'
import '../hojas-de-estilo/VistaProducto.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'




const URI = 'http://localhost:8000/productos/1'

const cond = 'http://localhost:8000/productos'

function VistaProducto(props){
    
    const location = useLocation().pathname
    // URI = URI + location
    console.log(cond)
    console.log('location ' + location);
    console.log('URI ' + cond + location);
    const dato = location.length - 1

    const [blog, setBlog] =useState([])
    useEffect( ()=>{
        getProductList()
    }, [])

    const getProductList = async ()=>{
        const res = await axios.get(cond + location)
        setBlog(res.data)
        console.log(res.data);
    }


    return(
        <div className='contenedor-general'>

            <div className="contenedor-vista-producto">
                <div className="contenedor-vista-producto-imagenes">
                    <img src={productoPrueba}></img>
                    <img src={productoPrueba}></img>
                    <img src={productoPrueba}></img>
                </div>
                <div className="contenedor-vista-producto-detalles">
                    <div className="detalles">
                        <h4>{blog.nombreProducto}</h4>
                        <p>{blog.descripcion}</p>
                        <p>{blog.precio}$</p>
                    </div>
                    <div className="botones-compra">
                        <button>CARRITO</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default VistaProducto;

