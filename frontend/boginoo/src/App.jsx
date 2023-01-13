import "./css/App.css";
import { Header } from "./Components/Header";
import logo from "./img/logo.png";
import { useState } from "react";
import axios from "axios";
import { Links } from "./Components/Links";

function App() {
  const [url, setUrl] = useState();
  const [Link, setLink] = useState({ shortURL: "", originalURL: "" });

  const buttonclick = () => {
    axios
      .post("http://localhost:8000", {
        originalURL: url,
      })
      .then(function (response) {
        setLink({
          shortURL: response.data.shortURL.shortURL,
          originalURL: response.data.shortURL.originalURL,
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <Header />
      <div className="appmiddle">
        <img src={logo} alt="" width="184" height="118" />
        <div className="appsomediv">
          <input
            className="appinput"
            placeholder="https://www.web-huudas.mn"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button className="appbutton" onClick={buttonclick}>
            Богиносгох
          </button>
        </div>
        <Links shorturl={Link.shortURL} originalurl={Link.originalURL} />
      </div>
    </div>
  );
}

export default App;
