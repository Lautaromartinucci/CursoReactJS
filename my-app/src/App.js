import './App.css'
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Navbar from './components/navegacion/navbar'
import Inicio from './components/paginas/inicio'
import Tienda from './components/paginas/tienda'
import nosotros from './components/paginas/nosotros'
import ItemListContainer from './components/paginas/ItemListContainer'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/inicio' exact component={Inicio}/>
          <Route path='/nosotros' exact component={nosotros}/>
          <Route path='/tienda' exact component={Tienda}/>
          <Route path='/ItemListContainer' exact component={ItemListContainer}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
