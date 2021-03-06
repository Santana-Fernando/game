import logo from './logo.svg';
import './App.css';
import Expositor from './screens/expositor'

function App(props) {
  console.log()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Expositor></Expositor>
      </header>
    </div>
  );
}

export default App;
