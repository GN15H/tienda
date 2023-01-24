import productoPrueba from '../imagenes/producto-prueba.webp'
import '../hojas-de-estilo/VistaProducto.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'




//const URI = 'http://localhost:8000/productos/1'

const cond = 'http://localhost:8000/productos'

function VistaProducto(props){
    
    const location = useLocation().pathname
   
    const dato = location.length - 1
    //console.log(cond + location[dato])
    let a = ''

    let b= ''

    function id (contador, b){
        if (contador>= 0){
            if (location[contador] == '/'){
                a = b
            }else{
                //console.log( location[contador] + b);
                id(contador-1, location[contador] + b)
            }
        }
    }
    id(dato,'')


    const [blog, setBlog] =useState({dato: '', imagen: ''})
    useEffect( ()=>{
        getProductList()
    }, [])

    const getProductList = async ()=>{
        const res = await axios.get(cond + '/' + a)
        const resImage = await axios.get(cond + '/' + 'images/')
        b = resImage.data
        setBlog({dato: res.data, imagen: b[a-1]})
        //console.log(res.data);
    }
    console.log(b[a-1]);


    return(
        <div className='contenedor-general'>

            <div className="contenedor-vista-producto">
                <div className="contenedor-vista-producto-imagenes">
                    <img src={blog.imagen}></img>
                    <img src={blog.imagen}></img>
                    <img src={blog.imagen}></img>
                </div>
                <div className="contenedor-vista-producto-detalles">
                    <div className="detalles">
                        <h4>{blog.dato.nombreProducto}</h4>
                        <p>{blog.dato.descripcion}</p>
                        <p>{blog.dato.precio}$</p>
                    </div>
                    <div className="botones-compra">
                        <button className='boton-mas' onClick={props.masCarrito}>+</button>
                        <button className='boton-menos' onClick={props.menosCarrito}>-</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default VistaProducto;

