import logo from './logo.svg';
import './App.css';
import Expositor from './screens/expositor'

function App(props) {
  console.log()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game Store</h1>
        <Expositor></Expositor>
      </header>
    </div>
  );
}

export default App;
