//import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Register />
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <Login/>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
