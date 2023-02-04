import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import carrito from '../imagenes/carrito.webp'


function LoginRegisterProfile({setGlobal}) {
   const user = useUser();//obtiene el contexto global del usuario

   const logout = (e)=>{//funcion que cambia la autentificacion y quita datos del localstorage
    e.preventDefault()
    setGlobal(false)
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    localStorage.removeItem('isAdmin')
    window.location.href = '/productos';
   }

    if (!user.auth) { //muestra el login y register en caso de no estar autentificado
        return (
            <div className="contenedor-links1">
                <Link className="link-login" to="/login">
                    <div >
                        LOGIN
                    </div>
                </Link>
                <Link className="link-register" to="/register">
                    <div >
                        REGISTER
                    </div>
                </Link>
            </div>
        )
    }else{//muestra el perfil y el carrito en caso de estar autentificado
        return(
            <div className="contenedor-links1">
                <Link className="link-profile" to="/perfiladmin">
                    PERFIL
                </Link>
                <button onClick={logout} className="link-logout">LOGOUT</button>
                <Link className="link-carrito" to={'/carrito'}>
                    <div className="contenedor-carrito">
                        <img className="imagen-carrito" src={carrito}></img>
                    </div>
                </Link>
            </div>
        )
    }


}

export default LoginRegisterProfile;