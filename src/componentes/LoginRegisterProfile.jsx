import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

function LoginRegisterProfile({setGlobal}) {
   const user = useUser();

   const logout = (e)=>{
    e.preventDefault()
    setGlobal(false)
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
   }

    if (!user.auth) {
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
    }else{
        return(
            <div className="contenedor-links1">
                <Link className="link-profile">
                    PERFIL
                </Link>
                <button onClick={logout} className="link-logout">LOGOUT</button>
            </div>
        )
    }


}

export default LoginRegisterProfile;