import "./css/App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appmiddle">
        <img src={logo} alt="" width="184" height="118" />
        <div className="appsomediv">
          <input
            className="appinput"
            placeholder="https://www.web-huudas.mn"
            onChange={(e) => {}}
          />
          <button className="appbutton">Богиносгох</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
