import { useContext } from "react";
import CartContext from "../context/CartContext";

const  useCart = () => useContext(CartContext);
//crea una funcion que le permite obtener el contexto del carrito

export default useCart;