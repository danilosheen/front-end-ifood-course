import './App.css';
import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div className="App">
      <div>
        <Topo></Topo>
        <Conteudo></Conteudo>
        <Rodape></Rodape>
      </div>
    </div>
  );
}

export default App;
