import { createContext } from "react";

const UserContext = createContext({
    auth: false,
    username: null,
    isAdmin: null
});

//Crea un contexto global que maneja la autentificación del usuario, su usuario y el admin

export default UserContext;