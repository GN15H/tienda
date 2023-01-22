import './App.css';
import ContenedorProductos from './componentes/ContenedorProductos';
import Header from './componentes/Header'
import Producto from './componentes/Producto';

function App() {
  return (
    <div className="App">
      <Header/>
      <ContenedorProductos/>
    </div>  
  );
}

export default App;
