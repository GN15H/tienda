import { useContext } from "react";
import UserContext from "../context/UserContext";
//crea una funcion que le permite obtener el contexto del usuario


export default () => useContext(UserContext);