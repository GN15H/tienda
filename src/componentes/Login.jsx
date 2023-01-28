import { useState } from "react"
import '../hojas-de-estilo/Login.css'
import { Link, redirect, Navigate } from "react-router-dom"
import axios from "axios"

const URI = 'http://localhost:8000/productos/'

function Login({ setGlobal }){

    const [auth, setAuth] = useState(false)

    const [body, setBody] = useState({username: '', password:''}) 

    const inputChange = ({target})=>{
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post(URI + 'users', body)
        .then(({data}) =>{
            if (typeof data !== 'string'){
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
    if (auth){
        return <Navigate to='/productos' />
    }

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