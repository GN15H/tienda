import { useState } from "react"
import '../hojas-de-estilo/Login.css'
import { Link, Navigate } from "react-router-dom"
import axios from "axios"

const URI = 'http://localhost:8000/productos/'


function Register({setGlobal}){
    const [body, setBody] = useState({username: '', password:'', email: '', address:'', phone:0}) 

    const [auth, setAuth] = useState(false)

    const inputChange = ({target})=>{
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        axios.post(URI + 'reg', body)
        .then(({data}) =>{
            if (data !== 'Exito') return

                localStorage.setItem('auth', true)
                localStorage.setItem('username', body.username)
                setGlobal(true)
                setAuth(true)   
        })
        .catch(({response})=>{
            console.log(response.data);
        })
    }
    if(auth){
        console.log('deberia');
        return <Navigate to='/productos' />
    }

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