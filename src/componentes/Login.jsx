import { useState } from "react"
import '../hojas-de-estilo/Login.css'

function Login(props){
    const [valores, setValor] = useState(['','']) 

    return(
        <div className="login">
            <div className="username-password">
                <form>
                    <input type="text" placeholder="Usuario"  name="usuario" />
                    <input name="password" />
                    <button className="boton-login">LOGIN</button>
                </form>

            </div>
            <div className="contenedor-boton-login">
            </div>
        </div>
    )

}

export default Login;