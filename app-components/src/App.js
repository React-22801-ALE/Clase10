import logo from "./logo.svg";
import image from "./assets/img/nflix.png";
import "./App.css";
// import HelloWorld from './component/banner/Banner.js';
import { Banner as Saludo } from "./component/banner/Banner.js";
// Traigo todo lo que tengo en Banner.js
// import './component/banner/Banner.js';
import Navbar from "./component/navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      {/* Puedo crear atributos (msg) y los capturo con los props*/}
      <Saludo msg="Hola Mundo!" />
      <Navbar src={image}></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo1" />
        <p>
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
    </div>
  );
}

// HelloWorld();

export default App;
