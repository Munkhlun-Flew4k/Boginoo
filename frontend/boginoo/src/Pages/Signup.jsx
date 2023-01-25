import React from "react";
import { Header } from "../Components/Header";
import logo from "../img/logo.png";
import "../css/Signup.css";
import { Input } from "../Components/Input";
import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const buttonclick = () => {
    axios
      .post("http://localhost:8000/", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
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
            <Input
              title="Цахим хаяг"
              placeholder="name@mail.domain"
              value={setEmail}
            />
            <Input
              title="Нууц үг"
              placeholder="••••••••••"
              value={setPassword}
            />
            <Input title="Нууц үгээ давтна уу?" placeholder="••••••••••" />
            <button className="signupbutton" onClick={buttonclick}>
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
