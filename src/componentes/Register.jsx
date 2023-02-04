import { useState } from "react"
import '../hojas-de-estilo/Login.css'
import { Link, Navigate } from "react-router-dom"
import axios from "axios"

// const URI = 'http://localhost:8000/productos/'
const URI = 'https://react-backend.onrender.com/productos/'

function Register({setGlobal}){
    const [body, setBody] = useState({username: '', password:'', email: '', address:'', phone:0}) //se genera un useState para manejar un body el cual se le entregara a la petición de registro

    const [auth, setAuth] = useState(false) //useState para verificar autentificación al ser registrado exitosamente

    const inputChange = ({target})=>{ //funcion que cambia los valores del body cada vez que se escribe algo en los formularios
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }
    const onSubmit = (e)=>{//funcion que envia la petición de registro con el body,
        e.preventDefault();
        axios.post(URI + 'reg', body)
        .then(({data}) =>{
            if (data !== 'Exito') return //en caso de ser exitoso el registro se guard en el localstorage y se cambia el auth

                localStorage.setItem('auth', true)
                localStorage.setItem('username', body.username)
                localStorage.setItem('isAdmin', false)
                setGlobal(true)
                setAuth(true)   
        })
        .catch(({response})=>{
            console.log(response.data);
        })
    }
    if(auth){//en caso de ya haber sido autentificado es devuelto para los productos
        console.log('deberia');
        return <Navigate to='/productos' />
    }
    //formulario que contiene los diferentes inputs que va a contener el body
    return(
        <div className="login">
            <div className="username-password">
                <form>
                    <input type="text" placeholder="Usuario"  name="username" value={body.username} onChange={inputChange} />
                    <input type="password" placeholder="Contraseña" name="password" value={body.password} onChange={inputChange}/>
                    <input type="text" placeholder="email" name="email" value={body.email} onChange={inputChange}/>
                    <input type="text" placeholder="address" name="address" value={body.address} onChange={inputChange}/>
                    <input type="text" placeholder="phone" name="phone" value={body.phone} onChange={inputChange}/>
                    <Link to="/register" className="submit-login" >
                        <button className="boton-login" onClick={onSubmit}>REGISTER</button>
                    
                    </Link>
                </form>

            </div>
            <div className="contenedor-boton-login">
            </div>
        </div>
    )

}

export default Register;