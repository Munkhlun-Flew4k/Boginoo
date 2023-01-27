import { React, useState } from "react";
import { Header } from "../Components/Header";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const buttonclick = () => {
    axios
      .post("http://localhost:8000/users/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.status === 201) {
          navigate("/");
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <Header />
      <div className="inputmiddle">
        <img src={logo} alt="" width="184" height="118" />
        <h1 className="signuptitle">Нэвтрэх</h1>
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

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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

            <button className="signupbutton" onClick={buttonclick}>
              Нэвтрэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
