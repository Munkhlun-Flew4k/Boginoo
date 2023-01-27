import { Header } from "../Components/Header";
import logo from "../img/logo.png";
import "../css/Signup.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const buttonclick = () => {
    axios
      .post("http://localhost:8000/users", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.status === 201) {
          navigate("/login");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="app">
        <Header />
        <div className="inputmiddle">
          <img src={logo} alt="" width="184" height="118" />
          <h1 className="signuptitle">Бүртгүүлэх</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
              <div>
                <h1 className="inputtitle">Цахим хаяг</h1>
                <input
                  className="input"
                  placeholder="name@mail.domain"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div>
                <h1 className="inputtitle">Нууц үг</h1>
                <input
                  className="input"
                  placeholder="••••••••••"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div>
                <h1 className="inputtitle">Нууц үгээ давтна уу?</h1>
                <input className="input" placeholder="••••••••••" />
              </div>
            </div>
            <button className="signupbutton" onClick={buttonclick}>
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
