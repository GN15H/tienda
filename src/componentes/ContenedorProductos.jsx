import { useState, useEffect} from "react"
import Producto from "./Producto";
import productos from './ProductosPrueba'
import '../hojas-de-estilo/ContenedorProductos.css'
import axios from 'axios'
import  { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/productos/'


function ContenedorProductos(props){

    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getProducts()
    }, [])
    
    const getProducts= async ()=>{
        const res = await axios.get(URI)
        setBlog(res.data)
        console.log(res.data);
    }

     return(
        <>
            <div className="contenedor-lista-productos">
                {
                    blogs.map((blog) => 
                        <Producto 
                            nombreProducto={blog.nombreProducto}
                            detallesProducto={blog.descripcion}
                            id={blog.id}
                            precio={blog.precio}
                        />
                       
                    ) 
                }
                
            </div>
        </>
     )
 }

 export default ContenedorProductos;