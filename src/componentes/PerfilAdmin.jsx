import { useState } from "react"
import axios from "axios"
import { Link, Navigate } from "react-router-dom"
import useUser from "../hooks/useUser"

const URI = 'http://localhost:8000/productos/edit/1'


function PerfilAdmin(){
    const user = useUser();

    const [body, setBody] = useState({username: '', password:'', email: '', address:'', phone:undefined})

    const inputChange = ({target})=>{
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = async (e)=>{
        //console.log('Editar');
        e.preventDefault();
        await axios.put(URI, body)
        .then(({data}) =>{
            alert('Registro actualizado exitosamente')
        })
        .catch(({response})=>{
            alert(response.message)
        })
    }

    
    if (user.isAdmin === 'false'){
        return <Navigate to="/productos" />
    }


    return (
        <div className="login">
            <div className="username-password">
                <form>
                    <input type="text" placeholder="New Username" name="username" value={body.username} onChange={inputChange}/>
                    <input type="text" placeholder="New Password" name="password" value={body.password} onChange={inputChange}/>
                    <input type="text" placeholder="New Email" name="email" value={body.email} onChange={inputChange}/>
                    <input type="text" placeholder="New Address" name="address" value={body.address} onChange={inputChange}/>
                    <input type="text" placeholder="New Phone" name="phone" value={body.phone} onChange={inputChange}/>
                    <Link to="/productos" className="submit-login" >
                        <button className="boton-login" onClick={onSubmit}>EDITAR</button>

                    </Link>
                </form>

            </div>
            <div className="contenedor-boton-login">
            </div>
        </div>
        )
}

export default PerfilAdmin;