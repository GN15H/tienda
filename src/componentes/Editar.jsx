import { useState, useEffect } from "react"
import Producto from "./Producto";
import productos from './ProductosPrueba'
import '../hojas-de-estilo/ContenedorProductos.css'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

const URI = 'http://localhost:8000/productos/'


function Editar() {

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

    
    const [body, setBody] = useState({nombreProducto: null, descripcion:null, precio:null, stock: 0})
     
    const inputChange = ({target})=>{
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
        console.log(body);
    }
    const onSubmit = async (e)=>{
        console.log('Editar');
        e.preventDefault();
        await axios.put(URI + a, body)
        .then(({data}) =>{
            console.log(data);
        })
        .catch(({response})=>{
            //console.log(response.data);
        })
    }

    


    return (
        <div className="login">
            <div className="username-password">
                <form>
                    <input type="text" placeholder="Nombre del Producto" name="nombreProducto" value={body.nombreProducto} onChange={inputChange}/>
                    <input type="text" placeholder="Descripcion del Producto" name="descripcion" value={body.descripcion} onChange={inputChange}/>
                    <input type="text" placeholder="Precio del Producto" name="precio" value={body.precio} onChange={inputChange}/>
                    <input type="text" placeholder="Stock del Producto" name="stock" value={body.stock} onChange={inputChange}/>
                    <Link to="/productos" className="submit-login" >
                        <button className="boton-login" onClick={onSubmit}>EDITAR</button>

                    </Link>
                </form>

            </div>
            <div className="contenedor-boton-login">
            </div>
        </div>)
}

export default Editar;