import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Carrito from './componentes/Carrito';
import ContenedorProductos from './componentes/ContenedorProductos';
import Editar from './componentes/Editar';
import Header from './componentes/Header'
import Login from './componentes/Login';
import Producto from './componentes/Producto';
import Register from './componentes/Register';
import VistaProducto from './componentes/VistaProducto';
import CartContext from './context/CartContext';
import UserContext from './context/UserContext';


function App() {
  const setGlobal = value => {
    setIsAuth(value)
  }

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    let auth = localStorage.getItem('auth') || false;
    setIsAuth(auth)
  }, [isAuth])
  
  const [cartObj, setCarObj] = useState({})
  const setterCartObj = value => setCarObj(value)


  return (


    <UserContext.Provider value={{ auth: isAuth, username: localStorage.getItem('username'), isAdmin: localStorage.getItem('isAdmin') }}>

      <CartContext.Provider value={{ boughtObj: cartObj, setBoughtObj: setterCartObj}}>
        <div className="App">
          <BrowserRouter>
            <Header setGlobal={setGlobal} />
            <Routes>
              <Route path='/productos' element={<ContenedorProductos />} />
              <Route path={`/productos/:id`} element={<VistaProducto />} />
              <Route path='/login' element={<Login setGlobal={setGlobal} />} />
              <Route path='/register' element={<Register setGlobal={setGlobal} />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/editar/:id' element={<Editar />} />
            </Routes>
          </BrowserRouter>
        </div>

      </CartContext.Provider>
    </UserContext.Provider>

  );
}

export default App;
