import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContenedorProductos from './componentes/ContenedorProductos';
import Header from './componentes/Header'
import Login from './componentes/Login';
import Producto from './componentes/Producto';
import VistaProducto from './componentes/VistaProducto';


function App() {
  const href = window.location.href
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContenedorProductos/>} />
          <Route path={`/:id`} element={<VistaProducto/>} />
          {/* <Route path='/login' element={<Login/>} /> */}
        </Routes>
      </BrowserRouter>
      {/*<ContenedorProductos/>*/}
    </div>  
  );
}

export default App;
