import '../hojas-de-estilo/VistaProducto.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useLocation } from 'react-router-dom'
import useUser from '../hooks/useUser'
import useCart from '../hooks/useCart'




// const cond = 'http://localhost:8000/productos/'
const cond = 'https://react-backend.onrender.com/productos/'


function VistaProducto(props) {
    const cart = useCart()//se obtienen los datos del carrito
    const user = useUser()//se obtienen los datos del usuario
    const location = useLocation().pathname //se obtiene el path de la url

    const dato = location.length - 1 //se obtiene la longitud del string-1
    let a = ''
    let b = ''

    function id(contador, b) { //funcion que obtiene el ultimo parametro del pah
        if (contador >= 0) {
            if (location[contador] === '/') {
                a = b
            } else {
                id(contador - 1, location[contador] + b)
            }
        }
    }
    id(dato, '')

    const handleClick = async () => { //funcion que hace la petición de reservar o soltar, mediante querys en la url
        const res = await axios.get(cond + '/book/' + a + '?f=book')
        if (res.data === 'Booked') {
            if (cart.boughtObj.hasOwnProperty(a)) { //en caso de el producto ya estar registrado aumenta, si no, lo añade
                cart.boughtObj[a]++
            } else {
                cart.boughtObj[a] = 1
            }
            cart.setBoughtObj({ ...cart.boughtObj })
        } else if (res.data === 'Stockout') {
            return alert('Item out of stock')
        }
    }


    const [blog, setBlog] = useState({ dato: '', imagen: '' }) //funcion que obtiene el registro del producto y la imagen del producto
    useEffect(() => {
        const getProductList = async () => {
            const res = await axios.get(cond + '/' + a) //petición producto
            const resImage = await axios.get(cond + '/images/' + a) //petición user
            b = resImage.data
            setBlog({ dato: res.data, imagen: b })//se setea blog al objeto producto/imagen
        }

        getProductList()
    }, [])



    if (!user.auth) {//en caso de no estar autenticado es redireccionado hacia el login
        return <Navigate to={'/login'} />
    }
    //contenedor que tiene la vista individual del producto
    return (
        <div className='contenedor-general'>

            <div className="contenedor-vista-producto">
                <div className="contenedor-vista-producto-imagenes">
                    <img src={blog.imagen.imagen1} alt="imagen1"></img>
                    <img src={blog.imagen.imagen2} alt="imagen2"></img>
                    <img src={blog.imagen.imagen3} alt="imagen3"></img>
                </div>
                <div className="contenedor-vista-producto-detalles">
                    <div className="detalles">
                        <h4>{blog.dato.nombreProducto}</h4>
                        <p>{blog.dato.descripcion}</p>
                        <p>{blog.dato.precio}$</p>
                    </div>
                    <div className="botones-compra">
                        <button className='boton-mas' onClick={handleClick}>ADD</button>
                        {/* boton que genera la accion handleClick */}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default VistaProducto;

