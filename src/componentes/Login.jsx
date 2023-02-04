import { useState } from "react"
import '../hojas-de-estilo/Login.css'
import { Link, redirect, Navigate } from "react-router-dom"
import axios from "axios"

const URI = 'http://localhost:8000/productos/'

function Login({ setGlobal }){

    const [auth, setAuth] = useState(false) //cambia el estado del auth dependiendo si esta registrado o no

    const [body, setBody] = useState({username: '', password:''}) //cambia el valor del body por el valor delos inputs 

    const inputChange = ({target})=>{ //funcion que se ejecuta cuando hay algun cambio en un formulario
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }
    const onSubmit = async (e)=>{ //función que genera petición y retorna verificación si el usuario existe
        e.preventDefault();
        await axios.post(URI + 'users', body)
        .then(({data}) =>{
            if (typeof data !== 'string'){//en caso de ser peticion con respuesta exitosa, autentifica el usuario
                localStorage.setItem('auth', true)
                localStorage.setItem('username', data.username)
                localStorage.setItem('isAdmin', data.isAdmin)
                setGlobal(true)
                setAuth(true)
            }
        })
        .catch(({response})=>{
            //console.log(response.data);
        })
    }
    if (auth){//en caso de ser autentificado, es redireccionado hacia productos
        return <Navigate to='/productos' />
    }
    
    //contenedor que tiene el formulario que va a tener los datos del login
    return(
        <div className="login">
            <div className="username-password">
                <form>
                    <input type="text" placeholder="Usuario"  name="username" value={body.username} onChange={inputChange} />
                    <input type="password" placeholder="Contraseña" name="password" value={body.password} onChange={inputChange}/>
                    <Link to="/login" className="submit-login" >
                        <button className="boton-login" onClick={onSubmit}>LOGIN</button>
                    
                    </Link>
                </form>

            </div>
            <div className="contenedor-boton-login">
            </div>
        </div>
    )

}

export default Login;