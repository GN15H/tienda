import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContenedorProductos from './componentes/ContenedorProductos';
import Header from './componentes/Header'
import Producto from './componentes/Producto';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContenedorProductos />}/>
          

        </Routes>
      </BrowserRouter>
      {/*<ContenedorProductos/>*/}
    </div>  
  );
}

export default App;
