import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Toggle from './components/Toggle'

function App() {
  return (
    <div className="App">
      <Toggle />
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Build a management platform by react!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
