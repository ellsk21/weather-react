import logo from './logo.svg';
import './App.css';
import Weather from "./Weather.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <Weather />

       
      </header>
    </div>
  );
}

export default App;
