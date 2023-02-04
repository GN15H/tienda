import { useState, useEffect} from "react"
import Producto from "./Producto";
import productos from './ProductosPrueba'
import '../hojas-de-estilo/ContenedorProductos.css'
import axios from 'axios'
import  { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/productos/'


function ContenedorProductos(props){

    const a = 'comprar'

    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getProducts()
    }, [])
    
    const getProducts= async ()=>{
        const res = await axios.get(URI)//obtiene todos los productos
        const resImage = await axios.get(URI + 'images/') //obtiene todas las imagenes
        let response = [] //arreglo que contieene productos
        //console.log(res.data);
        //console.log(images.data);
        for (let i = 0; i< res.data.length; i++){ //junta en un arreglo los productos e imagnes
            response.push({datos: res.data[i], imagen: resImage.data[i]})
        }
        //console.log(blogs[0].imagen);
        setBlog(response)
        console.log(blogs);
    }
    //div que mapea el arreglo de productos 
     return(
        <>
            <div className="contenedor-lista-productos">
                {   //mapeo del arreglo
                    blogs.map((blog) => 
                        <Producto 
                            id={blog.datos.id}
                            key={blog.datos.id}
                            nombreProducto={blog.datos.nombreProducto}
                            detallesProducto={blog.datos.descripcion}
                            precio={blog.datos.precio}
                            imagen={blog.imagen}
                            accion={a}
                        />
                       
                    ) 
                }
                
            </div>
        </>
     )
 }

 export default ContenedorProductos;