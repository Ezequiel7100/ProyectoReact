import './App.css';
import NavBar from '../src/components/NavBar.js';
import ItemListContainer from '../src/components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings={"proximamente..."}/>
    </div>
  );
}

export default App;
