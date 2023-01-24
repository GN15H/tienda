import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Carrito from './componentes/Carrito';
import ContenedorProductos from './componentes/ContenedorProductos';
import Header from './componentes/Header'
import Login from './componentes/Login';
import Producto from './componentes/Producto';
import VistaProducto from './componentes/VistaProducto';


function App() {

  // const [carrito, setCarrito] = useState(0)
  // const masCarrito = ()=>{
  //   setCarrito(carrito + 1)
  //   console.log(carrito);
  // }
  // const menosCarrito = ()=>{
  //   if (carrito > 0){
  //     setCarrito(carrito - 1)
  //   }
  //   console.log(carrito);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/productos' element={<ContenedorProductos />} />
          <Route path={`/productos/:id`} element={<VistaProducto />} />
          <Route path='/login' element={<Login/>} /> 
          <Route path='/carrito' element={<Carrito />}/>
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
