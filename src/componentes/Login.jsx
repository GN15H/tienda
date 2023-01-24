import { useState } from "react"
import '../hojas-de-estilo/Login.css'
import { Link } from "react-router-dom"

function Login(props){
    const [valores, setValor] = useState(['','']) 

    return(
        <div className="login">
            <div className="username-password">
                <form>
                    <input type="text" placeholder="Usuario"  name="usuario" />
                    <input type="text" placeholder="Contraseña" name="password" />
                    <Link className="submit-login" to="/productos">
                        <button className="boton-login">LOGIN</button>
                    
                    </Link>
                </form>

            </div>
            <div className="contenedor-boton-login">
            </div>
        </div>
    )

}

export default Login;