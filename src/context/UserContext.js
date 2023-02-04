import { createContext } from "react"; //importar libreria para crear el contexto

const UserContext = createContext({
    auth: false,
    username: null,
    isAdmin: null
});

//Crea un contexto global que maneja la autentificación del usuario, su usuario y el admin

export default UserContext;