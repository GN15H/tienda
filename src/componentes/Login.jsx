import { useState } from "react"
import '../hojas-de-estilo/Login.css'
import { Link } from "react-router-dom"
import axios from "axios"

const URI = 'http://localhost:8000/productos/'

function Login(props){
    const [body, setBody] = useState({username: '', password:''}) 

    const inputChange = ({target})=>{
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }
    const onSubmit = ()=>{
        axios.post(URI + 'users', body)
        .then(({data}) =>{
            console.log(data)
        })
        .catch(({response})=>{
            console.log(response.data);
        })
    }
    return(
        <div className="login">
            <div className="username-password">
                <form>
                    <input type="text" placeholder="Usuario"  name="username" value={body.username} onChange={inputChange} />
                    <input type="password" placeholder="Contraseña" name="password" value={body.password} onChange={inputChange}/>
                    <Link to="/productos" className="submit-login" >
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