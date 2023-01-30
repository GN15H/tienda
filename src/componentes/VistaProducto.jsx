import productoPrueba from '../imagenes/producto-prueba.webp'
import '../hojas-de-estilo/VistaProducto.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { buy, boughtObj, discard, deleteBought } from './Carrito'
import useUser from '../hooks/useUser'
import useCart from '../hooks/useCart'




const cond = 'http://localhost:8000/productos'

function VistaProducto(props) {
    const cart = useCart()
    const user = useUser()
    const location = useLocation().pathname

    const dato = location.length - 1
    let a = ''
    let b = ''

    function id(contador, b) {
        if (contador >= 0) {
            if (location[contador] == '/') {
                a = b
            } else {
                id(contador - 1, location[contador] + b)
            }
        }
    }
    id(dato, '')

    const handleClick = async () =>{
        const res = await axios.get(cond + '/book/' + a + '?f=book')
        if (res.data === 'Booked'){
            if (cart.boughtObj.hasOwnProperty(a)){
                cart.boughtObj[a]++
            }else{
                cart.boughtObj[a] = 1
            }
            cart.setBoughtObj({...cart.boughtObj})
        }else if (res.data === 'Stockout'){
            return alert('Item out of stock')
        }       
    }


    const [blog, setBlog] = useState({ dato: '', imagen: '' })
    useEffect(() => {
        getProductList()
    }, [])

    const getProductList = async () => {
        const res = await axios.get(cond + '/' + a)
        const resImage = await axios.get(cond + '/images/' + a)
        b = resImage.data
        setBlog({ dato: res.data, imagen: b })
    }


    if (!user.auth) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className='contenedor-general'>

            <div className="contenedor-vista-producto">
                <div className="contenedor-vista-producto-imagenes">
                    <img src={blog.imagen.imagen1}></img>
                    <img src={blog.imagen.imagen2}></img>
                    <img src={blog.imagen.imagen3}></img>
                </div>
                <div className="contenedor-vista-producto-detalles">
                    <div className="detalles">
                        <h4>{blog.dato.nombreProducto}</h4>
                        <p>{blog.dato.descripcion}</p>
                        <p>{blog.dato.precio}$</p>
                    </div>
                    <div className="botones-compra">
                        <button className='boton-mas' onClick={handleClick}>ADD</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default VistaProducto;

